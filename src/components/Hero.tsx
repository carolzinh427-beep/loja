import React from 'react';
import { ArrowRight, Shield, Bike, Users } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-8 sm:pb-14 overflow-hidden bg-[#070A12] border-b border-[#141C2E]">
      {/* Background Image with showroom atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=85"
          alt="Showroom Casa das Bicicletas Bifão"
          className="w-full h-full object-cover object-[65%_center] sm:object-center filter brightness-[0.42] contrast-[1.15]"
        />
        {/* Dark Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#070A12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-[#070A12]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[440px]">
          
          {/* Left Column: Headline, Subtitle, Yellow CTA */}
          <div className="md:col-span-8 space-y-4 sm:space-y-5">
            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tight text-white uppercase leading-[0.95]">
              SUA PRÓXIMA<br />
              <span className="text-[#FFCC00]">BIKE OU MOTO</span><br />
              ESTÁ AQUI!
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-normal max-w-md leading-relaxed">
              Qualidade, variedade e atendimento especializado em um só lugar.
            </p>

            {/* Yellow CTA Button */}
            <div className="pt-1">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 bg-[#FFCC00] hover:bg-[#E5B800] text-black font-display font-black text-sm sm:text-base px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-xl shadow-[#FFCC00]/20 tracking-wider uppercase hover-lift"
              >
                <span>EXPLORAR PRODUTOS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Highlights matching the mockup */}
          <div className="md:col-span-4 flex flex-col space-y-4 sm:space-y-5 self-center">
            
            {/* 1. Tradição desde 1988 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black/40 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0">
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
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black/40 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0">
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
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black/40 border border-[#FFCC00]/40 flex items-center justify-center text-[#FFCC00] flex-shrink-0">
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
