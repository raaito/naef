import React from 'react';

interface NaefLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  onClick?: () => void;
}

const OFFICIAL_LOGO_SRC = '/assets/aistudio/Nana_Advocacy_Foundation_Logo_a365fb64.png';

export const NaefLogo: React.FC<NaefLogoProps> = ({
  className = '',
  variant = 'full',
  onClick,
}) => {
  const isWhite = variant === 'white';

  return (
    <a
      href="#home"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97827] rounded-xl transition-transform ${
        isWhite
          ? 'bg-white px-3.5 py-2 shadow-sm border border-white/20'
          : ''
      } ${className}`}
      aria-label="NAEF - Nana Advocacy and Empowerment Foundation Home"
    >
      <img
        src={OFFICIAL_LOGO_SRC}
        alt="Nana Advocacy and Empowerment Foundation Logo"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          variant === 'compact'
            ? 'h-10 sm:h-11 mix-blend-multiply'
            : isWhite
            ? 'h-12 sm:h-14'
            : 'h-12 sm:h-14 mix-blend-multiply'
        }`}
      />
    </a>
  );
};
