import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#070A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Banner 1: BICICLETAS (Blue Details) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#0E3D99]/40 bg-[#071226] min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-10 group shadow-xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
                alt="Bicicletas esportivas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Deep Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#0B1E4A]/80 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D5FD3]/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0E3D99]/80 border border-[#1D5FD3] text-[11px] font-bold uppercase tracking-wider text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                <span>Linha Bike & E-Bike</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight text-white uppercase leading-none">
                BICICLETAS DE <span className="text-[#38BDF8]">TODOS OS ESTILOS</span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg font-normal max-w-md">
                Duas rodas, infinitas possibilidades.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de consultar modelos e tamanhos de bicicletas disponíveis na Bifão.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0E3D99] hover:bg-[#1D5FD3] text-white font-display font-black text-sm uppercase px-5 py-3 rounded-lg border border-[#38BDF8]/40 transition-all hover-lift"
                >
                  <span>Ver Modelos de Bikes</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8] stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Visual Blue Edge Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1D5FD3]" />
          </div>

          {/* Banner 2: MOTOS (Red Details) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#DC2626]/40 bg-[#1A0909] min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-10 group shadow-xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=1200&q=80"
                alt="Motocicletas Bifão"
                className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Deep Red/Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#3B0D0D]/80 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#DC2626]/80 border border-[#EF4444] text-[11px] font-bold uppercase tracking-wider text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8080]"></span>
                <span>Potência & Alta Estrada</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight text-white uppercase leading-none">
                MOTOS PARA <span className="text-[#EF4444]">TODAS AS ROTAS</span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg font-normal max-w-md">
                Potência, segurança e liberdade.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar sobre as opções de motocicletas na Casa das Bicicletas Bifão.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-display font-black text-sm uppercase px-5 py-3 rounded-lg border border-[#EF4444]/40 transition-all hover-lift"
                >
                  <span>Conferir Linha de Motos</span>
                  <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Visual Red Edge Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#DC2626]" />
          </div>

        </div>
      </div>
    </section>
  );
};
