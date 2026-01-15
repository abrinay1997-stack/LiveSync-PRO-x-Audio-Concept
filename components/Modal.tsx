
import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="bg-[#0f0f0f] border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#050505]">
          <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto text-slate-400 text-sm leading-relaxed space-y-4 custom-scrollbar">
          {children}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-[#050505] flex justify-end">
          <Button variant="ghost" onClick={onClose} className="py-2 px-6 text-xs">
            Cerrar
          </Button>
        </div>

        {/* Top Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>
    </div>
  );
};

export default Modal;
