import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-darktop shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-brand-lightbg">
          &lt;fritz<span className="text-brand-red">.yu</span>&gt;
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-brand-lightbg text-sm font-medium">
          <nav className="flex gap-6">
            <a href="#home" className="hover:text-brand-accent transition font-semibold">Home</a>
            <a href="#projects" className="hover:text-brand-accent transition font-semibold">Projects</a>
          </nav>
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-brand-darktop border-white border-2 text-white rounded-xl hover:bg-brand-dark hover:text-brand-red hover:border-brand-red transition text-sm font-semibold"
          >
            Let’s Talk!
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-darktop px-4 pb-4 shadow-md">
          <nav className="flex flex-col gap-4 text-brand-lightbg text-sm font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-brand-accent">Home</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-brand-accent">Projects</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-fit px-4 py-2 bg-brand-red text-white rounded-xl hover:bg-brand-accent transition text-sm font-semibold"
            >
              Let’s Talk!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
