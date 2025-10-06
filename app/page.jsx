"use client";

import Image from "next/image";
import {
  Check,
  Target,
  Users,
  Zap,
  ArrowRight,
  Instagram,
  Globe,
} from "lucide-react";

export default function MarketingInboundLanding() {
  const waNumber = "558599078920"; // +55 85 9907-8920
  const waMessage = encodeURIComponent(
    "Olá, quero mais informações sobre os serviços."
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Logo Matheus Mendonca MKT"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
              <span className="text-xl font-bold text-green-900">
                Matheus Mendonca MKT
              </span>
            </div>

            <a
              href={waLink}
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
            Atraia, engaje e converta seus clientes ideais através de estratégias
            personalizadas de Marketing Inbound, Social Media e Gestão de
            Tráfego Pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block text-center"
            >
              Ver Nossos Planos
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-800 hover:
