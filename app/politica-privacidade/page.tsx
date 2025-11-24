
export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprometidos com a transparência e proteção dos seus dados pessoais
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Data de atualização */}
            <div className="bg-green-50/50 border border-green-200 rounded-lg p-4 mb-8">
              <p className="text-green-800 text-sm font-medium">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>

            {/* Seções */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Informações Gerais
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    O <strong>Colégio Técnico Simplifica Minas EAD</strong> valoriza a privacidade de seus
                    alunos, colaboradores e visitantes. Esta política descreve como coletamos,
                    usamos, armazenamos e protegemos suas informações pessoais, em conformidade
                    com a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Dados que Coletamos
                  </h2>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Informações de identificação (nome, CPF, RG, data de nascimento)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Contato (e-mail, telefone, endereço)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Dados acadêmicos (histórico escolar, matrícula)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Informações de pagamento (para fins de cobrança)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Dados de acesso (IP, navegador, páginas visitadas)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Finalidade do Tratamento
                  </h2>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Matrícula e gestão acadêmica
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Comunicação institucional
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Emissão de documentos e certificados
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Melhoria dos serviços educacionais
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Cumprimento de obrigações legais
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Compartilhamento de Dados
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Seus dados podem ser compartilhados com:
                  </p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Órgãos governamentais de educação (quando exigido por lei)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Parceiros tecnológicos (plataforma EAD)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Sistemas de pagamento
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Empresas de correspondência (para envio de materiais)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Direitos do Titular
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    De acordo com a LGPD, você tem direito a:
                  </p>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Confirmar a existência de tratamento de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Acessar seus dados pessoais
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Corrigir dados incompletos, inexatos ou desatualizados
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Solicitar a eliminação de dados tratados com consentimento
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Revogar o consentimento a qualquer momento
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Segurança das Informações
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Adotamos medidas técnicas e organizacionais para proteger seus dados
                    contra acesso não autorizado, alteração, divulgação ou destruição,
                    incluindo criptografia, controle de acesso e monitoramento contínuo.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">7</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contato do Encarregado de Dados
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
                      entre em contato com nosso Encarregado de Proteção de Dados:
                    </p>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300">
                      <p className="text-gray-900 font-semibold">
                        <span className="text-green-600">E-mail:</span> simplificaminas@gmail.com
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Responderemos em até 72 horas úteis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">8</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Alterações na Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Esta política pode ser atualizada periodicamente para refletir mudanças
                    em nossas práticas ou exigências legais. Alterações significativas serão
                    comunicadas por e-mail ou através de nosso site, mantendo sempre a
                    transparência com nossos usuários.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Colégio Técnico Simplifica Minas EAD • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}