import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/storeData';

interface CategoriesProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-8 sm:py-12 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Row of 5 Cards with HD Photography and Vector Labels */}
        <div className="overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4 min-w-[540px] sm:min-w-0">
            {CATEGORIES_DATA.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.filterKey)}
                className="group relative h-28 sm:h-36 md:h-44 rounded-xl overflow-hidden cursor-pointer border border-[#141C2E] bg-[#0A0F1D] hover:border-[#FFCC00] transition-all duration-300 flex flex-col justify-end p-2.5 sm:p-3.5 shadow-xl"
              >
                {/* High-Resolution HD Photography with Studio Lighting */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12] transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/40 to-transparent" />
                </div>

                {/* Vector Bottom Label: Title (White) + Arrow (Yellow Vector) */}
                <div className="relative z-10 flex items-center justify-between gap-1">
                  <span className="font-display text-xs sm:text-sm md:text-base font-bold text-white uppercase tracking-tight truncate drop-shadow">
                    {cat.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFCC00] stroke-[3] flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
