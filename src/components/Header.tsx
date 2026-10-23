import React, { useState, useEffect } from 'react';
import { BifaoLogo } from './BifaoLogo';
import { Search, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

interface HeaderProps {
  onSearchClick: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Bicicletas', href: '#categorias' },
    { label: 'Motos', href: '#categorias' },
    { label: 'Elétricas', href: '#categorias' },
    { label: 'Acessórios', href: '#categorias' },
    { label: 'Ofertas', href: '#destaques', isSpecial: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A0F]/95 backdrop-blur-md border-b border-[#1B2436] py-2.5 shadow-2xl shadow-black/80'
          : 'bg-[#070A0F]/80 backdrop-blur-sm border-b border-[#1B2436]/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00] rounded-lg transition-transform hover:opacity-95"
            aria-label="Casa das Bicicletas Bifão - Início"
          >
            <BifaoLogo variant="full" />
          </a>

          {/* Central Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 uppercase rounded-md ${
                  item.isSpecial
                    ? 'text-[#FFCC00] hover:text-black hover:bg-[#FFCC00] font-bold border border-[#FFCC00]/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Search + WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2 sm:px-3 sm:py-2 text-slate-300 hover:text-[#FFCC00] hover:bg-slate-800/60 rounded-lg border border-[#1B2436] transition-colors flex items-center gap-2 text-xs font-medium"
              title="Pesquisar catálogo"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-4 h-4 text-slate-300" />
              <span className="hidden md:inline text-slate-400">Buscar produtos...</span>
            </button>

            {/* WhatsApp Direct CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Visitei o site da Bifão e gostaria de atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFCC00] hover:bg-[#E5B800] text-black font-display font-extrabold text-sm sm:text-base px-3.5 sm:px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-[#FFCC00]/10 tracking-wide uppercase"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg border border-[#1B2436]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A0F] border-b border-[#1B2436] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider ${
                  item.isSpecial
                    ? 'text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/30'
                    : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1B2436] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSearchClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 border border-[#1B2436] rounded-lg text-sm text-slate-300 hover:text-white"
            >
              <Search className="w-4 h-4" />
              <span>Buscar bicicletas, motos ou peças</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Visitei o site da Bifão e gostaria de atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FFCC00] text-black font-display font-extrabold text-sm uppercase rounded-lg"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
