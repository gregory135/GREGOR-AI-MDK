
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Cinema from './components/Cinema';
import Workshops from './components/Workshops';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1); // multiplier

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const toggleContrast = () => setIsHighContrast(!isHighContrast);
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.1, 1.5));
  const resetFontSize = () => setFontSize(1);

  return (
    <div style={{ fontSize: `${fontSize}rem` }} className="min-h-screen flex flex-col">
      <HashRouter>
        {/* Top Accessibility Bar */}
        <div className="bg-slate-900 text-white py-2 px-6 flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <button 
              onClick={toggleContrast}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded px-1"
            >
              <span className="material-icons text-sm">contrast</span>
              <span>Kontrast</span>
            </button>
            <button 
              onClick={increaseFontSize}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded px-1"
            >
              <span className="material-icons text-sm">text_fields</span>
              <span>Wielkość liter</span>
            </button>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">BIP</a>
            <a className="hover:text-primary transition-colors" href="#">Deklaracja dostępności</a>
          </div>
        </div>

        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wydarzenia" element={<Events />} />
            <Route path="/kino" element={<Cinema />} />
            <Route path="/pracownie" element={<Workshops />} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
