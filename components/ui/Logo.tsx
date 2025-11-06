import React from 'react';

const Logo: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-dark';
  return (
    <div className="flex items-center gap-2">
      <div className="bg-brand-orange p-2 rounded-md">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M9 9L15 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
           <path
            d="M15 9L9 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={`font-bold text-2xl ${textColor}`}>
        3bell <span className="font-light">three</span>
      </div>
    </div>
  );
};

export default Logo;
