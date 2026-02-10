
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Cinema from './components/Cinema';
import Workshops from './components/Workshops';
import News from './components/News';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(0); // 0: normal, 1: large, 2: extra large
  
  const fontSizes = [1, 1.1, 1.2]; // rem values

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const toggleContrast = () => setIsHighContrast(!isHighContrast);
  const cycleFontSize = () => setFontSizeIndex((prev) => (prev + 1) % fontSizes.length);

  return (
    <div style={{ fontSize: `${fontSizes[fontSizeIndex]}rem` }} className="min-h-screen flex flex-col transition-[font-size] duration-200">
      <HashRouter>
        {/* Top Accessibility Bar */}
        <div className="bg-slate-900 text-white py-2 px-6 flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <button 
              onClick={toggleContrast}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded px-1"
              aria-label="Przełącz wysoki kontrast"
            >
              <span className="material-icons text-sm">contrast</span>
              <span>Kontrast</span>
            </button>
            <button 
              onClick={cycleFontSize}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:ring-2 focus:ring-primary rounded px-1"
              aria-label="Zmień wielkość tekstu"
            >
              <span className="material-icons text-sm">text_fields</span>
              <span>
                Wielkość liter 
                <span className="ml-1 opacity-60">
                  ({fontSizeIndex === 0 ? 'A' : fontSizeIndex === 1 ? 'A+' : 'A++'})
                </span>
              </span>
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
            <Route path="/aktualnosci" element={<News />} />
            <Route path="/wydarzenia" element={<Events />} />
            <Route path="/kino" element={<Cinema />} />
            <Route path="/pracownie" element={<Workshops />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
