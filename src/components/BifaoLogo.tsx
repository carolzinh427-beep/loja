import React from 'react';

interface BifaoLogoProps {
  className?: string;
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-9 sm:h-11' }) => {
  return (
    <svg
      viewBox="0 0 240 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto object-contain transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Bifão Casa das Bicicletas"
    >
      {/* Brand Group */}
      <g transform="translate(6, 10)">
        {/* Letter 'B' */}
        <path
          d="M8 58L16 6h24c11 0 17.5 4 15.5 13.5-1.2 6-5.5 10.5-11 12 7.5 1.5 11 6.5 9 15-2 10.5-10.5 11.5-21.5 11.5H8zm16-29h11.5c5 0 8.5-1.8 9-5.5.8-4-2.2-5.5-7-5.5H20l-3.5 11zm-3.5 22.5h13.5c5.5 0 9.5-2.2 10-6.5.8-4.5-2.8-6.5-8.5-6.5H16.5l-3.5 13z"
          fill="#FFCC00"
        />

        {/* Cyclist Rider (Vector Silhouette Forming 'i') */}
        <g transform="translate(52, -6)">
          {/* Rider Head */}
          <ellipse cx="22" cy="11" rx="5" ry="5.5" fill="#FFFFFF" />
          
          {/* Rider Body & Arms */}
          <path
            d="M22 17l-8 15 13-2 10 11-4 4-10-10-10 1.5 5-10-5-4 5-7.5z"
            fill="#FFFFFF"
          />
          
          {/* Bike Rear Wheel */}
          <circle cx="11" cy="45" r="11" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          
          {/* Bike Front Wheel */}
          <circle cx="50" cy="45" r="11" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          
          {/* Bike Frame & Handlebars */}
          <path
            d="M11 45l14-13h12l13 13M25 32l-5.5 13M25 32l14 13"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Letters 'fão' */}
        <g transform="translate(110, -2)">
          {/* f */}
          <path
            d="M18 12V5c-9 0-14 4.5-15 13.5v7H-3l-.8 7.5h6.5l-3.5 30h11.5l3.8-30h9.5l.8-7.5h-9.5v-7c0-2.8 1.8-3.8 4.5-3.8h8.5z"
            fill="#FFCC00"
          />
          
          {/* ã */}
          <g transform="translate(25, 16)">
            {/* Tilde ~ */}
            <path
              d="M8 -7c3-3 6.5-3 9.5 0s6.5 3 9.5 0l1.2 3.5c-3.5 3-7 3-10 0s-6.5-3-9.5 0l-.7-3.5z"
              fill="#FFCC00"
            />
            {/* a */}
            <path
              d="M22 37h-10l.5-4.5c-2.8 3.5-7 5-12 5-8.5 0-13-4.5-11-12 2-8.5 8.5-11.5 20-12.5V13c.5-3-1-4.5-5-4.5-3.5 0-6 1.2-7 3.5l-8-3C-8 4 -2.5 0 6 0c11 0 15 4.5 13 12.5l-4 24.5zm-7-10.5c-6.5 1-10 2.5-10.5 6-.5 3 1.8 4.5 5 4.5 5 0 7.5-2.8 8.5-8l.2-2.5h-3.2z"
              fill="#FFCC00"
            />
          </g>
          
          {/* o */}
          <g transform="translate(68, 16)">
            <path
              d="M18 37.5C7 37.5-.5 29.5 1 18 2.5 7 12.5 0 24 0c11.5 0 19 8 17.5 19.5-1.5 11.5-12 18-23.5 18zm1-8c6 0 10-4.5 11-10 .8-5-1.8-9.5-7.8-9.5-6 0-10 4.5-11 10-.8 5 1.8 9.5 7.8 9.5z"
              fill="#FFCC00"
            />
          </g>

          {/* Registered Trademark ® */}
          <circle cx="94" cy="14" r="4.5" stroke="#FFCC00" strokeWidth="1.2" fill="none" />
          <text x="94" y="17" fontSize="6" fontWeight="900" fill="#FFCC00" textAnchor="middle" fontFamily="sans-serif">R</text>
        </g>
      </g>

      {/* Bottom Pill: "Casa das Bicicletas" */}
      <g transform="translate(14, 76)">
        <rect width="206" height="22" rx="11" fill="#0B3C95" stroke="#1D5FD3" strokeWidth="1" />
        <text
          x="100"
          y="15.5"
          fill="#FFFFFF"
          fontSize="12.5"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="0.08em"
          textAnchor="middle"
          fontFamily="'Barlow Condensed', sans-serif"
        >
          CASA DAS BICICLETAS
        </text>
        <rect x="190" y="4" width="7" height="14" rx="2" fill="#FFCC00" />
      </g>
    </svg>
  );
};
