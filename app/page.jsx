"use client"
import Image from "next/image";

import { Check, Target, TrendingUp, Users, Zap, ArrowRight, Instagram, Globe } from "lucide-react"

export default function MarketingInboundLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-800 to-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-900">Matheus Mendonca MKT</span>
            </div>
            <button className="bg-gradient-to-r from-green-800 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Falar Conosco
            </button>
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
            <button className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Ver Nossos Planos
            </button>
            <button className="border-2 border-green-600 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-800 hover:text-green-900 transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* O que é Marketing Inbound */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              O que é Marketing Inbound?
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Uma metodologia que atrai clientes através de conteúdo relevante e experiências personalizadas, 
              ao invés de interromper com publicidade tradicional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-800 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Atrair</h3>
              <p className="text-green-700">
                Criamos conteúdo relevante que atrai seus clientes ideais através de SEO, 
                redes sociais e marketing de conteúdo.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-700 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Engajar</h3>
              <p className="text-green-700">
                Desenvolvemos relacionamentos através de conteúdo personalizado, 
                email marketing e interações nas redes sociais.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Converter</h3>
              <p className="text-green-700">
                Transformamos visitantes em leads e leads em clientes através de 
                estratégias de conversão otimizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-green-700">
              Soluções completas para acelerar o crescimento do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="flex items-center mb-6">
                <Instagram className="w-8 h-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Marketing Inbound + Social Media</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Estratégia completa de Marketing Inbound</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Gestão profissional do Instagram</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Criação de conteúdo para Threads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Análise e otimização de performance</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Relatórios mensais detalhados</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900 mb-2">R$ 1.200,00</div>
                <div className="text-green-700">por mês</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100">
              <div className="flex itens-center mb-6">
                <Globe className="w-8 h-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Gestão de Tráfego Pago</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Campanhas no Meta Ads (Facebook/Instagram)</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Campanhas no Google Ads</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Otimização contínua de campanhas</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Segmentação avançada de público</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Acompanhamento de ROI em tempo real</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="text-lg text-green-700 mb-2">Valor sob consulta</div>
                <div className="text-sm text-green-600">+ investimento em mídia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <button className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Quero Aproveitar Esta Oferta
            <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
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
            <button className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Falar com Especialista
            </button>
            <button className="border-2 border-green-600 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-800 hover:text-green-900 transition-all duration-300">
              Ver Portfólio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Matheus Mendonca MKT</span>
          </div>
          <p className="text-green-300">
            © 2024 Matheus Mendonca MKT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
