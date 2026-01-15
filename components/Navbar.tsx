
import React from 'react';
import Logo from './Logo';
import Button from './Button';
import { EVENT_DATA } from '../constants';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 h-20 flex items-center px-4 md:px-12 justify-between">
      <div className="flex items-center">
        <div className="scale-75 origin-left">
          <Logo />
        </div>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]"
        >
          Lab
        </button>
        <button 
          onClick={() => scrollToSection('agenda')} 
          className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]"
        >
          Despliegue
        </button>
        <button 
          onClick={() => scrollToSection('audience')} 
          className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]"
        >
          Perfiles
        </button>
        <Button 
          variant="secondary" 
          onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
          className="py-2 text-[10px] uppercase tracking-widest"
        >
          Inscribirme
        </Button>
      </div>
      <div className="md:hidden">
        <Button 
          variant="secondary" 
          onClick={() => window.open(EVENT_DATA.registrationLink, '_blank')}
          className="py-1.5 px-4 text-[10px] uppercase tracking-widest"
        >
          Inscribirme
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
