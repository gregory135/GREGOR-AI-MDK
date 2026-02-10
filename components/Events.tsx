
import React, { useState } from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  
  const categories = ['Wszystkie', 'Koncert', 'Warsztaty', 'Teatr', 'Wystawa'];
  const filteredEvents = activeCategory === 'Wszystkie' 
    ? EVENTS 
    : EVENTS.filter(e => e.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2 dark:text-white">Kalendarz Wydarzeń</h2>
        <p className="text-slate-500 dark:text-slate-400">Odkryj kulturę w Człuchowie. Koncerty, spektakle i wystawy w jednym miejscu.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold mb-4 dark:text-white">Kategorie</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'hover:bg-primary/10 text-slate-600 dark:text-slate-400'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold mb-4 dark:text-white">Zakres dat</h3>
            <input type="date" className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-lg p-2 text-sm" />
          </div>
        </aside>

        {/* List */}
        <div className="flex-grow space-y-6">
          <div className="flex justify-between items-center mb-6">
             <p className="text-sm text-slate-500">Znaleziono: <span className="font-bold text-slate-900 dark:text-white">{filteredEvents.length} wydarzeń</span></p>
          </div>
          
          {filteredEvents.map(event => (
            <article key={event.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all">
              <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                <img src={event.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">{event.category}</span>
                  <span className="text-primary font-bold text-xl">{event.price}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{event.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="material-icons text-primary">calendar_today</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{event.date}</p>
                      <p className="text-sm">godz. {event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="material-icons text-primary">location_on</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{event.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-all">Kup bilet</button>
                  <button className="border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all dark:text-white">Szczegóły</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
