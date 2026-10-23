import React from 'react';

interface BifaoLogoProps {
  className?: string;
  variant?: 'emblem' | 'full';
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-11', variant = 'full' }) => {
  if (variant === 'emblem') {
    return (
      <img
        src="/logo-bifao.png"
        alt="Casa das Bicicletas Bifão"
        className={`object-contain rounded-full shadow-lg shadow-black/50 ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Circular Logo */}
      <img
        src="/logo-bifao.png"
        alt="Casa das Bicicletas Bifão"
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-full shadow-lg shadow-black/50 flex-shrink-0"
      />

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="font-display text-2xl sm:text-3xl font-black italic tracking-wide text-white leading-none">
          BIFÃO
        </span>
        <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-slate-400 mt-0.5">
          Casas das Bicicletas & Motos
        </span>
      </div>
    </div>
  );
};
