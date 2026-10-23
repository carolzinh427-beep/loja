import React from 'react';
import { ArrowRight, Award, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#070A0F]">
      {/* Background Image with professional low-key lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=85"
          alt="Showroom de Bicicletas e Motos Bifão"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12]"
        />
        {/* Deep Black & Navy Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-[#070A0F]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-[#070A0F]/70" />
        {/* Subtle Brand Blue Accent Ambience */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0E3D99]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Brand Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/90 border border-[#1B2436] text-xs font-semibold tracking-wider uppercase text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
              <span>Casa das Bicicletas Bifão • Sua Solução em Duas Rodas</span>
            </div>

            {/* Main Punchy Sports Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black italic tracking-tight text-white uppercase leading-[0.95]">
              SUA PRÓXIMA{' '}
              <span className="text-[#FFCC00] relative inline-block">
                BIKE OU MOTO
              </span>{' '}
              ESTÁ AQUI!
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal max-w-2xl leading-relaxed">
              Qualidade, variedade e atendimento especializado em um só lugar.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 bg-[#FFCC00] hover:bg-[#E5B800] text-black font-display font-black text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-[#FFCC00]/15 tracking-wide uppercase hover-lift"
              >
                <span>EXPLORAR PRODUTOS</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
              </button>

              <a
                href="#destaques"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-base px-6 py-4 rounded-lg border border-[#1B2436] hover:border-slate-700 transition-colors uppercase tracking-wide"
              >
                <span>Ver Destaques da Loja</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Destaques Cards with Minimalist Icons */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 sm:space-y-4">
            
            {/* Highlight 1: Tradição */}
            <div className="bg-[#0E1420]/90 backdrop-blur-md p-5 rounded-xl border border-[#1B2436] hover:border-[#FFCC00]/40 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1B3D] text-[#FFCC00] border border-[#1D5FD3]/40 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase">
                    Tradição e Solidez
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-snug">
                    Referência regional em duas rodas. Tradição desde 1988 (ano demonstrativo a confirmar com a loja).
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 2: Variedade */}
            <div className="bg-[#0E1420]/90 backdrop-blur-md p-5 rounded-xl border border-[#1B2436] hover:border-[#FFCC00]/40 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1B3D] text-[#FFCC00] border border-[#1D5FD3]/40 flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase">
                    Variedade em Duas Rodas
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-snug">
                    Bicicletas convencionais, elétricas, motocicletas, equipamentos de proteção e oficina de reposição.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 3: Atendimento */}
            <div className="bg-[#0E1420]/90 backdrop-blur-md p-5 rounded-xl border border-[#1B2436] hover:border-[#FFCC00]/40 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0B1B3D] text-[#FFCC00] border border-[#1D5FD3]/40 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase">
                    Atendimento Especializado
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-snug">
                    Consultoria técnica direta para você escolher o tamanho, modelo e configuração ideais.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
