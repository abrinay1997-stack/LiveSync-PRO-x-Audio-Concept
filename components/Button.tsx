
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'secondary', children, className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-200 text-center inline-block";
  
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200",
    secondary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    ghost: "bg-white/5 border border-white/10 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
