"use client"

import { Check, Target, Users, Zap, ArrowRight, Instagram, Globe } from "lucide-react"

export default function MarketingInboundLanding() {
  const whatsappLink = "https://wa.me/5585999078920?text=Vim%20atrav%C3%A9s%20do%20seu%20site"

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      {/* Header */}
      <header className="bg-[#0A1930]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo Mendonça MKT | Assessoria de Marketing Digital"
                className="w-40 sm:w-52 h-12 object-cover object-center"
              />
              <span className="sr-only">Mendonça MKT | Assessoria de Marketing Digital</span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A1930] px-5 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-[#EAF0F7] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1930] via-[#102A4A] to-[#17395F]">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-[#8FAFD0]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-[#B9CCE0] mb-5">
            Mendonça MKT | Assessoria de Marketing Digital
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforme Seu Negócio com
            <span className="bg-gradient-to-r from-white to-[#A9C4DF] bg-clip-text text-transparent block mt-2">
              Marketing Inbound
            </span>
          </h1>
          <p className="text-xl text-[#D5E0EB] mb-8 max-w-3xl mx-auto">
            Atraia, engaje e converta seus clientes ideais através de estratégias personalizadas 
            de Marketing Inbound, Social Media e Gestão de Tráfego Pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0A1930] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#EAF0F7] hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Ver Nossos Planos
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* O que é Marketing Inbound */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1930] mb-4">
              O que é Marketing Inbound?
            </h2>
            <p className="text-xl text-[#52657A] max-w-3xl mx-auto">
              Marketing Inbound é uma metodologia que atrai clientes através de conteúdo relevante e experiências personalizadas, 
              ao invés de interromper com publicidade tradicional. É sobre criar valor, construir confiança e transformar visitantes em clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-[#E8EEF5] border border-[#DCE4EE] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0A1930] to-[#1D4168] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1930] mb-2">Atrair</h3>
              <p className="text-[#52657A]">
                Criamos conteúdo relevante que atrai seus clientes ideais através de SEO, 
                redes sociais e marketing de conteúdo.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-[#E8EEF5] border border-[#DCE4EE] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#102A4A] to-[#315B83] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1930] mb-2">Engajar</h3>
              <p className="text-[#52657A]">
                Desenvolvemos relacionamentos através de conteúdo personalizado, 
                email marketing e interações nas redes sociais.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-[#E8EEF5] border border-[#DCE4EE] hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#17395F] to-[#48759F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A1930] mb-2">Converter</h3>
              <p className="text-[#52657A]">
                Transformamos visitantes em leads e leads em clientes através de 
                estratégias de conversão otimizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F2F5F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1930] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-[#52657A]">
              Soluções completas para acelerar o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#DCE4EE]">
              <div className="flex items-center mb-6">
                <Instagram className="w-8 h-8 text-[#315B83] mr-3" />
                <h3 className="text-2xl font-bold text-[#0A1930]">Marketing Inbound + Social Media</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Estratégia completa de Marketing Inbound</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Gestão profissional de Redes Sociais</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Criação de site/landing page</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Análise e otimização de performance</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Relatórios mensais detalhados</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0A1930] mb-2">R$ 2.700,00</div>
                <div className="text-[#52657A]">por mês</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#DCE4EE]">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-[#315B83] mr-3" />
                <h3 className="text-2xl font-bold text-[#0A1930]">Gestão de Tráfego Pago</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Campanhas no Meta Ads (Facebook/Instagram)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Campanhas no Google Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Otimização contínua de campanhas</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Segmentação avançada de público</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#315B83] mr-3" />
                  <span className="text-[#31465C]">Acompanhamento de ROI em tempo real</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0A1930] mb-2">R$ 300,00</div>
                <div className="text-sm text-[#315B83]">+ investimento em mídia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A1930] to-[#17395F]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full inline-block text-sm font-semibold tracking-wide mb-6">
            OFERTA ESPECIAL DE LANÇAMENTO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Válida até o final de 2026
          </h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ao contratar nosso pacote completo:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#A9C4DF] mr-3" />
                    <span>Social Media</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#A9C4DF] mr-3" />
                    <span>Gestão de Tráfego Pago com R$ 500,00 de verba de mídia paga inclusa</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#A9C4DF] mr-3" />
                    <span>Google Meu Negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#A9C4DF] mr-3" />
                    <span>Criação de Site e Landing Page</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 line-through opacity-70">R$ 3.000,00</div>
                <div className="text-lg opacity-90 mb-4">de valor por apenas</div>
                <div className="text-5xl font-bold text-[#C8DCEF]">R$ 2.500,00</div>
                <div className="text-sm opacity-75 mt-2">condição especial de lançamento</div>
              </div>
            </div>
          </div>
          <p className="text-lg mb-8 opacity-90">
            Uma estratégia integrada para fortalecer sua presença digital,
            atrair clientes e gerar novas oportunidades para o seu negócio.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0A1930] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#EAF0F7] hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            Quero Aproveitar Esta Oferta
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1930] mb-6">
            Pronto para Acelerar Seus Resultados?
          </h2>
          <p className="text-xl text-[#52657A] mb-8">
            Entre em contato conosco e descubra como podemos transformar 
            sua presença digital em resultados concretos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#0A1930] to-[#17395F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#315B83] text-[#0A1930] px-8 py-4 rounded-full text-lg font-semibold hover:border-[#0A1930] hover:bg-[#F2F5F9] transition-all duration-300"
            >
              Ver Portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1930] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/logo.png"
              alt="Logo Mendonça MKT | Assessoria de Marketing Digital"
              className="w-64 h-20 object-cover object-center"
            />
            <span className="sr-only">Mendonça MKT | Assessoria de Marketing Digital</span>
          </div>
          <p className="text-[#B7C6D6]">
            © 2026 Mendonça MKT | Assessoria de Marketing Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
