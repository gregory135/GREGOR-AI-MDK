
import React, { useState } from 'react';
import { WORKSHOPS } from '../constants';
import { WorkshopItem } from '../types';

const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);
  const [activeTab, setActiveTab] = useState('Wszystkie');

  const tabs = ['Wszystkie', 'Dzieci', 'Młodzież', 'Dorośli'];

  const filteredWorkshops = activeTab === 'Wszystkie' 
    ? WORKSHOPS 
    : WORKSHOPS.filter(w => w.categories.includes(activeTab));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-2 dark:text-white">Nasze Pracownie</h2>
          <p className="text-slate-500 dark:text-slate-400">Sekcje artystyczne dla każdego wieku. Wybierz swoją ścieżkę rozwoju.</p>
        </div>
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorkshops.map(w => (
          <div 
            key={w.id} 
            onClick={() => setSelectedWorkshop(w)}
            className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700 cursor-pointer flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={w.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {w.categories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-white/95 backdrop-blur text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">{cat}</span>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                 <span className="text-white font-bold flex items-center gap-2">Zobacz ofertę <span className="material-icons text-sm">open_in_new</span></span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors">{w.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">{w.description}</p>
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <img src={w.instructorImage} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm font-semibold dark:text-slate-300">{w.instructor}</span>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-bold">
                  {w.pricing.monthly} / mc
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Drawer */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedWorkshop(null)}></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 h-full shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">Zapisy trwają</span>
                <h2 className="text-3xl font-bold dark:text-white">{selectedWorkshop.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedWorkshop(null)}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-12 no-scrollbar">
              <section className="flex flex-col md:flex-row gap-8 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700">
                <img src={selectedWorkshop.instructorImage} alt="" className="w-24 h-24 rounded-2xl object-cover shadow-lg" />
                <div>
                  <h4 className="text-xl font-bold dark:text-white mb-1">{selectedWorkshop.instructor}</h4>
                  <p className="text-primary text-sm font-bold mb-3 uppercase tracking-wider">Kierownik pracowni</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{selectedWorkshop.instructorBio}</p>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-bold mb-6 flex items-center gap-3 dark:text-white uppercase tracking-widest">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center"><span className="material-icons text-sm">event</span></span>
                  Harmonogram zajęć
                </h4>
                <div className="space-y-3">
                  {selectedWorkshop.schedule.map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                       <div>
                         <p className="font-bold dark:text-white">{row.day}</p>
                         <p className="text-xs text-slate-500">{row.group}</p>
                       </div>
                       <span className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-sm font-bold text-primary">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-lg font-bold mb-6 flex items-center gap-3 dark:text-white uppercase tracking-widest">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center"><span className="material-icons text-sm">payments</span></span>
                  Koszty udziału
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">Miesięcznie</p>
                    <p className="text-3xl font-black text-primary">{selectedWorkshop.pricing.monthly}</p>
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">Pojedynczo</p>
                    <p className="text-3xl font-black dark:text-white">{selectedWorkshop.pricing.single}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                <span className="material-icons">assignment_turned_in</span> Zapisz się na zajęcia
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workshops;
