import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-6 sm:py-10 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Banner 1: BICICLETAS (Blue Atmosphere & Yellow Details) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#141C2E] bg-[#0A1124] min-h-[170px] sm:min-h-[200px] flex flex-col justify-end p-5 sm:p-7 group shadow-xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80"
                alt="Bicicletas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#0B152F]/70 to-transparent" />
            </div>

            {/* Content matching mockup */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tight text-white uppercase leading-none">
                  BICICLETAS<br />
                  <span className="text-[#FFCC00]">DE TODOS OS ESTILOS</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Duas rodas, infinitas possibilidades.
                </p>
              </div>

              {/* Yellow Circular CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de consultar modelos de bicicletas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFCC00] hover:bg-[#E5B800] text-black flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-[#FFCC00]/25"
                aria-label="Ver bicicletas no WhatsApp"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
              </a>
            </div>
          </div>

          {/* Banner 2: MOTOS (Red Details) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#141C2E] bg-[#1A0A0A] min-h-[170px] sm:min-h-[200px] flex flex-col justify-end p-5 sm:p-7 group shadow-xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=1000&q=80"
                alt="Motocicletas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#2F0B0B]/70 to-transparent" />
            </div>

            {/* Content matching mockup */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tight text-white uppercase leading-none">
                  MOTOS<br />
                  <span className="text-[#DC2626]">PARA TODAS AS ROTAS</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Potência, segurança e liberdade.
                </p>
              </div>

              {/* Yellow Circular CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de consultar opções de motos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFCC00] hover:bg-[#E5B800] text-black flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-[#FFCC00]/25"
                aria-label="Ver motos no WhatsApp"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
