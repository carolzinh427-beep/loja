import React from 'react';
import { CATEGORIES_DATA } from '../data/storeData';

interface CategoriesProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-3 sm:py-5 bg-[#070A12]">
      <div className="max-w-xl mx-auto px-3 sm:px-4">
        
        {/* Horizontal Row of 5 Cards matching mockup exactly */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat.filterKey)}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-[#141C2E] bg-[#0A0F1D] hover:border-[#FFCC00] transition-all duration-200 shadow-md flex items-center justify-center hover-lift"
              title={`Ver ${cat.title}`}
            >
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

