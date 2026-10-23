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
    <section id="destaques" className="py-4 sm:py-6 bg-[#070A12]">
      <div className="max-w-xl mx-auto px-3 sm:px-4">
        
        {/* Section Header matching mockup exactly */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <h2 className="text-base sm:text-xl md:text-2xl font-black italic tracking-tight text-white uppercase leading-none">
              DESTAQUES DA LOJA
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[#FFCC00] mt-1 rounded-full" />
          </div>

          <button
            onClick={onViewFullCatalog}
            className="text-[11px] sm:text-xs font-bold text-[#FFCC00] hover:text-[#E5B800] flex items-center gap-1 transition-colors tracking-wide cursor-pointer uppercase"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
          </button>
        </div>

        {/* 5 Product Cards Horizontal Row matching mockup */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
          {productsToShow.map((product) => (
            <div
              key={product.id}
              className="group bg-[#0A0F1D] border border-[#141C2E] hover:border-[#FFCC00] rounded-xl p-1.5 sm:p-2.5 flex flex-col justify-between transition-all duration-200 shadow-md hover-lift"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full rounded-lg bg-[#070A12] overflow-hidden mb-1.5 flex items-center justify-center p-0.5">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-106 select-none"
                  loading="lazy"
                />
              </div>

              {/* Name & Price */}
              <div className="flex-1 flex flex-col justify-between mb-2">
                <h3 className="text-[10px] sm:text-xs font-bold text-white line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="mt-1">
                  <span className="font-display text-xs sm:text-sm font-black text-white tracking-tight block">
                    {product.priceDemonstrative}
                  </span>
                </div>
              </div>

              {/* Yellow Outline WhatsApp Button matching mockup */}
              <a
                href={getWhatsAppProductUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black rounded-lg py-1 px-1 flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-bold transition-all duration-200 text-center leading-none"
                title={`Pedir ${product.name} no WhatsApp`}
              >
                <Phone className="w-2.5 h-2.5 fill-current flex-shrink-0" />
                <div className="flex flex-col text-[8px] sm:text-[9px] leading-tight">
                  <span>Falar no</span>
                  <span>WhatsApp</span>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

