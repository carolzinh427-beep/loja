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
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      {/* Floating Rounded Navbar Container */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070A0F]/95 backdrop-blur-xl border border-[#FFCC00]/30 shadow-2xl shadow-black/90 py-1.5 sm:py-2 px-3.5 sm:px-6'
            : 'bg-[#070A0F]/85 backdrop-blur-md border border-[#1B2436] shadow-xl shadow-black/60 py-2 sm:py-2.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Transparent Logo (Only Logo, No Text) */}
          <a
            href="#inicio"
            className="flex items-center py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00] rounded-full transition-transform hover:scale-105"
            aria-label="Bifão - Início"
          >
            <BifaoLogo className="h-8 sm:h-10 md:h-11 w-auto" />
          </a>

          {/* Central Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold tracking-wider transition-all duration-200 uppercase rounded-full ${
                  item.isSpecial
                    ? 'text-[#FFCC00] hover:text-black hover:bg-[#FFCC00] font-bold border border-[#FFCC00]/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Search + WhatsApp + Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2 sm:px-3 sm:py-1.5 text-slate-300 hover:text-[#FFCC00] hover:bg-slate-800/70 rounded-full border border-[#1B2436] transition-colors flex items-center gap-2 text-xs font-medium"
              title="Pesquisar catálogo"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-4 h-4 text-slate-300" />
              <span className="hidden xl:inline text-slate-400">Buscar...</span>
            </button>

            {/* WhatsApp Floating Pill CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Visitei o site da Bifão e gostaria de atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FFCC00] hover:bg-[#E5B800] text-black font-display font-black text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-md shadow-[#FFCC00]/20 tracking-wide uppercase hover-lift"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black flex-shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full border border-[#1B2436] transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Mobile Drawer (Rounded Floating Card) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl bg-[#0E1420]/95 backdrop-blur-xl border border-[#1B2436] p-4 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                  item.isSpecial
                    ? 'text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/30 font-bold'
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
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 border border-[#1B2436] rounded-xl text-xs text-slate-300 hover:text-white"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Buscar bicicletas, motos ou peças</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Visitei o site da Bifão e gostaria de atendimento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FFCC00] text-black font-display font-black text-xs uppercase rounded-xl tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
