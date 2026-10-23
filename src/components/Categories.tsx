import React from 'react';
import { CATEGORIES_DATA } from '../data/storeData';

interface CategoriesProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-2.5 sm:py-4 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Horizontal Row of 5 Cards matching mockup exactly */}
        <div className="overflow-x-auto scrollbar-none pb-1">
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3 min-w-[420px] sm:min-w-0">
            {CATEGORIES_DATA.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.filterKey)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-[#141C2E] bg-[#0A0F1D] hover:border-[#FFCC00] transition-all duration-200 shadow-md flex items-center justify-center"
              >
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
