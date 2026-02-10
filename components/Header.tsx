
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Start', path: '/' },
    { label: 'Aktualności', path: '/aktualnosci' },
    { label: 'Wydarzenia', path: '/wydarzenia' },
    { label: 'Kino', path: '/kino' },
    { label: 'Pracownie', path: '/pracownie' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl transition-transform group-hover:scale-105">M</div>
          <div>
            <h1 className="font-bold text-xl leading-none dark:text-white">MDK</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">Człuchów</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`hover:text-primary transition-colors pb-1 border-b-2 transition-all ${location.pathname === item.path ? 'text-primary border-primary' : 'border-transparent'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Kup Bilet
          </button>
          <button 
            className="lg:hidden text-slate-700 dark:text-slate-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-6 space-y-4 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg ${location.pathname === item.path ? 'text-primary' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                Bilety Online
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
