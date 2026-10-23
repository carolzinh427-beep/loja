import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/storeData';

interface CategoriesProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-16 sm:py-20 bg-[#070A0F] border-t border-b border-[#1B2436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFCC00] uppercase mb-1.5">
              <span className="w-6 h-[2px] bg-[#FFCC00]"></span>
              <span>Catálogo Visual</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight text-white uppercase leading-none">
              CATEGORIAS PRINCIPAIS
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Explore nossa linha completa de veículos de duas rodas, peças originais e equipamentos de proteção.
          </p>
        </div>

        {/* 5 Horizontal Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat.filterKey)}
              className="group relative h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer border border-[#1B2436] bg-[#0E1420] transition-all duration-300 hover:border-[#FFCC00]/60 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-end p-5"
            >
              {/* Background Photography with dark lighting */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] transition-transform duration-500 ease-out group-hover:scale-108 group-hover:brightness-[0.55]"
                />
                {/* Dark Vignette Bottom to Top */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#070A0F]/60 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 flex flex-col justify-end">
                <span className="text-[11px] font-semibold text-[#FFCC00] tracking-wider uppercase mb-1">
                  {cat.count}
                </span>

                <h3 className="text-2xl font-black italic text-white uppercase tracking-wide group-hover:text-white transition-colors leading-tight">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* Yellow Arrow Action */}
                <div className="mt-4 pt-3 border-t border-[#1B2436] group-hover:border-[#FFCC00]/40 flex items-center justify-between text-xs font-bold text-white transition-all">
                  <span className="tracking-wider uppercase text-[11px] group-hover:text-[#FFCC00]">
                    Conferir Modelos
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900/90 border border-[#1B2436] group-hover:border-[#FFCC00] group-hover:bg-[#FFCC00] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 text-[#FFCC00] group-hover:text-black stroke-[2.5] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFCC00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
