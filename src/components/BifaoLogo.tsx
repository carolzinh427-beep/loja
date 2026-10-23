import React from 'react';

interface BifaoLogoProps {
  className?: string;
  variant?: 'emblem' | 'full';
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-10 sm:h-11 md:h-12' }) => {
  return (
    <img
      src="/logo-transparent.png"
      alt="Bifão"
      className={`object-contain transition-transform duration-200 hover:opacity-95 ${className}`}
    />
  );
};
