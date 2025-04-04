
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#4A90E2" />
        <circle cx="50" cy="50" r="42" fill="#77B6EA" />
        <path
          d="M30,50 C30,40 40,30 50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 C40,70 30,60 30,50 Z"
          fill="#5CBA9F"
        />
        <path
          d="M35,50 C35,42.5 42.5,35 50,35 C57.5,35 65,42.5 65,50 C65,57.5 57.5,65 50,65 C42.5,65 35,57.5 35,50 Z"
          fill="#F5EEE6"
        />
        <path
          d="M65,40 C65,40 60,45 50,45 C40,45 35,40 35,40"
          stroke="#5CBA9F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M35,60 C35,60 40,55 50,55 C60,55 65,60 65,60"
          stroke="#5CBA9F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
