import React from 'react';

interface BifaoLogoProps {
  className?: string;
}

export const BifaoLogo: React.FC<BifaoLogoProps> = ({ className = 'h-9 sm:h-11' }) => {
  return (
    <svg
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto object-contain transition-transform duration-200 hover:scale-105 ${className}`}
    >
      {/* Brand Name "Bifão" with Integrated Cyclist Rider */}
      <g transform="translate(6, 12)">
        {/* Letter 'B' (Bold Italic Athletic Yellow) */}
        <path
          d="M6 56L14 8h24c10 0 16 3.5 14.5 12-1 5.5-5 9.5-10 11 6.5 1.5 9.5 6 8 13.5-1.8 9.5-9.5 11.5-19.5 11.5H6zm14.5-27h10.5c4.5 0 7.5-1.5 8-5 .7-3.5-2-5-6.5-5H18l-2.5 10zm-3 20.5h12c5 0 8.5-2 9-6 .7-4-2.5-6-7.5-6H15l-2.5 12z"
          fill="#FFCC00"
        />

        {/* Cyclist Rider (Replacing/Forming the 'i') */}
        <g transform="translate(48, -4)">
          {/* Rider Head (White) */}
          <ellipse cx="20" cy="10" rx="4.5" ry="5" fill="#FFFFFF" />
          
          {/* Rider Torso & Arms (White) */}
          <path
            d="M20 16l-7 14 12-2 9 10-3.5 3.5-9-9-9 1.5 4.5-9-4.5-3.5 4.5-7z"
            fill="#FFFFFF"
          />
          
          {/* Bike Rear Wheel (White outline) */}
          <circle cx="10" cy="42" r="10.5" stroke="#FFFFFF" strokeWidth="2.8" fill="none" />
          
          {/* Bike Front Wheel (White outline) */}
          <circle cx="46" cy="42" r="10.5" stroke="#FFFFFF" strokeWidth="2.8" fill="none" />
          
          {/* Bike Frame & Fork (White) */}
          <path
            d="M10 42l13-12h11l12 12M23 30l-5 12M23 30l13 12"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Letters 'fão' (Yellow) */}
        <g transform="translate(102, 0)">
          {/* f */}
          <path
            d="M17 10V4c-8 0-12.5 4-13.5 12v6H-2l-.8 7h6L-.5 56h10.5l3.5-27h8.5l.8-7h-8.5v-6c0-2.5 1.5-3.5 4-3.5h7z"
            fill="#FFCC00"
          />
          
          {/* ã */}
          <g transform="translate(23, 14)">
            {/* Tilde ~ */}
            <path
              d="M7 -6c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0l1 3c-3 2.5-6 2.5-8.5 0s-5.5-2.5-8 0l-.5-3z"
              fill="#FFCC00"
            />
            {/* a */}
            <path
              d="M20 34h-9l.5-4c-2.5 3-6 4.5-10.5 4.5-7.5 0-11.5-4-10-10.5 1.8-7.5 7.5-10 17.5-11V12c.5-2.5-1-4-4.5-4-3 0-5.5 1-6.5 3l-7-2.5C-8 3.5 -3 0 5 0c9.5 0 13 4 11.5 11l-3.5 23zm-6-9.5c-5.5.8-8.5 2.2-9 5.5-.5 2.5 1.5 4 4.5 4 4.5 0 6.5-2.5 7.5-7l.2-2.5h-3.2z"
              fill="#FFCC00"
            />
          </g>
          
          {/* o */}
          <g transform="translate(63, 14)">
            <path
              d="M16 34.5C6 34.5-1 27.5.5 17 2 6.5 11 0 21.5 0c10.5 0 17.5 7 16 17.5-1.5 10.5-11 17-21.5 17zm1-7c5.5 0 9-4 10-9 .8-4.5-1.5-8.5-7-8.5-5.5 0-9 4-10 9-.8 4.5 1.5 8.5 7 8.5z"
              fill="#FFCC00"
            />
          </g>

          {/* Registered Trademark ® */}
          <circle cx="86" cy="12" r="4.2" stroke="#FFCC00" strokeWidth="1" fill="none" />
          <text x="86" y="14.8" fontSize="5.5" fontWeight="900" fill="#FFCC00" textAnchor="middle" fontFamily="sans-serif">R</text>
        </g>
      </g>

      {/* Bottom Pill Badge: "Casa das Bicicletas" */}
      <g transform="translate(18, 72)">
        {/* Blue Rounded Pill */}
        <rect width="186" height="20" rx="10" fill="#0B3C95" stroke="#1D5FD3" strokeWidth="1" />
        
        {/* White Text */}
        <text
          x="90"
          y="14"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="0.08em"
          textAnchor="middle"
          fontFamily="'Barlow Condensed', sans-serif"
        >
          CASA DAS BICICLETAS
        </text>

        {/* Yellow Bar Accent on Right */}
        <rect x="171" y="3.5" width="6.5" height="13" rx="2" fill="#FFCC00" />
      </g>
    </svg>
  );
};
