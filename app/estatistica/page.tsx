"use client"

import { useState, useEffect } from 'react'
import { Users, Calendar, RefreshCw, TrendingUp, MapPin, Clock, Download, Lock } from 'lucide-react'

interface Envio {
  id: number
  data: string
  ip: string
}

interface Dados {
  totalEnviado: number
  envios: Envio[]
}

export default function Estatisticas() {
  const [autenticado, setAutenticado] = useState(false)
  const [senha, setSenha] = useState('')
  const [dados, setDados] = useState<Dados | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [atualizando, setAtualizando] = useState(false)

  // 🔐 ALTERE ESTA SENHA PARA UMA SENHA SEGURA!
  const SENHA_CORRETA = 'Simplifica@2024'

  useEffect(() => {
    if (autenticado) {
      carregarDados()
    }
  }, [autenticado])

  const verificarSenha = () => {
    if (senha === SENHA_CORRETA) {
      setAutenticado(true)
      // Limpar senha da memória
      setSenha('')
    } else {
      alert('Senha incorreta! Tente novamente.')
      setSenha('')
    }
  }

  const carregarDados = async () => {
    setAtualizando(true)
    try {
      const resposta = await fetch('/api/dados')
      const dados = await resposta.json()
      setDados(dados)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setCarregando(false)
      setAtualizando(false)
    }
  }

  const getUltimos7Dias = () => {
    if (!dados) return 0
    const seteDiasAtras = new Date()
    seteDiasAtras.setDate(seteDiasAtras.getDate() - 7)
    
    return dados.envios.filter(envio => {
      const dataEnvio = new Date(envio.data)
      return dataEnvio >= seteDiasAtras
    }).length
  }

  const getEnvioMaisRecente = () => {
    if (!dados || dados.envios.length === 0) return null
    return dados.envios[dados.envios.length - 1]
  }

  const exportarDados = () => {
    if (!dados) return
    
    const csvContent = [
      ['Data', 'IP', 'ID'],
      ...dados.envios.map(envio => [
        new Date(envio.data).toLocaleString('pt-BR'),
        envio.ip,
        envio.id.toString()
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `parceiros-simplifica-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // 🔐 TELA DE LOGIN
  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-200">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-[#02483E] to-[#267F94] p-4 rounded-2xl inline-flex mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Acesso Restrito</h1>
            <p className="text-gray-600">Painel Administrativo - Simplifica Minas</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && verificarSenha()}
                placeholder="Digite a senha"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#267F94] focus:border-transparent transition"
                autoFocus
              />
            </div>
            
            <button
              onClick={verificarSenha}
              className="w-full bg-gradient-to-r from-[#02483E] to-[#267F94] text-white py-3 rounded-xl font-semibold hover:from-[#02352e] hover:to-[#1e6a80] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Acessar Painel
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Acesso restrito à equipe Simplifica Minas
            </p>
          </div>
        </div>
      </div>
    )
  }

  // 📊 TELA DO PAINEL (após login)
  if (carregando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#02483E] border-t-transparent mx-auto mb-6"></div>
            <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#02483E]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Carregando Dashboard</h3>
          <p className="text-gray-600">Preparando suas estatísticas...</p>
        </div>
      </div>
    )
  }

  if (!dados) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-red-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Erro ao Carregar</h3>
          <p className="text-gray-600 mb-6">Não foi possível carregar os dados do formulário.</p>
          <button 
            onClick={carregarDados}
            className="bg-gradient-to-r from-[#02483E] to-[#267F94] text-white px-6 py-3 rounded-xl hover:from-[#02352e] hover:to-[#1e6a80] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  const enviosUltimos7Dias = getUltimos7Dias()
  const envioMaisRecente = getEnvioMaisRecente()
  const taxaCrescimento = dados.totalEnviado > 0 ? ((enviosUltimos7Dias / dados.totalEnviado) * 100).toFixed(1) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#02483E] to-[#267F94] p-3 rounded-2xl shadow-lg">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard de Parcerias</h1>
                <p className="text-gray-600">Simplifica Minas EAD • Acesso Administrativo</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={exportarDados}
                className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Download size={18} />
                <span>Exportar</span>
              </button>
              <button 
                onClick={carregarDados}
                disabled={atualizando}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#02483E] to-[#267F94] text-white px-4 py-2.5 rounded-xl hover:from-[#02352e] hover:to-[#1e6a80] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                <RefreshCw size={18} className={atualizando ? 'animate-spin' : ''} />
                <span>{atualizando ? 'Atualizando...' : 'Atualizar'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total de Envios */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="text-blue-600" size={24} />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">TOTAL</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{dados.totalEnviado.toLocaleString('pt-BR')}</h3>
            <p className="text-gray-600 text-sm">Parceiros interessados</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">Desde o início</p>
            </div>
          </div>

          {/* Últimos 7 Dias */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Calendar className="text-green-600" size={24} />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">7 DIAS</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{enviosUltimos7Dias.toLocaleString('pt-BR')}</h3>
            <p className="text-gray-600 text-sm">Envios recentes</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-green-600 font-semibold">+{taxaCrescimento}% do total</p>
            </div>
          </div>

          {/* Último Envio */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="text-purple-600" size={24} />
              </div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">RECENTE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {envioMaisRecente ? new Date(envioMaisRecente.data).toLocaleDateString('pt-BR') : 'N/A'}
            </h3>
            <p className="text-gray-600 text-sm">Último contato</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                {envioMaisRecente ? new Date(envioMaisRecente.data).toLocaleTimeString('pt-BR') : ''}
              </p>
            </div>
          </div>

          {/* Taxa de Engajamento */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">TENDÊNCIA</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {dados.totalEnviado > 0 ? Math.ceil(dados.totalEnviado / 30) : 0}
            </h3>
            <p className="text-gray-600 text-sm">Média mensal</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">Projeção baseada no total</p>
            </div>
          </div>
        </div>

        {/* Tabela de Envios */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#267F94]" size={24} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Histórico de Interessados</h2>
                  <p className="text-gray-600 text-sm">Registro completo de todos os envios do formulário</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {dados.envios.length} registro{dados.envios.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            {dados.envios.length === 0 ? (
              <div className="text-center py-16">
                <Users className="mx-auto text-gray-300 mb-4" size={64} />
                <h3 className="text-2xl font-semibold text-gray-500 mb-2">Nenhum envio registrado</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Os dados aparecerão aqui assim que os primeiros interessados preencherem o formulário de parceria.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {dados.envios.slice().reverse().map((envio, index) => (
                  <div 
                    key={envio.id} 
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-[#267F94]/20 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#02483E] to-[#267F94] text-white rounded-xl text-sm font-bold shadow-lg">
                        #{dados.envios.length - index}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-[#267F94] transition-colors">
                          {new Date(envio.data).toLocaleString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                        <p className="text-sm text-gray-500 font-mono">IP: {envio.ip}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-200">
                        ✓ Interessado
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        ID: {envio.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
            <p className="text-gray-600">
              Simplifica Minas EAD • Dashboard atualizado em {new Date().toLocaleString('pt-BR')}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Acesso administrativo • Dados confidenciais
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}