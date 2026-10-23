import React from 'react';

interface BifaoLogoProps {
  className?: string;
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-9 sm:h-11' }) => {
  return (
    <img
      src="/logo-transparent.png"
      alt="Bifão Casa das Bicicletas"
      className={`object-contain transition-transform duration-200 hover:scale-105 ${className}`}
    />
  );
};
