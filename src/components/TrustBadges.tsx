import React from 'react';
import { Award, Layers, Wrench, MessageSquare, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const TrustBadges: React.FC = () => {
  const items = [
    {
      icon: Award,
      title: 'Tradição e experiência',
      description: 'Anos de história e compromisso com ciclistas e motociclistas de toda a região.',
    },
    {
      icon: Layers,
      title: 'Variedade de produtos',
      description: 'Bicicletas convencionais e elétricas, motos, peças originais e linha de proteção.',
    },
    {
      icon: Wrench,
      title: 'Atendimento especializado',
      description: 'Consultores com experiência técnica para orientar a melhor escolha para o seu perfil.',
    },
    {
      icon: MessageSquare,
      title: 'Fale com nossa equipe',
      description: 'Canal ágil no WhatsApp para tirar dúvidas, cotações e verificar disponibilidade.',
      isAction: true,
    },
  ];

  return (
    <section className="py-12 bg-[#05070B] border-t border-b border-[#1B2436]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#0E1420]/60 border border-[#1B2436] hover:border-[#FFCC00]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B1B3D] border border-[#1D5FD3]/40 flex items-center justify-center text-[#FFCC00] mb-4">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.isAction && (
                  <div className="mt-4 pt-3 border-t border-[#1B2436]">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Bifão.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFCC00] hover:text-[#E5B800] uppercase tracking-wider"
                    >
                      <span>Iniciar conversa</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
