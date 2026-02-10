
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-2 dark:text-white">Kontakt</h2>
        <p className="text-slate-500 dark:text-slate-400">Masz pytania? Chętnie na nie odpowiemy. Skontaktuj się z nami!</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-xl mb-6 dark:text-white">Dane teleadresowe</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-icons">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adres</p>
                  <p className="dark:text-white">ul. Wojska Polskiego 5</p>
                  <p className="dark:text-white">77-300 Człuchów</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-icons">phone</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telefon</p>
                  <p className="dark:text-white">+48 59 834 25 10</p>
                  <p className="text-sm text-slate-500">Sekretariat (8:00 - 16:00)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-icons">email</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="dark:text-white">sekretariat@mdkczluchow.pl</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl">
             <h3 className="font-bold text-xl mb-4">Godziny otwarcia</h3>
             <div className="space-y-2 text-sm text-slate-400">
               <div className="flex justify-between"><span>Poniedziałek - Piątek</span> <span className="text-white">08:00 - 20:00</span></div>
               <div className="flex justify-between"><span>Sobota</span> <span className="text-white">10:00 - 18:00</span></div>
               <div className="flex justify-between"><span>Niedziela</span> <span className="text-white">Zależnie od wydarzeń</span></div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 h-full">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                  <span className="material-icons text-4xl">check</span>
                </div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">Wiadomość wysłana!</h3>
                <p className="text-slate-500">Dziękujemy za kontakt. Odpowiemy tak szybko, jak to możliwe.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Wyślij kolejną wiadomość</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Imię i nazwisko</label>
                    <input required type="text" className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="Jan Kowalski" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Adres e-mail</label>
                    <input required type="email" className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="jan@przyklad.pl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Temat wiadomości</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white">
                    <option>Zapytanie ogólne</option>
                    <option>Bilety i kino</option>
                    <option>Zapisy na zajęcia</option>
                    <option>Wynajem sal</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Treść wiadomości</label>
                  <textarea required rows={5} className="w-full bg-slate-50 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="W czym możemy pomóc?"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" id="privacy" />
                  <label htmlFor="privacy" className="text-xs text-slate-500">Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności w celu obsługi zapytania.</label>
                </div>
                <button 
                  disabled={formStatus === 'sending'}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <span className="material-icons">send</span>
                      Wyślij wiadomość
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-12">
        <div className="w-full h-96 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative flex items-center justify-center group">
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
           <div className="absolute inset-0 bg-primary/10"></div>
           <div className="relative z-10 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl flex flex-col items-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white mb-2 animate-bounce">
                <span className="material-icons">location_on</span>
              </div>
              <p className="font-bold dark:text-white">MDK Człuchów</p>
              <p className="text-xs text-slate-500">Kliknij aby otworzyć Mapy Google</p>
              <a href="https://maps.google.com" target="_blank" className="mt-4 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">Otwórz mapę</a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
