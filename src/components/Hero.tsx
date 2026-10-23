import React from 'react';
import { ArrowRight, Shield, Bike, Users } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#070A12] border-b border-[#141C2E]">
      {/* High-Resolution HD Background Image with low-key lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=90"
          alt="Showroom de Bicicletas e Motos Bifão"
          className="w-full h-full object-cover object-[65%_center] sm:object-center filter brightness-[0.42] contrast-[1.15]"
        />
        {/* Subtle Dark Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#070A12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-[#070A12]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[380px] sm:min-h-[440px]">
          
          {/* Left Column: Vector Typography & CTA */}
          <div className="md:col-span-8 space-y-4 sm:space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tight text-white uppercase leading-[0.95]">
              SUA PRÓXIMA<br />
              <span className="text-[#FFCC00]">BIKE OU MOTO</span><br />
              ESTÁ AQUI!
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-md leading-relaxed">
              Qualidade, variedade e atendimento especializado em um só lugar.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 bg-[#FFCC00] hover:bg-[#E5B800] text-black font-display font-black text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-200 shadow-xl shadow-[#FFCC00]/25 tracking-wider uppercase hover-lift cursor-pointer"
              >
                <span>EXPLORAR PRODUTOS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Vector Pillar Highlights */}
          <div className="md:col-span-4 flex flex-col space-y-4 sm:space-y-6 self-center">
            
            {/* 1. Tradição desde 1988 */}
            <div className="flex items-center gap-3.5 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-[#141C2E]">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0 shadow-md">
                <Shield className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  Tradição
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300">
                  desde 1988
                </span>
              </div>
            </div>

            {/* 2. Variedade em duas rodas */}
            <div className="flex items-center gap-3.5 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-[#141C2E]">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0 shadow-md">
                <Bike className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  Variedade em
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300">
                  duas rodas
                </span>
              </div>
            </div>

            {/* 3. Atendimento especializado */}
            <div className="flex items-center gap-3.5 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-[#141C2E]">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0 shadow-md">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="leading-tight">
                <span className="block text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  Atendimento
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300">
                  especializado
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
