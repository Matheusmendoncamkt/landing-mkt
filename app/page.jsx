"use client"

import { Check, Target, TrendingUp, Users, Zap, ArrowRight, Instagram, Globe } from "lucide-react"

export default function MarketingInboundLanding() {
  const whatsappLink = "https://wa.me/5585999078920?text=Vim%20atrav%C3%A9s%20do%20seu%20site"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="Logo Matheus Mendonca MKT"
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-xl font-bold text-green-900">Matheus Mendonca MKT</span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
            Transforme Seu Negócio com
            <span className="bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent block mt-2">
              Marketing Inbound
            </span>
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
            Atraia, engaje e converta seus clientes ideais através de estratégias personalizadas 
            de Marketing Inbound, Social Media e Gestão de Tráfego Pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Ver Nossos Planos
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-800 hover:text-green-900 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Outras seções permanecem iguais */}

      {/* Oferta Especial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full inline-block text-sm font-semibold mb-6">
            🎉 OFERTA ESPECIAL DE LANÇAMENTO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Condição Especial de Fechamento
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ao contratar nosso pacote completo:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>Marketing Inbound + Social Media por R$ 1.200,00/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>1 mês de Gestão de Tráfego Pago GRATUITA</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-3" />
                    <span>R$ 300,00 de investimento em mídia INCLUSOS</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">R$ 1.500,00</div>
                <div className="text-lg opacity-90 mb-4">de valor por apenas</div>
                <div className="text-5xl font-bold text-yellow-300">R$ 1.200,00</div>
                <div className="text-sm opacity-75 mt-2">no primeiro mês</div>
              </div>
            </div>
          </div>
          <p className="text-lg mb-8 opacity-90">
            Estratégia personalizada baseada no perfil da sua marca, 
            com foco em Meta Ads ou Google Ads conforme definido no planejamento.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            Quero Aproveitar Esta Oferta
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Pronto para Acelerar Seus Resultados?
          </h2>
          <p className="text-xl text-green-700 mb-8">
            Entre em contato conosco e descubra como podemos transformar 
            sua presença digital em resultados concretos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-800 hover:text-green-900 transition-all duration-300"
            >
              Ver Portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Footer permanece igual */}
    </div>
  )
}
