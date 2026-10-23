import React, { useState, useEffect } from 'react';
import { BifaoLogo } from './BifaoLogo';
import { Search, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

interface HeaderProps {
  onSearchClick: () => void;
  selectedCategory?: string;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  selectedCategory = 'inicio',
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(selectedCategory || 'inicio');

  useEffect(() => {
    setActiveTab(selectedCategory || 'inicio');
  }, [selectedCategory]);

  const navTabs = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'bicicletas', label: 'Bicicletas', href: '#categorias' },
    { id: 'motos', label: 'Motos', href: '#categorias' },
    { id: 'eletricas', label: 'Elétricas', href: '#categorias' },
    { id: 'acessorios', label: 'Acessórios', href: '#categorias' },
    { id: 'ofertas', label: 'Ofertas', href: '#destaques' },
  ];

  const handleTabClick = (tabId: string, href: string) => {
    setActiveTab(tabId);
    onSelectCategory(tabId);
    if (tabId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A12]/95 backdrop-blur-md border-b border-[#141C2E] shadow-xl">
      {/* Top Bar: Hamburger | Logo | Search + WhatsApp */}
      <div className="max-w-xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        
        {/* Left: Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-1 text-white hover:text-[#FFCC00] transition-colors focus:outline-none"
          aria-label="Abrir menu lateral"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </button>

        {/* Center: Bifão Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick('inicio', '#inicio');
          }}
          className="flex items-center justify-center focus:outline-none"
          aria-label="Bifão Casa das Bicicletas - Início"
        >
          <BifaoLogo className="h-7 sm:h-9" />
        </a>

        {/* Right: Search + WhatsApp Green Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Icon */}
          <button
            onClick={onSearchClick}
            className="p-1 text-white hover:text-[#FFCC00] transition-colors focus:outline-none"
            aria-label="Pesquisar catálogo"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </button>

          {/* WhatsApp Icon (Green Circle with White Phone as in Mockup) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Casa das Bicicletas Bifão e gostaria de atendimento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-all flex items-center justify-center shadow-md shadow-[#25D366]/25 hover:scale-105"
            aria-label="Falar conosco no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-white fill-white stroke-[0]" />
          </a>
        </div>
      </div>

      {/* Row 2: Sub-navigation Category Tabs Bar */}
      <div className="border-t border-[#141C2E] bg-[#05080E]/90 overflow-x-auto scrollbar-none">
        <div className="max-w-xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-3 sm:gap-6 whitespace-nowrap min-w-max">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.href)}
                className={`relative py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all uppercase ${
                  isActive
                    ? 'text-[#FFCC00] font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFCC00] rounded-t-full shadow-sm shadow-[#FFCC00]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer / Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="relative w-72 sm:w-80 max-w-[85vw] bg-[#0A0F1D] border-r border-[#1B2436] h-full shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-left duration-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1B2436]">
                <BifaoLogo className="h-7" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-[#1B2436]"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      handleTabClick(tab.id, tab.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-left transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#FFCC00] text-black shadow-md shadow-[#FFCC00]/20'
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-[#1B2436] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSearchClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 border border-[#1B2436] rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
              >
                <Search className="w-4 h-4" />
                <span>Buscar no catálogo</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Casa das Bicicletas Bifão.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display font-black text-sm uppercase rounded-xl shadow-lg shadow-[#25D366]/20 tracking-wider"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
