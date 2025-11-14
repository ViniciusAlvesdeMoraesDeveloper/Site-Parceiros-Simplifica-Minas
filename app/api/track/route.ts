
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const dataFile = path.join(dataDir, 'submissions.json')

const ensureDataFile = () => {
  try {
    if (!fs.existsSync(dataDir)) {
      console.log('📁 Criando pasta data...')
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    if (!fs.existsSync(dataFile)) {
      console.log('📄 Criando arquivo submissions.json...')
      const initialData = { 
        totalEnviado: 0, 
        envios: [] 
      }
      fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2))
      console.log('✅ Arquivo criado com sucesso')
    }
  } catch (error) {
    console.error('❌ Erro ao garantir arquivo:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  console.log('📥 Recebida requisição POST para /api/track')

  try {
    ensureDataFile()
    
    const fileContent = fs.readFileSync(dataFile, 'utf8')
    const data = JSON.parse(fileContent)
    
    // Incrementar contador
    data.totalEnviado += 1
    const novoEnvio = {
      id: Date.now(),
      data: new Date().toLocaleString('pt-BR'),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    }
    data.envios.push(novoEnvio)

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))
    
    console.log('✅ Envio registrado. Total:', data.totalEnviado)
    
    return NextResponse.json({ 
      success: true, 
      total: data.totalEnviado,
      message: 'Envio registrado com sucesso!'
    })
    
  } catch (error) {
    console.error('❌ Erro no API route:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}