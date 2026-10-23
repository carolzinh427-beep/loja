import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Banner 1: BICICLETAS with High-Res Photography & Vector Typography */}
          <div className="relative rounded-2xl overflow-hidden border border-[#141C2E] bg-[#0A1124] min-h-[220px] sm:min-h-[260px] flex flex-col justify-end p-6 sm:p-8 group shadow-2xl">
            {/* High-Resolution HD Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=85"
                alt="Bicicletas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#0B152F]/75 to-transparent" />
            </div>

            {/* Vector Typography & Button */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight text-white uppercase leading-none drop-shadow">
                  BICICLETAS<br />
                  <span className="text-[#FFCC00]">DE TODOS OS ESTILOS</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-200">
                  Duas rodas, infinitas possibilidades.
                </p>
              </div>

              {/* Vector Yellow Circular CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Bifão e gostaria de ver os modelos de bicicletas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFCC00] hover:bg-[#E5B800] text-black flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-xl shadow-[#FFCC00]/30"
                aria-label="Ver bicicletas no WhatsApp"
              >
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </a>
            </div>
          </div>

          {/* Banner 2: MOTOS with High-Res Photography & Vector Typography */}
          <div className="relative rounded-2xl overflow-hidden border border-[#141C2E] bg-[#1A0A0A] min-h-[220px] sm:min-h-[260px] flex flex-col justify-end p-6 sm:p-8 group shadow-2xl">
            {/* High-Resolution HD Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=1200&q=85"
                alt="Motocicletas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070A12] via-[#2F0B0B]/75 to-transparent" />
            </div>

            {/* Vector Typography & Button */}
            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight text-white uppercase leading-none drop-shadow">
                  MOTOS<br />
                  <span className="text-[#DC2626]">PARA TODAS AS ROTAS</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-200">
                  Potência, segurança e liberdade.
                </p>
              </div>

              {/* Vector Yellow Circular CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Bifão e gostaria de ver os modelos de motos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFCC00] hover:bg-[#E5B800] text-black flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-xl shadow-[#FFCC00]/30"
                aria-label="Ver motos no WhatsApp"
              >
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
