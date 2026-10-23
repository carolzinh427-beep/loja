import React from 'react';
import { Star, Bike, User, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/storeData';

export const TrustBadges: React.FC = () => {
  const items = [
    {
      icon: Star,
      title: 'Tradição e experiência',
    },
    {
      icon: Bike,
      title: 'Variedade de produtos',
    },
    {
      icon: User,
      title: 'Atendimento especializado',
    },
    {
      icon: MessageCircle,
      title: 'Fale com nossa equipe',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Casa das Bicicletas Bifão.')}`,
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#050810] border-t border-b border-[#141C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-center justify-center p-2 group cursor-pointer">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFCC00] stroke-[1.8] mb-2 transition-transform group-hover:scale-110" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight">
                  {item.title}
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
