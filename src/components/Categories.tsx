import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/storeData';

interface CategoriesProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-4 sm:py-6 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Row of 5 Cards matching mockup */}
        <div className="overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="grid grid-cols-5 gap-2 sm:gap-3.5 min-w-[560px] sm:min-w-0">
            {CATEGORIES_DATA.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.filterKey)}
                className="group relative h-28 sm:h-36 md:h-44 rounded-xl overflow-hidden cursor-pointer border border-[#141C2E] bg-[#0B101D] hover:border-[#FFCC00]/60 transition-all duration-300 flex flex-col justify-end p-2.5 sm:p-3 shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.48] contrast-[1.1] transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-black/40 to-transparent" />
                </div>

                {/* Bottom Label: Title (White) + Arrow (Yellow) */}
                <div className="relative z-10 flex items-center justify-between gap-1">
                  <span className="font-display text-xs sm:text-sm md:text-base font-bold text-white uppercase tracking-tight truncate">
                    {cat.title}
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFCC00] stroke-[3] flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
