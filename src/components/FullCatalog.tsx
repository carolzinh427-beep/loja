import React, { useState } from 'react';
import { Phone, Search, X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ALL_PRODUCTS, WHATSAPP_NUMBER } from '../data/storeData';
import type { Product } from '../data/storeData';

interface FullCatalogProps {
  initialCategory?: string;
  onBackToFeatured: () => void;
}

export const FullCatalog: React.FC<FullCatalogProps> = ({
  initialCategory = 'all',
  onBackToFeatured,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory === 'inicio' ? 'all' : initialCategory
  );
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'bicicletas', label: 'Bicicletas' },
    { id: 'motos', label: 'Motos' },
    { id: 'eletricas', label: 'Elétricas' },
    { id: 'capacetes', label: 'Capacetes' },
    { id: 'acessorios', label: 'Acessórios & Peças' },
  ];

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const getWhatsAppProductUrl = (product: Product) => {
    const message = `Olá! Vim pelo catálogo da Casa das Bicicletas Bifão e tenho interesse no produto: *${product.name}* (${product.priceDemonstrative}). Poderiam me passar mais informações e disponibilidade?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="catalogo-completo" className="py-6 sm:py-10 bg-[#070A12] border-t border-b border-[#141C2E]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#141C2E]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <button
                onClick={onBackToFeatured}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFCC00] hover:underline uppercase"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar aos Destaques</span>
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase leading-none">
              CATÁLOGO COMPLETO
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Exibindo {filteredProducts.length} itens disponíveis para consulta direta
            </p>
          </div>

          {/* Quick Search Inside Catalog */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrar por nome ou modelo..."
              className="w-full bg-[#0B101D] border border-[#141C2E] focus:border-[#FFCC00] rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-3 mb-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#FFCC00] text-black shadow-md shadow-[#FFCC00]/20'
                    : 'bg-[#0B101D] text-slate-300 hover:text-white border border-[#141C2E]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-slate-400">
            <p className="text-sm font-semibold">Nenhum produto encontrado para este filtro.</p>
            <p className="text-xs text-slate-500 mt-1">Tente selecionar outra categoria ou limpar a busca.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-[#141C2E] text-xs font-bold text-[#FFCC00]"
            >
              Ver todos os produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#0A0F1D] border border-[#141C2E] hover:border-[#FFCC00]/60 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between transition-all duration-200 shadow-md"
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full rounded-lg bg-[#070A12] overflow-hidden mb-2 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-106"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-[#0B3C95]/90 border border-[#1D5FD3] text-[#FFCC00] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between mb-2.5">
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-xs font-bold text-white line-clamp-2 leading-tight mt-0.5 group-hover:text-[#FFCC00] transition-colors">
                    {product.name}
                  </h3>

                  {/* Bullet Specs */}
                  {product.specs && (
                    <ul className="mt-2 space-y-0.5 hidden sm:block">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <li key={i} className="flex items-center gap-1 text-[10px] text-slate-400 truncate">
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#FFCC00] flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-2">
                    <span className="font-display text-sm sm:text-base font-black text-white tracking-tight block">
                      {product.priceDemonstrative}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={getWhatsAppProductUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-black rounded-lg py-1.5 px-2 flex items-center justify-center gap-1.5 text-[10px] font-bold transition-all duration-200 text-center leading-tight"
                >
                  <Phone className="w-3 h-3 fill-current flex-shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
