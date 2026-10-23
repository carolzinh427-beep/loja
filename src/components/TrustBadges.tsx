import React from 'react';
import { Star, Bike, User, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const TrustBadges: React.FC = () => {
  const items = [
    {
      icon: Star,
      line1: 'Tradição e',
      line2: 'experiência',
    },
    {
      icon: Bike,
      line1: 'Variedade de',
      line2: 'produtos',
    },
    {
      icon: User,
      line1: 'Atendimento',
      line2: 'especializado',
    },
    {
      icon: MessageCircle,
      line1: 'Fale com nossa',
      line2: 'equipe',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Casa das Bicicletas Bifão.')}`,
    },
  ];

  return (
    <section className="py-4 sm:py-6 bg-[#050810] border-t border-b border-[#141C2E]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-1 sm:gap-4 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-center justify-center p-1 group cursor-pointer">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFCC00] stroke-[1.8] mb-1.5 transition-transform group-hover:scale-110" />
                <span className="text-[10px] sm:text-xs font-semibold text-white tracking-tight leading-tight block">
                  {item.line1}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-white tracking-tight leading-tight block">
                  {item.line2}
                </span>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};
