import React, { useState } from 'react';
import { Phone, CheckCircle2, Info } from 'lucide-react';
import { FEATURED_PRODUCTS, WHATSAPP_NUMBER } from '../data/storeData';
import type { Product } from '../data/storeData';

interface FeaturedProductsProps {
  selectedCategory?: string;
  onClearCategoryFilter?: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onClearCategoryFilter,
}) => {
  const [filter, setFilter] = useState<string>(selectedCategory || 'all');

  const filteredProducts = filter === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.category === filter);

  const getWhatsAppProductUrl = (product: Product) => {
    const message = `Olá! Vim pelo site da Casa das Bicicletas Bifão e tenho interesse no produto: *${product.name}* (Ref: ${product.id}). Poderiam me passar mais informações e disponibilidade?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="destaques" className="py-16 sm:py-24 bg-[#070A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFCC00] uppercase mb-1.5">
              <span className="w-6 h-[2px] bg-[#FFCC00]"></span>
              <span>Seleção Especial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight text-white uppercase leading-none">
              DESTAQUES DA LOJA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Confira os modelos e equipamentos em evidência na Bifão. Atendimento direto e consultoria técnica pelo WhatsApp.
            </p>
          </div>

          {/* Quick Category Tabs Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setFilter('all');
                onClearCategoryFilter?.();
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#FFCC00] text-black shadow-md shadow-[#FFCC00]/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Todos (5)
            </button>
            <button
              onClick={() => setFilter('bicicletas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'bicicletas'
                  ? 'bg-[#FFCC00] text-black shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Bicicletas
            </button>
            <button
              onClick={() => setFilter('motos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'motos'
                  ? 'bg-[#FFCC00] text-black shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Motos
            </button>
            <button
              onClick={() => setFilter('eletricas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'eletricas'
                  ? 'bg-[#FFCC00] text-black shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Elétricas
            </button>
            <button
              onClick={() => setFilter('capacetes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'capacetes'
                  ? 'bg-[#FFCC00] text-black shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Capacetes
            </button>
            <button
              onClick={() => setFilter('acessorios')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'acessorios'
                  ? 'bg-[#FFCC00] text-black shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-[#1B2436]'
              }`}
            >
              Peças
            </button>
          </div>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#0E1420] border border-[#1B2436] rounded-xl overflow-hidden hover:border-[#FFCC00]/50 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image & Badges */}
              <div className="relative aspect-[4/3] w-full bg-[#070A0F] overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-500 group-hover:scale-106"
                />
                
                {/* Badge Tag */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#0B1B3D]/90 backdrop-blur-md border border-[#1D5FD3]/50 px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase text-[#FFCC00]">
                    {product.badge}
                  </div>
                )}

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-black/20" />
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mt-1 leading-snug group-hover:text-[#FFCC00] transition-colors">
                    {product.name}
                  </h3>

                  {/* Bullet Specs */}
                  <ul className="mt-3 space-y-1.5 border-t border-[#1B2436] pt-3">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & WhatsApp CTA */}
                <div className="mt-5 pt-4 border-t border-[#1B2436]">
                  <div className="mb-3">
                    <span className="text-[10px] font-medium tracking-wide uppercase text-slate-400 block">
                      Preço Referencial
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-black text-white tracking-tight">
                        {product.priceDemonstrative}
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block mt-0.5">
                      *Valor demonstrativo para consulta
                    </span>
                  </div>

                  {/* WhatsApp Action Button with Yellow Outline */}
                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black font-display font-extrabold text-sm uppercase tracking-wide transition-all duration-200 group/btn"
                  >
                    <Phone className="w-4 h-4 fill-current transition-colors" />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Disclaimer Note */}
        <div className="mt-8 p-3.5 rounded-lg bg-slate-900/60 border border-[#1B2436] flex items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-[#FFCC00] flex-shrink-0" />
          <span>
            <strong>Informação importante:</strong> Os preços e itens apresentados nesta demonstração visual de layout são demonstrativos e servem para apresentação da interface. Consulte condições comerciais e estoque diretamente com nossos consultores.
          </span>
        </div>

      </div>
    </section>
  );
};
