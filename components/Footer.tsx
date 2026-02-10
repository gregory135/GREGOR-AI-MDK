
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
            <h4 className="font-bold text-lg dark:text-white">MDK Człuchów</h4>
          </div>
          <div className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
            <p className="flex gap-2">
              <span className="material-icons text-primary text-sm">location_on</span>
              ul. Wojska Polskiego 5<br />77-300 Człuchów
            </p>
            <p className="flex gap-2">
              <span className="material-icons text-primary text-sm">phone</span>
              +48 59 834 25 10
            </p>
            <p className="flex gap-2">
              <span className="material-icons text-primary text-sm">email</span>
              sekretariat@mdkczluchow.pl
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 dark:text-white">Na skróty</h4>
          <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Repertuar kina</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Zapisy na zajęcia</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Wynajem sali</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Polityka prywatności</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 dark:text-white">Kontakt</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-icons text-xl">facebook</span>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-icons text-xl">camera_alt</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 dark:text-white">Newsletter</h4>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Twój e-mail" 
              className="flex-grow bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white p-2 rounded-lg">
              <span className="material-icons">send</span>
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 dark:border-slate-800 pt-8 text-center text-xs text-slate-500">
        <p>© 2024 Miejski Dom Kultury w Człuchowie. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
