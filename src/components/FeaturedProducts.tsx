import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS, WHATSAPP_NUMBER } from '../data/storeData';
import type { Product } from '../data/storeData';

interface FeaturedProductsProps {
  selectedCategory?: string;
  onClearCategoryFilter?: () => void;
  onViewFullCatalog?: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onClearCategoryFilter: _onClearCategoryFilter,
  onViewFullCatalog,
}) => {
  const displayProducts = selectedCategory && selectedCategory !== 'inicio'
    ? FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory)
    : FEATURED_PRODUCTS;

  const productsToShow = displayProducts.length > 0 ? displayProducts : FEATURED_PRODUCTS;

  const getWhatsAppProductUrl = (product: Product) => {
    const message = `Olá! Vim pelo site da Casa das Bicicletas Bifão e tenho interesse no produto: *${product.name}* (${product.priceDemonstrative}). Poderiam me passar mais informações e disponibilidade?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="destaques" className="py-10 sm:py-16 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Spacing */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase leading-none">
              DESTAQUES DA LOJA
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#FFCC00] mt-1.5 rounded-full" />
          </div>

          <button
            onClick={onViewFullCatalog}
            className="text-xs sm:text-sm font-bold text-[#FFCC00] hover:text-[#E5B800] flex items-center gap-1.5 transition-colors tracking-wide cursor-pointer uppercase hover-lift"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* 5 Product Cards Horizontal Row with HD Studio Photography */}
        <div className="overflow-x-auto scrollbar-none pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="grid grid-cols-5 gap-3 sm:gap-4 min-w-[560px] sm:min-w-0">
            {productsToShow.map((product) => (
              <div
                key={product.id}
                className="group bg-[#0A0F1D] border border-[#141C2E] hover:border-[#FFCC00] rounded-xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                {/* High-Resolution HD Product Photography */}
                <div className="relative aspect-square w-full rounded-lg bg-[#050810] overflow-hidden mb-3 flex items-center justify-center p-1">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center rounded-md filter brightness-[0.95] contrast-[1.05] transition-transform duration-300 group-hover:scale-106"
                    loading="lazy"
                  />
                </div>

                {/* Vector Name & Price */}
                <div className="flex-1 flex flex-col justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-[#FFCC00] transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    <span className="font-display text-sm sm:text-base md:text-lg font-black text-white tracking-tight block">
                      {product.priceDemonstrative}
                    </span>
                  </div>
                </div>

                {/* Yellow Outline WhatsApp Button */}
                <a
                  href={getWhatsAppProductUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black rounded-lg py-2 px-2 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold transition-all duration-200 text-center leading-none"
                >
                  <Phone className="w-3 h-3 fill-current flex-shrink-0" />
                  <div className="flex flex-col text-[9px] sm:text-[10px] leading-tight">
                    <span>Falar no</span>
                    <span>WhatsApp</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
