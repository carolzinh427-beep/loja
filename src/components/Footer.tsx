import React from 'react';
import { BifaoLogo } from './BifaoLogo';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/storeData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04060A] border-t border-[#1B2436] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1B2436]">
          
          {/* Brand Presentation Column */}
          <div className="lg:col-span-5 space-y-4">
            <BifaoLogo variant="full" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-3">
              Casa das Bicicletas Bifão — Sua solução em Duas Rodas. Tradição, qualidade e variedade em bicicletas, motocicletas, e-bikes, peças originais e acessórios esportivos de alta proteção.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-900 px-3 py-1.5 rounded border border-[#1B2436]">
                Atendimento Especializado em Duas Rodas
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFCC00]" />
                  <span>Início</span>
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFCC00]" />
                  <span>Categorias Visuais</span>
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFCC00]" />
                  <span>Destaques da Loja</span>
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-[#FFCC00] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFCC00]" />
                  <span>Ofertas & Novidades</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors">Bicicletas Aro 29 & Speed</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors">Motocicletas</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors">Bicicletas Elétricas</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors">Capacetes de Segurança</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#FFCC00] transition-colors">Peças & Componentes</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-white text-base font-bold tracking-wider uppercase">
              Contato & Atendimento
            </h4>
            
            <div className="space-y-3 pt-1">
              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da Bifão.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0E1420] border border-[#1B2436] hover:border-[#FFCC00] transition-all group"
              >
                <div className="w-9 h-9 rounded-md bg-[#FFCC00] flex items-center justify-center text-black flex-shrink-0">
                  <Phone className="w-4 h-4 fill-black" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wide">
                    WhatsApp Direto
                  </span>
                  <span className="text-white font-mono font-bold text-sm group-hover:text-[#FFCC00] transition-colors">
                    {WHATSAPP_DISPLAY}
                  </span>
                </div>
              </a>

              {/* Location indication */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <span>Loja Física e Atendimento Regional especializado para você e sua máquina.</span>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#FFCC00] flex-shrink-0 mt-0.5" />
                <span>Segunda a Sexta: Horário Comercial | Sábado: Manhã</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Casa das Bicicletas Bifão. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Frontend Visual Demonstrativo de Alto Padrão
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
