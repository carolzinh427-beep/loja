import React from 'react';
import { BifaoLogo } from './BifaoLogo';
import { Phone, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] pt-8 sm:pt-10 pb-8 text-slate-400 text-[10px] sm:text-xs border-t border-[#141C2E]">
      <div className="max-w-xl mx-auto px-3 sm:px-4">
        
        {/* 4 Columns matching mockup exactly */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 pb-6 border-b border-[#141C2E]">
          
          {/* Col 1: Vector Brand & Slogan */}
          <div className="space-y-2">
            <BifaoLogo className="h-6 sm:h-8" />
            <p className="text-slate-400 text-[9px] sm:text-[10px] leading-tight mt-1">
              Qualidade, variedade e atendimento especializado em um só lugar.
            </p>
          </div>

          {/* Col 2: Navegação */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1 text-[9px] sm:text-[10px] text-slate-400">
              <li><a href="#inicio" className="hover:text-[#FFCC00] transition-colors block">Início</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Bicicletas</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Motos</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Elétricas</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Acessórios</a></li>
              <li><a href="#destaques" className="hover:text-[#FFCC00] transition-colors block">Ofertas</a></li>
            </ul>
          </div>

          {/* Col 3: Categorias */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-1 text-[9px] sm:text-[10px] text-slate-400">
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Bicicletas</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Motos</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Elétricas</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Capacetes</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Peças</a></li>
              <li><a href="#categorias" className="hover:text-[#FFCC00] transition-colors block">Acessórios</a></li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider">
              Contato
            </h4>
            
            <div className="space-y-1.5 text-[9px] sm:text-[10px]">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Bifão e gostaria de atendimento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1 text-slate-300 hover:text-[#FFCC00] transition-colors group"
                title="Fale conosco no WhatsApp"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-2 h-2 text-white fill-white" />
                </div>
                <div className="leading-tight">
                  <span className="block font-semibold text-white group-hover:text-[#FFCC00]">Fale conosco</span>
                  <span className="text-[8px] text-slate-400 font-mono">(xx) xxxxx-xxxx</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <span className="block font-semibold text-white">Mantena - MG</span>
                  <span className="text-[8px] text-slate-400">(endereço em breve)</span>
                </div>
              </div>

              {/* Vector Social Media Icons */}
              <div className="flex items-center gap-1.5 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-slate-900 border border-[#141C2E] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FFCC00] transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-slate-900 border border-[#141C2E] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FFCC00] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-slate-900 border border-[#141C2E] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#FFCC00] transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] sm:text-[10px] text-slate-500">
          <div>
            © 2025 Casa das Bicicletas Bifão. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <a href="#inicio" className="hover:underline">Política de Privacidade</a>
            <span>|</span>
            <a href="#inicio" className="hover:underline">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
