
import React, { useState } from 'react';
import { WORKSHOPS } from '../constants';
import { WorkshopItem } from '../types';

const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 dark:text-white">Nasze Pracownie</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORKSHOPS.map(w => (
          <div 
            key={w.id} 
            onClick={() => setSelectedWorkshop(w)}
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={w.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 flex gap-2">
                {w.categories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-white/90 text-primary text-xs font-bold rounded-full">{cat}</span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{w.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">{w.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="material-icons text-primary text-base">person</span>
                  <span>{w.instructor}</span>
                </div>
                <span className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Szczegóły <span className="material-icons text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Drawer */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Szczegóły pracowni</span>
                <h2 className="text-3xl font-bold dark:text-white">{selectedWorkshop.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedWorkshop(null)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar">
              <section className="flex flex-col md:flex-row gap-8">
                <img src={selectedWorkshop.instructorImage} alt="" className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/10" />
                <div>
                  <h4 className="text-xl font-bold dark:text-white">{selectedWorkshop.instructor}</h4>
                  <p className="text-primary font-medium mb-3">Główny Instruktor</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{selectedWorkshop.instructorBio}</p>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <span className="material-icons text-primary">calendar_today</span> Harmonogram
                </h4>
                <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 dark:text-white">Dzień</th>
                        <th className="px-4 py-3 dark:text-white">Godziny</th>
                        <th className="px-4 py-3 dark:text-white">Grupa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {selectedWorkshop.schedule.map((row, i) => (
                        <tr key={i}>
                          <td className="px-4 py-3 dark:text-slate-400">{row.day}</td>
                          <td className="px-4 py-3 dark:text-slate-400">{row.hours}</td>
                          <td className="px-4 py-3 dark:text-slate-400">{row.group}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <span className="material-icons text-primary">payments</span> Cennik
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold">Miesięcznie</p>
                    <p className="text-2xl font-bold text-primary">{selectedWorkshop.pricing.monthly}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <p className="text-xs text-slate-500 uppercase font-bold">Jednorazowo</p>
                    <p className="text-2xl font-bold text-primary">{selectedWorkshop.pricing.single}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800">
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-transform active:scale-95 flex items-center justify-center gap-2">
                <span className="material-icons">how_to_reg</span> Zapisz się teraz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workshops;
