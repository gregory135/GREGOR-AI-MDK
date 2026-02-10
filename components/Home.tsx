
import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img 
            alt="Hero Concert" 
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDemHZTbHYQf3BwOciTRhaTPn_5UCiHhPGvgFGV6FuS9EbMezwTBG0Rhzv57Y9-9vXX1uX__DjpwzVb5d3lJZJgi2ChKEdlQnCEAOMSuhEulk-bxpdHsATUyDh19tlQO6A8fL6SBVIJccza2uSoJ5lRcCCjfpzIDSZqlpadmIyE69vpnhrS0oyugk_2chttGP2zd18_GfEz6MwAmkGwCl9E9w_ErPk0nXi7YN4v9t4MCTZAKtQSW7lfbE1QyqNaDltA_F_xR50h4n4x" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-primary text-xs font-bold uppercase tracking-widest rounded mb-6">Już wkrótce</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Letni Festiwal Muzyki Alternatywnej</h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">Trzy dni niezapomnianych wrażeń, lokalni artyści i goście specjalni z całego kraju. Dołącz do nas w Parku Zamkowym.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                <span className="material-icons">confirmation_number</span>
                Kup bilet teraz
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Overlay */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: 'palette', title: 'Pracownie', desc: 'Rozwijaj pasje', link: '/pracownie' },
            { icon: 'movie', title: 'Kino', desc: 'Najlepsze filmy', link: '/kino' },
            { icon: 'event', title: 'Wydarzenia', desc: 'Bądź na bieżąco', link: '/wydarzenia' },
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 flex items-center gap-6">
              <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-full flex items-center justify-center transition-colors">
                <span className="material-icons text-3xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Events */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 dark:text-white">Nadchodzące Wydarzenia</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <Link to="/wydarzenia" className="text-primary font-semibold flex items-center gap-1 hover:underline">
            Zobacz wszystko
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map(event => (
            <div key={event.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md group border border-slate-100 dark:border-slate-700 transition-all hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-primary text-white text-center py-2 px-3 rounded-lg font-bold">
                  <span className="block text-lg">{event.date.split('.')[0]}</span>
                  <span className="block text-xs uppercase">{event.date.split('.')[1] === '10' ? 'Paź' : 'Lis'}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{event.category}</span>
                <h3 className="font-bold text-xl mb-4 mt-1 h-14 overflow-hidden dark:text-white">{event.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <span className="material-icons text-sm">schedule</span>
                  <span>{event.time} • {event.location}</span>
                </div>
                <button className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white text-slate-700 dark:text-slate-200 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  <span className="material-icons text-lg">local_activity</span>
                  Bilety: {event.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Aktualności</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {NEWS.map(news => (
              <article key={news.id} className={`${news.isImportant ? 'bg-primary text-white p-8 rounded-xl shadow-lg lg:col-span-1' : 'bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700'}`}>
                {!news.isImportant && (
                  <div className="h-48 overflow-hidden">
                    <img src={news.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`${news.isImportant ? '' : 'p-6'}`}>
                  <span className={`text-xs font-bold ${news.isImportant ? 'text-white/80' : 'text-primary'} uppercase mb-2 block`}>{news.date}</span>
                  <h3 className={`font-bold text-xl mb-3 ${news.isImportant ? 'text-2xl' : 'dark:text-white'}`}>{news.title}</h3>
                  <p className={`${news.isImportant ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'} text-sm leading-relaxed mb-4`}>{news.excerpt}</p>
                  <a href="#" className={`font-bold text-sm ${news.isImportant ? 'text-white underline' : 'text-primary hover:underline'}`}>Czytaj więcej</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
