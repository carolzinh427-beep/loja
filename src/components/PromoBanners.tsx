import React from 'react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-3 sm:py-5 bg-[#070A12]">
      <div className="max-w-xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          
          {/* Banner 1: BICICLETAS matching mockup exactly */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Casa das Bicicletas Bifão e gostaria de conhecer as Bicicletas em destaque.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden border border-[#141C2E] hover:border-[#FFCC00] bg-[#0A1124] shadow-md transition-all duration-200 block hover-lift"
            title="Conhecer Bicicletas no WhatsApp"
          >
            <img
              src="/mockup-assets/banner-bicicletas-hd.png"
              alt="Bicicletas de todos os estilos - Casa das Bicicletas Bifão"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-103 select-none"
              loading="lazy"
            />
          </a>

          {/* Banner 2: MOTOS matching mockup exactly */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Casa das Bicicletas Bifão e gostaria de conhecer as Motos em destaque.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden border border-[#141C2E] hover:border-[#FFCC00] bg-[#1A0A0A] shadow-md transition-all duration-200 block hover-lift"
            title="Conhecer Motos no WhatsApp"
          >
            <img
              src="/mockup-assets/banner-motos-hd.png"
              alt="Motos para todas as rotas - Casa das Bicicletas Bifão"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-103 select-none"
              loading="lazy"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

