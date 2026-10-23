import React, { useState } from 'react';
import { Search, X, ArrowRight, Phone } from 'lucide-react';
import { ALL_PRODUCTS, WHATSAPP_NUMBER } from '../data/storeData';
import type { Product } from '../data/storeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results: Product[] = query.trim() === ''
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0E1420] border border-[#1B2436] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#1B2436] bg-[#070A0F]">
          <Search className="w-5 h-5 text-[#FFCC00] mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite para buscar bike, moto, capacete, aro 29, pneu..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-1">
            <span>{query ? `Resultados para "${query}" (${results.length})` : 'Sugestões em Destaque'}</span>
            <span className="text-[10px] text-slate-500 uppercase">Demonstração Visual</span>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">Nenhum produto encontrado com esse termo.</p>
              <p className="text-xs text-slate-500 mt-1">Tente pesquisar por "bike", "moto", "aro 29", "elétrica" ou "capacete".</p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#070A0F] border border-[#1B2436] hover:border-[#FFCC00]/50 transition-all group"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-slate-800 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#FFCC00] tracking-wider block">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate group-hover:text-[#FFCC00] transition-colors">
                    {product.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {product.priceDemonstrative}
                  </span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de consultar informações sobre: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="p-2.5 rounded-lg bg-[#FFCC00] text-black hover:bg-[#E5B800] transition-colors flex-shrink-0"
                  title="Consultar no WhatsApp"
                >
                  <Phone className="w-4 h-4 fill-black" />
                </a>
              </div>
            ))
          )}
        </div>

        {/* Footer info in modal */}
        <div className="px-4 py-3 bg-[#070A0F] border-t border-[#1B2436] flex items-center justify-between text-[11px] text-slate-400">
          <span>Pressione ESC ou clique fora para fechar</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFCC00] hover:underline flex items-center gap-1 font-bold"
          >
            <span>Falar com especialista</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
