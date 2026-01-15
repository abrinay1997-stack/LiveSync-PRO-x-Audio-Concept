
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Imagen del Logo con efecto de resplandor */}
      <div className="relative w-14 h-14 group flex-shrink-0">
        {/* Resplandor de fondo (Aura Cyan) */}
        <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full"></div>
        
        {/* Imagen del Logo Oficial */}
        <img 
          src="https://hostedimages-cdn.aweber-static.com/MjM0MTQ0NQ==/optimized/20657f92efa544489526caee3beef9d2.png" 
          alt="LiveSync Pro Logo" 
          className="relative w-full h-full object-contain opacity-100 transition-transform group-hover:scale-105 duration-500"
        />
      </div>

      {/* Contenedor de Texto a la derecha */}
      <div className="flex flex-col items-start">
        {/* Título Principal: Blanco con PRO en degradado */}
        <h1 className="text-xl font-bold text-white tracking-[0.15em] uppercase leading-tight">
          LiveSync <span className="gradient-text">PRO</span>
        </h1>
        
        {/* Subtítulo: Blanco mate */}
        <p className="text-white text-[9px] uppercase tracking-[0.2em] mt-0.5 opacity-90 font-medium">
          System Engineering Suite
        </p>
      </div>
    </div>
  );
};

export default Logo;
