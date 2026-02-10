
import React, { useState } from 'react';
import { MOVIES } from '../constants';

const Cinema: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [bookingSeance, setBookingSeance] = useState<{title: string, time: string} | null>(null);

  const days = [
    { name: 'Dziś', date: '15.10', full: 'Wtorek' },
    { name: 'Jutro', date: '16.10', full: 'Środa' },
    { name: 'Czw', date: '17.10', full: 'Czwartek' },
    { name: 'Pią', date: '18.10', full: 'Piątek' },
    { name: 'Sob', date: '19.10', full: 'Sobota' },
    { name: 'Nie', date: '20.10', full: 'Niedziela' },
    { name: 'Pon', date: '21.10', full: 'Poniedziałek' },
  ];

  return (
    <div>
      <header className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-black mb-4 tracking-[0.2em] uppercase">Kino Uciecha</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Repertuar Kina</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">Poczuj magię wielkiego ekranu w samym sercu Człuchowa. Wybierz film i zarezerwuj najlepsze miejsca już teraz.</p>
        </div>
      </header>

      {/* Day Selector */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-6 flex gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          {days.map((day, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`flex-shrink-0 min-w-[120px] flex flex-col items-center p-4 rounded-3xl border-2 transition-all duration-300 ${selectedDay === idx ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30 -translate-y-1' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:border-primary/50'}`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">{day.name}</span>
              <span className="text-2xl font-black">{day.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Movie List */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {MOVIES.map(movie => (
          <article key={movie.id} className="bg-white dark:bg-slate-800 rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col lg:flex-row group">
            <div className="lg:w-[350px] relative overflow-hidden">
              <img src={movie.imageUrl} alt="" className="w-full h-full object-cover aspect-[2/3] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <div className="bg-yellow-500 text-black font-black px-4 py-1.5 rounded-2xl text-xs shadow-lg uppercase tracking-widest">{movie.rating}</div>
                 <div className="bg-black/60 backdrop-blur text-white px-4 py-1.5 rounded-2xl text-[10px] font-black shadow-lg uppercase tracking-widest">{movie.duration}</div>
              </div>
              <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                    <span className="material-icons text-4xl">play_arrow</span>
                 </div>
              </button>
            </div>
            <div className="flex-1 p-10 md:p-14 flex flex-col">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">{movie.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {movie.genre.split(',').map(g => (
                      <span key={g} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg">{g.trim()}</span>
                    ))}
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg">{movie.language}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 flex-grow">{movie.description}</p>
              
              <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Wybierz godzinę seansu:</h5>
                <div className="flex flex-wrap gap-4">
                  {movie.showtimes.map((st, i) => (
                    <button 
                      key={i} 
                      onClick={() => setBookingSeance({title: movie.title, time: st.time})}
                      className="group/btn relative py-4 px-8 rounded-2xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary hover:bg-white dark:hover:bg-slate-600 transition-all flex flex-col items-center min-w-[140px]"
                    >
                      <span className="text-2xl font-black text-slate-900 dark:text-white group-hover/btn:text-primary">{st.time}</span>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{st.hall} • {st.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Simple Booking Modal Placeholder */}
      {bookingSeance && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setBookingSeance(null)}></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[40px] w-full max-w-lg p-10 text-center animate-in zoom-in duration-300">
             <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
               <span className="material-icons text-4xl">confirmation_number</span>
             </div>
             <h3 className="text-3xl font-black dark:text-white mb-2">{bookingSeance.title}</h3>
             <p className="text-primary font-bold mb-8">Seans: {bookingSeance.time} • Sala 1</p>
             
             <div className="space-y-4 mb-10">
                <p className="text-sm text-slate-500 leading-relaxed">System sprzedaży biletów online otworzy się w nowym oknie. Możesz tam wybrać dokładne miejsca i zapłacić BLIK-iem lub kartą.</p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl flex justify-between items-center">
                   <span className="font-bold dark:text-white">Bilet Normalny</span>
                   <span className="font-black text-primary">22.00 PLN</span>
                </div>
             </div>

             <div className="flex flex-col gap-3">
               <button className="w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20">Przejdź do płatności</button>
               <button onClick={() => setBookingSeance(null)} className="w-full py-4 text-slate-400 font-bold">Wróć do repertuaru</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cinema;
