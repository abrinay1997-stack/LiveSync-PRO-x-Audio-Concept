
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 md:gap-10 ${className}`}>
      {/* LiveSync Pro Side */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative w-7 h-7 md:w-12 md:h-12 group flex-shrink-0">
          <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          <img 
            src="https://hostedimages-cdn.aweber-static.com/MjM0MTQ0NQ==/optimized/20657f92efa544489526caee3beef9d2.png" 
            alt="LiveSync Pro Logo" 
            className="relative w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
          />
        </div>
        <div className="flex flex-col items-start leading-none">
          <h1 className="text-[10px] md:text-base font-bold text-white tracking-[0.15em] uppercase">
            LiveSync <span className="gradient-text">PRO</span>
          </h1>
          <p className="text-white/60 text-[5px] md:text-[8px] uppercase tracking-[0.2em] mt-0.5 md:mt-1 font-medium whitespace-nowrap">
            System Engineering
          </p>
        </div>
      </div>

      {/* Elegant Divider */}
      <div className="h-8 md:h-10 w-px bg-white/10"></div>

      {/* Audio Concept Side - Proportional Adjustments */}
      <div className="relative w-48 md:w-80 group flex-shrink-0">
        <img 
          src="https://audioconcept.com.pa/wp-content/uploads/2021/06/ACPANR-LOGO.png.webp" 
          alt="Audio Concept Logo" 
          className="w-full h-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Logo;