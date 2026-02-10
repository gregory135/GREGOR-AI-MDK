
import React, { useState } from 'react';
import { MOVIES } from '../constants';

const Cinema: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const days = [
    { name: 'Pon', date: '13.05' },
    { name: 'Wt', date: '14.05' },
    { name: 'Śr', date: '15.05' },
    { name: 'Cz', date: '16.05' },
    { name: 'Pt', date: '17.05' },
    { name: 'Sb', date: '18.05' },
    { name: 'Nd', date: '19.05' },
  ];

  return (
    <div>
      <header className="relative bg-slate-900 py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1600/600')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold mb-3 tracking-widest uppercase">Kino Cyfrowe 2D/3D</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Repertuar Kina</h2>
          <p className="text-slate-300 max-w-2xl">Zapraszamy na najnowsze produkcje filmowe. Sala kinowa wyposażona w nowoczesny system dźwiękowy i wygodne fotele.</p>
        </div>
      </header>

      {/* Day Selector */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {days.map((day, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`flex-shrink-0 min-w-[100px] flex flex-col items-center p-3 rounded-xl border-2 transition-all ${selectedDay === idx ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
            >
              <span className="text-xs font-medium uppercase opacity-70">{day.name}</span>
              <span className="text-xl font-bold">{day.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Movie List */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {MOVIES.map(movie => (
          <article key={movie.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row">
            <div className="lg:w-1/4 relative group overflow-hidden">
              <img src={movie.imageUrl} alt="" className="w-full h-full object-cover aspect-[2/3] transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded text-sm shadow-lg">{movie.rating}</div>
            </div>
            <div className="flex-1 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{movie.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><span className="material-icons text-sm">schedule</span> {movie.duration}</span>
                    <span className="flex items-center gap-1"><span className="material-icons text-sm">movie</span> {movie.genre}</span>
                    <span className="flex items-center gap-1"><span className="material-icons text-sm">language</span> {movie.language}</span>
                  </div>
                </div>
                <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                  <span className="material-icons">play_circle</span> Zwiastun
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 flex-grow">{movie.description}</p>
              
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Godziny seansów:</h5>
                <div className="flex flex-wrap gap-3">
                  {movie.showtimes.map((st, i) => (
                    <button key={i} className="group relative min-w-[120px] py-3 px-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary transition-all flex flex-col items-center">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">{st.time}</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-tighter">{st.hall} • {st.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Cinema;
