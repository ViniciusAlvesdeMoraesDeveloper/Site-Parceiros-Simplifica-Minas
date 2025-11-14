
export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-opacity-125 bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparência no uso de cookies para melhorar sua experiência educacional
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

            {/* Seção 1 */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    O que são Cookies?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies são pequenos arquivos de texto armazenados em seu dispositivo
                    quando você visita nosso site. Eles nos ajudam a fornecer uma melhor
                    experiência de navegação, personalizar conteúdo e entender como você
                    interage com nossa plataforma EAD.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">2</span>
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Tipos de Cookies que Utilizamos
                  </h2>

                  {/* Cookies Essenciais */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cookies Essenciais
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      Necessários para o funcionamento básico do site:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Autenticação de usuários no ambiente EAD
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Segurança do sistema e prevenção de fraudes
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Preferências de sessão e carrinho de compras
                      </li>
                    </ul>
                  </div>

                  {/* Cookies de Desempenho */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cookies de Desempenho
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      Coletam informações anônimas sobre como os visitantes usam nosso site:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Páginas mais visitadas e tempo de permanência
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Taxa de rejeição e fluxo de navegação
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Desempenho do sistema e velocidade de carregamento
                      </li>
                    </ul>
                  </div>

                  {/* Cookies Funcionais */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cookies Funcionais
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      Lembram suas escolhas para melhorar sua experiência:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Preferências de idioma e região
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Configurações de acessibilidade
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Informações de login (quando permitido)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Cookies de Terceiros
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Utilizamos serviços de terceiros que podem configurar cookies para
                    funcionalidades específicas:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Google Analytics</h4>
                      <p className="text-orange-700 text-sm">
                        Para análise de tráfego e comportamento dos usuários
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Plataforma EAD</h4>
                      <p className="text-blue-700 text-sm">
                        Cookies específicos do sistema de ensino à distância
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Ferramentas de Pagamento</h4>
                      <p className="text-green-700 text-sm">
                        Para processamento seguro de transações
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Video Players</h4>
                      <p className="text-purple-700 text-sm">
                        Para reprodução de videoaulas e conteúdo multimídia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 4 */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Gerenciamento de Cookies
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Você pode controlar e/ou excluir cookies como desejar. Para saber
                    mais, consulte{' '}
                    <a
                      href="https://www.allaboutcookies.org"
                      className="text-green-600 hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      aboutcookies.org
                    </a>.
                  </p>

                  {/* Alerta de atenção */}
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-amber-500 text-lg">⚠️</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-amber-800 font-semibold mb-2">
                          Atenção Importante
                        </p>
                        <p className="text-amber-700">
                          A desativação de cookies essenciais pode afetar o funcionamento
                          do ambiente EAD e limitar seu acesso a recursos importantes do curso,
                          incluindo videoaulas, atividades e avaliações.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Como gerenciar nos principais navegadores:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Google Chrome</h4>
                      <p className="text-gray-600 text-sm">
                        Configurações → Privacidade e segurança → Cookies e outros dados do site
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Mozilla Firefox</h4>
                      <p className="text-gray-600 text-sm">
                        Opções → Privacidade e Segurança → Cookies e dados do site
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                      <p className="text-gray-600 text-sm">
                        Preferências → Privacidade → Bloquear cookies
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Microsoft Edge</h4>
                      <p className="text-gray-600 text-sm">
                        Configurações → Cookies e permissões do site → Gerenciar e excluir cookies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 5 */}
            <section className="mb-12">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Consentimento
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed">
                      Ao continuar navegando em nosso site, você concorda com o uso de
                      cookies de acordo com esta política. Você pode retirar seu
                      consentimento a qualquer momento através das configurações do
                      seu navegador ou utilizando nossa ferramenta de preferências.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 6 */}
            <section>
              <div className="flex items-start mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="text-green-700 font-semibold text-lg">6</span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Atualizações desta Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Esta política de cookies pode ser atualizada para refletir mudanças
                    em nossas práticas ou por requisitos legais. Recomendamos que você
                    revise esta página periodicamente para se manter informado sobre
                    como utilizamos cookies em nossa plataforma educacional.
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
          <p className="text-gray-400 text-xs mt-2">
            Dúvidas sobre cookies? Entre em contato: simplificaminas@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}