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
    <section className="py-8 sm:py-12 bg-[#050810] border-t border-b border-[#141C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-center justify-center p-2 group cursor-pointer">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFCC00] stroke-[1.8] mb-2 transition-transform duration-200 group-hover:scale-115" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight block">
                  {item.line1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight block">
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
