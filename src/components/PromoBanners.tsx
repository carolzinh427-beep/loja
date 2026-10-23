import React from 'react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-3 sm:py-5 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          
          {/* Banner 1: BICICLETAS (Exact mockup banner) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Bifão e gostaria de ver os modelos de bicicletas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#141C2E] hover:border-[#38BDF8] transition-all duration-300 shadow-xl aspect-[220/98] w-full block bg-[#0A1124]"
          >
            <img
              src="/mockup-assets/banner-bicicletas.png"
              alt="Bicicletas de Todos os Estilos - Duas rodas, infinitas possibilidades"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
            />
          </a>

          {/* Banner 2: MOTOS (Exact mockup banner) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Bifão e gostaria de ver os modelos de motos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#141C2E] hover:border-[#DC2626] transition-all duration-300 shadow-xl aspect-[220/98] w-full block bg-[#1A0A0A]"
          >
            <img
              src="/mockup-assets/banner-motos.png"
              alt="Motos Para Todas as Rotas - Potência, segurança e liberdade"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
            />
          </a>

        </div>
      </div>
    </section>
  );
};
