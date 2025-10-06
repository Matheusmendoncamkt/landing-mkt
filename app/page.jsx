"use client";
import Image from "next/image";

export default function MarketingInboundLanding() {
  const whatsappLink = "https://wa.me/558599078920?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo à esquerda */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Logo Matheus Mendonça MKT"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-gray-800">
              Matheus Mendonça MKT
            </span>
          </div>

          {/* Botão WhatsApp no topo */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Fale comigo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Construa uma presença digital que gera resultados reais
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Transforme sua marca em uma máquina de vendas com estratégias
          personalizadas de Marketing Digital e Tráfego Pago.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition"
        >
          Quero impulsionar meu negócio
        </a>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Gestão de Tráfego Pago</h3>
          <p className="text-gray-600">
            Campanhas otimizadas no Meta Ads e Google Ads para gerar leads
            qualificados e aumentar suas vendas.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Design Estratégico</h3>
          <p className="text-gray-600">
            Criação visual pensada para converter, com foco em identidade,
            autoridade e engajamento.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Relatórios e Suporte</h3>
          <p className="text-gray-600">
            Acompanhamento de métricas e suporte personalizado para ajustar sua
            estratégia continuamente.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para elevar seus resultados?
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-700 px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition"
        >
          Falar com especialista
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Matheus Mendonça MKT — Todos os direitos reservados.
      </footer>
    </div>
  );
}
