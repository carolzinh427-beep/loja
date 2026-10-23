import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="inicio" className="relative pt-[88px] sm:pt-[98px] pb-2 sm:pb-4 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Exact Hero Graphic from Mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-[#141C2E] shadow-2xl bg-[#03060D] aspect-[454/210] w-full">
          <img
            src="/mockup-assets/hero-banner.png"
            alt="Sua próxima bike ou moto está aqui! Casa das Bicicletas Bifão"
            className="w-full h-full object-cover object-center select-none"
          />

          {/* Interactive Clickable Hotspot on 'EXPLORAR PRODUTOS' button */}
          <button
            onClick={onExploreClick}
            className="absolute left-[3%] bottom-[6%] w-[38%] sm:w-[32%] md:w-[28%] h-[20%] rounded-full cursor-pointer transition-all hover:bg-white/10 active:scale-95 focus:outline-none"
            title="Explorar Produtos"
            aria-label="Explorar produtos"
          />
        </div>

      </div>
    </section>
  );
};
