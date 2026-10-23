import React from 'react';

interface BifaoLogoProps {
  className?: string;
  variant?: 'emblem' | 'full' | 'compact';
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-11', variant = 'full' }) => {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Outer Circular Badge */}
        <circle cx="100" cy="100" r="96" fill="#0B3C95" stroke="#1D5FD3" strokeWidth="3" />
        
        {/* Subtle inner ring */}
        <circle cx="100" cy="100" r="91" fill="none" stroke="#FFCC00" strokeWidth="1" strokeOpacity="0.4" />

        {/* Brand Name "Bifão" & Rider */}
        <g transform="translate(26, 62)">
          {/* Letter B */}
          <path
            d="M5 40V4h18c7.5 0 13 3 13 9.5 0 4.5-2.8 7.5-6.5 8.5 5 1.2 8.5 4.8 8.5 10 0 7.5-6 12-14.5 12H5zm8-22h8.5c3.5 0 6-1.5 6-4.5s-2.5-4.5-6-4.5H13v9zm0 15h9.5c4 0 7-1.8 7-5s-3-5-7-5H13v10z"
            fill="#FFCC00"
          />

          {/* Cyclist Rider (replacing 'i') */}
          <g transform="translate(38, -12)">
            {/* Rider Head */}
            <circle cx="19" cy="8" r="4.5" fill="#FFFFFF" />
            {/* Rider Body & Arms */}
            <path
              d="M19 14l-6 13 11-2 7 9-3 3-8-8-8 1.5 4-8-4-3 4-6.5z"
              fill="#FFFFFF"
            />
            {/* Bike Rear Wheel */}
            <circle cx="10" cy="38" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            {/* Bike Front Wheel */}
            <circle cx="44" cy="38" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            {/* Bike Frame */}
            <path
              d="M10 38l12-11 11 0 11 11M22 27l-5 11M22 27l12 11"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* Letters "fão" */}
          <g transform="translate(85, 0)">
            {/* f */}
            <path
              d="M12 4V0c-7 0-11 4-11 11v5H-3v6h4v18h8V22h7v-6h-7v-5c0-2.5 1.5-4 4-4h7z"
              fill="#FFCC00"
            />
            {/* ã */}
            <g transform="translate(18, 12)">
              {/* Tilde */}
              <path
                d="M5 -4c2-2 4-2 6 0s4 2 6 0v2c-2 2-4 2-6 0s-4-2-6 0v-2z"
                fill="#FFCC00"
              />
              <path
                d="M16 28h-6v-3.5c-2 2.5-5 4-9 4-6 0-9.5-3.5-9.5-8.5 0-6 4.5-8.5 13-9.5V10c0-2-1.5-3.2-4.5-3.2-2.5 0-4.5 1-5 2.5l-5.5-2C1 4.5 5 1.5 11.5 1.5c7.5 0 10.5 3.5 10.5 9v17.5zm-5.5-7.5c-4.5.6-7 1.8-7 4.5 0 2 1.5 3 4 3 3.5 0 5-2 5-5.5v-2z"
                fill="#FFCC00"
              />
            </g>
            {/* o */}
            <path
              d="M51 26c-7.5 0-13-5.5-13-13.5S43.5-1 51-1s13 5.5 13 13.5S58.5 26 51 26zm0-6.5c4 0 6.5-3.2 6.5-7s-2.5-7-6.5-7-6.5 3.2-6.5 7 2.5 7 6.5 7z"
              fill="#FFCC00"
            />
            {/* Registered Trademark */}
            <circle cx="68" cy="1" r="4" stroke="#FFCC00" strokeWidth="0.8" fill="none" />
            <text x="68" y="3.5" fontSize="5" fontWeight="bold" fill="#FFCC00" textAnchor="middle">R</text>
          </g>
        </g>

        {/* Slogan */}
        <text
          x="100"
          y="136"
          fill="#FFFFFF"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="0.04em"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Sua solução em <tspan fill="#38BDF8">Duas Rodas</tspan>
        </text>

        {/* Bottom Pill Badge: "Casas das Bicicletas" */}
        <g transform="translate(24, 150)">
          <rect width="152" height="22" rx="11" fill="#FFFFFF" stroke="#0B3C95" strokeWidth="1" />
          <text
            x="70"
            y="15"
            fill="#0B3C95"
            fontSize="10"
            fontWeight="900"
            letterSpacing="0.05em"
            textAnchor="middle"
            fontFamily="'Barlow Condensed', sans-serif"
            fontStyle="italic"
          >
            CASAS DAS BICICLETAS
          </text>
          {/* Yellow pill tag accent on right */}
          <rect x="136" y="4" width="7" height="14" rx="2" fill="#FFCC00" />
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Visual Emblem */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg shadow-black/60 border border-[#1D5FD3] overflow-hidden bg-[#0B3C95]">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="96" fill="#0B3C95" />
          <circle cx="100" cy="100" r="91" fill="none" stroke="#FFCC00" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Letter B */}
          <path d="M31 102V66h18c7.5 0 13 3 13 9.5 0 4.5-2.8 7.5-6.5 8.5 5 1.2 8.5 4.8 8.5 10 0 7.5-6 12-14.5 12H31zm8-22h8.5c3.5 0 6-1.5 6-4.5s-2.5-4.5-6-4.5H39v9zm0 15h9.5c4 0 7-1.8 7-5s-3-5-7-5H39v10z" fill="#FFCC00" />

          {/* Rider */}
          <g transform="translate(64, 50)">
            <circle cx="19" cy="8" r="4.5" fill="#FFFFFF" />
            <path d="M19 14l-6 13 11-2 7 9-3 3-8-8-8 1.5 4-8-4-3 4-6.5z" fill="#FFFFFF" />
            <circle cx="10" cy="38" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            <circle cx="44" cy="38" r="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            <path d="M10 38l12-11 11 0 11 11M22 27l-5 11M22 27l12 11" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Letters fão */}
          <g transform="translate(111, 62)">
            <path d="M12 4V0c-7 0-11 4-11 11v5H-3v6h4v18h8V22h7v-6h-7v-5c0-2.5 1.5-4 4-4h7z" fill="#FFCC00" />
            <g transform="translate(18, 12)">
              <path d="M5 -4c2-2 4-2 6 0s4 2 6 0v2c-2 2-4 2-6 0s-4-2-6 0v-2z" fill="#FFCC00" />
              <path d="M16 28h-6v-3.5c-2 2.5-5 4-9 4-6 0-9.5-3.5-9.5-8.5 0-6 4.5-8.5 13-9.5V10c0-2-1.5-3.2-4.5-3.2-2.5 0-4.5 1-5 2.5l-5.5-2C1 4.5 5 1.5 11.5 1.5c7.5 0 10.5 3.5 10.5 9v17.5zm-5.5-7.5c-4.5.6-7 1.8-7 4.5 0 2 1.5 3 4 3 3.5 0 5-2 5-5.5v-2z" fill="#FFCC00" />
            </g>
            <path d="M51 26c-7.5 0-13-5.5-13-13.5S43.5-1 51-1s13 5.5 13 13.5S58.5 26 51 26zm0-6.5c4 0 6.5-3.2 6.5-7s-2.5-7-6.5-7-6.5 3.2-6.5 7 2.5 7 6.5 7z" fill="#FFCC00" />
          </g>

          {/* Bottom badge */}
          <rect x="25" y="152" width="150" height="24" rx="12" fill="#FFFFFF" />
          <text x="96" y="168" fill="#0B3C95" fontSize="10.5" fontWeight="900" fontStyle="italic" letterSpacing="0.05em" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif">CASAS DAS BICICLETAS</text>
          <rect x="156" y="156" width="6" height="16" rx="2" fill="#FFCC00" />
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-2xl sm:text-3xl font-black italic tracking-wide text-white leading-none">
            BIFÃO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFCC00] bg-[#FFCC00]/10 px-1.5 py-0.5 rounded border border-[#FFCC00]/30">
            Duas Rodas
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-slate-400 mt-0.5">
          Casas das Bicicletas & Motos
        </span>
      </div>
    </div>
  );
};
