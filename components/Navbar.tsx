
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 h-20 flex items-center px-6 md:px-12">
      <div className="flex items-center w-full justify-center">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
