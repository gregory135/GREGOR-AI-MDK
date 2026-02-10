
import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { EventItem } from '../types';

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  
  const categories = ['Wszystkie', 'Koncert', 'Warsztaty', 'Teatr', 'Wystawa'];
  
  const filteredEvents = EVENTS.filter(e => {
    const matchesCategory = activeCategory === 'Wszystkie' || e.category === activeCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2 dark:text-white">Kalendarz Wydarzeń</h2>
        <p className="text-slate-500 dark:text-slate-400">Odkryj kulturę w Człuchowie. Koncerty, spektakle i wystawy w jednym miejscu.</p>
      </div>

      {/* Search and Quick Filters */}
      <div className="mb-10 flex flex-col lg:flex-row gap-6">
        <div className="relative flex-grow">
          <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Szukaj wydarzenia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 rounded-2xl font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEvents.map(event => (
          <article 
            key={event.id} 
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-500"
          >
            <div className="sm:w-56 h-64 sm:h-auto overflow-hidden relative">
              <img src={event.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary py-2 px-3 rounded-2xl font-bold text-center shadow-sm">
                <span className="block text-xl leading-none">{event.date.split('-')[2]}</span>
                <span className="block text-[10px] uppercase">{event.date.split('-')[1] === '10' ? 'Paź' : 'Lis'}</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">{event.category}</span>
                <span className="text-primary font-bold">{event.price}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{event.title}</h3>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="material-icons text-primary text-lg">schedule</span>
                  <span>godz. {event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="material-icons text-primary text-lg">location_on</span>
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex gap-3">
                <button className="flex-grow bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">Bilety</button>
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition-all"
                >
                  <span className="material-icons">more_horiz</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700">
           <span className="material-icons text-6xl text-slate-300 mb-4">event_busy</span>
           <h3 className="text-xl font-bold text-slate-500">Brak wydarzeń spełniających kryteria</h3>
           <button onClick={() => {setActiveCategory('Wszystkie'); setSearchQuery('')}} className="mt-4 text-primary font-bold underline">Wyczyść filtry</button>
        </div>
      )}

      {/* Detail Drawer for Events */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}></div>
          <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 h-full shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
            <div className="relative h-72">
              <img src={selectedEvent.imageUrl} alt="" className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full text-white transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                 <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-widest mb-2 inline-block">{selectedEvent.category}</span>
                 <h2 className="text-3xl font-bold text-white leading-tight">{selectedEvent.title}</h2>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Kiedy</p>
                   <p className="font-bold dark:text-white">{selectedEvent.date}</p>
                   <p className="text-sm text-primary font-semibold">godz. {selectedEvent.time}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
                   <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Gdzie</p>
                   <p className="font-bold dark:text-white">{selectedEvent.location}</p>
                   <p className="text-sm text-primary font-semibold">Człuchów</p>
                </div>
              </div>

              <section>
                <h4 className="font-bold text-lg mb-4 dark:text-white">O wydarzeniu</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </section>

              <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                 <h4 className="font-bold mb-4 flex items-center gap-2 dark:text-white">
                   <span className="material-icons text-primary">local_activity</span>
                   Informacje o biletach
                 </h4>
                 <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-primary">{selectedEvent.price}</span>
                    <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20">Kup teraz</button>
                 </div>
              </section>

              <section>
                 <h4 className="font-bold text-lg mb-4 dark:text-white">Lokalizacja</h4>
                 <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 flex-col gap-2 border-2 border-dashed border-slate-200 dark:border-slate-700">
                    <span className="material-icons text-4xl">map</span>
                    <span className="text-sm font-medium">Interaktywna mapa wkrótce</span>
                 </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
