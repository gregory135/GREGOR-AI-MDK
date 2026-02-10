
import React, { useState } from 'react';
import { NEWS } from '../constants';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [filterImportant, setFilterImportant] = useState(false);

  const filteredNews = filterImportant ? NEWS.filter(n => n.isImportant) : NEWS;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-2 dark:text-white">Aktualności</h2>
          <p className="text-slate-500 dark:text-slate-400">Dowiedz się co dzieje się w Miejskim Domu Kultury w Człuchowie.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setFilterImportant(!filterImportant)}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${filterImportant ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'}`}
          >
            <span className="material-icons text-sm">{filterImportant ? 'notifications_active' : 'notifications_none'}</span>
            Tylko ważne
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(item => (
          <article 
            key={item.id} 
            className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border ${item.isImportant ? 'border-red-200 dark:border-red-900/30' : 'border-slate-100 dark:border-slate-700'}`}
          >
            {item.imageUrl && (
              <div className="h-56 overflow-hidden relative">
                <img src={item.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {item.isImportant && (
                   <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Ważne</div>
                )}
              </div>
            )}
            <div className={`p-6 ${!item.imageUrl ? 'border-t-4 border-red-500' : ''}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-3">
                <span className="material-icons text-xs">calendar_today</span>
                {item.date}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{item.excerpt}</p>
              <button 
                onClick={() => setSelectedNews(item)}
                className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Czytaj więcej <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Content Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedNews(null)}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300 no-scrollbar">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 dark:bg-slate-800/50 backdrop-blur rounded-full text-slate-800 dark:text-white transition-colors"
            >
              <span className="material-icons">close</span>
            </button>
            
            {selectedNews.imageUrl && (
              <div className="w-full h-64 md:h-96">
                <img src={selectedNews.imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{selectedNews.date}</span>
                {selectedNews.isImportant && <span className="text-red-500 font-bold text-xs uppercase tracking-widest flex items-center gap-1"><span className="material-icons text-sm">error_outline</span> Ważny komunikat</span>}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white leading-tight">{selectedNews.title}</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedNews.content || selectedNews.excerpt}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8 opacity-50">
                   <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                   <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                 <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-semibold">
                   <span className="material-icons">share</span> Udostępnij
                 </button>
                 <button 
                   onClick={() => setSelectedNews(null)}
                   className="bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded-xl font-bold dark:text-white hover:bg-slate-200"
                 >
                   Zamknij
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
