
import { EventItem, NewsItem, MovieItem, WorkshopItem } from './types';

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Jesienne Brzmienia - Jazz w MDK',
    category: 'Koncert',
    date: '15.10.2024',
    time: '19:00',
    location: 'Sala Widowiskowa',
    price: '45 PLN',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzsjzDbPCx2xWEnW3RWPu7G9Md0cqgEeBtgqqMDx6HWTxtX6pzrhwbg5o6VfcUfBYv0RVQTAQj6_3a4IZ2qTgDuMT220jZqURHiLKuSJCqHCleEMGwF_eE3vhzcGVHzV7eWXif2VpLZ4Ne160wDYJ__pxtQTXcMhnFU4RyIDkmtBuLbvNWJMeph0SJk3J6rcICKaBhO6QrTCOlgDbbnv8XIFORabIiLPBoA3Uwq90Aa8isk35e8KcOKQVw9iwMS2Mi_rawz92jkTug',
    description: 'Wieczór pełen improwizacji i ciepłych dźwięków saksofonu w wykonaniu lokalnych artystów.'
  },
  {
    id: 'e2',
    title: 'Malowanie na Szkle - Techniki',
    category: 'Warsztaty',
    date: '22.10.2024',
    time: '16:30',
    location: 'Pracownia Plastyczna',
    price: 'Bezpłatne',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnZAkcQpeIvTqAhBmmNhYv4XlWiz6RoV390TwwDgwG2B2_S5bc9YtWr0zD8LKKx2K-ZJzC4osd65i9co3E_ADstrWTj3_QA2Q8-c2JeEy8C9YUR5ktXd3_uo6cV7epISsca3hcRrX-nZG2x8SaRDU3CY2NpbL0gJYirkLVtzoPqHt4CrddtmyX7DT8ZR6k1PyHJQjVKJWr9EXF0mJ7bGifFXgjRoH26GkHOKyaREhREthFiWuPPHiwVVo1GDvvkMVmSy01_T-z4DLA',
    description: 'Zapraszamy dzieci i dorosłych na kreatywne spotkanie z tradycyjnym rzemiosłem artystycznym.'
  },
  {
    id: 'e3',
    title: '„Moralność Pani Dulskiej” – Grupa Teatralna',
    category: 'Teatr',
    date: '28.10.2024',
    time: '18:00',
    location: 'Kino Uciecha',
    price: 'Wstęp Wolny',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVQcEUz-O0eImG5BaEhK99PfaW77luyWf8-39dEY8zYda5Dcfjuz_mXpO6eoAbM_NXPbS9nXN9yvkftvzw-AAh2ASFTw-MF31gmMwo-R97cjB7CiqJq5g5hm4orXXKo1jAC85RMNsllzQVnpCOqiVHPDG4Gki7R6vpbAPXc--giWTkMZy6DyXQwbBiblXWm-58HFsGHh1vpV-xmbJoR9bSg1hluglF2j2xvtfYRsDdxBgrCkxqaQklkFHFJqNMeKGdvWVTbiasoEEt',
    description: 'Klasyka polskiej literatury w nowoczesnej interpretacji naszej amatorskiej grupy teatralnej.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Ruszyły zapisy na sekcje artystyczne w nowym semestrze!',
    date: '10.10.2024',
    excerpt: 'Mamy jeszcze wolne miejsca w grupach tanecznych oraz w pracowni rzeźby. Nie zwlekaj, liczba miejsc ograniczona!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9pF2Ow4HTfntQVIofzwJ62buhvYrqp6qvRUROWl2hb2y7hmpQdPh_pQS5ZJy9ULnHfwkGi-RYgqEo0sGo57x9pYY5Uvv9mcU22j9mTt4_776CoAJywWDzVUrjBXzbE-TCI0N-JBbrEgMJsvc9OKeF4SHPSx8Juyeb74PhPwC9voAcQ9Jl5hpOvm_GH7p9uFR33H4ecqzk82p6RWaBtU8Id_DfFUKyY6wEyDpPnWKlbsJqfoDYEe7Xh-BGzgQeuJ6PlevF67B7yNkh'
  },
  {
    id: 'n2',
    title: 'Zmiana godzin otwarcia kasy biletowej',
    date: '08.10.2024',
    excerpt: 'Informujemy, że w dniach 15-18 października kasa biletowa będzie czynna wyjątkowo w godzinach 12:00 - 20:00.',
    imageUrl: '',
    isImportant: true
  }
];

export const MOVIES: MovieItem[] = [
  {
    id: 'm1',
    title: 'Pustynna Burza: Przebudzenie',
    duration: '155 min',
    genre: 'Sci-Fi, Przygodowy',
    language: 'Dubbing PL',
    rating: '12+',
    description: 'Młody wizjoner wyrusza w niebezpieczną podróż na najbardziej jałową planetę we wszechświecie, aby zapewnić przyszłość swojej rodzinie.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZnVfXpmBoaXivetVmAQUFZuKrRbHZUCKnEX2fTKwO1aQW7LsuDty-UMEwSeQXcQmCsmfU6xoW7MMnP_mOvvF85I6yFf8ikXTCnVAvukJXVTF75ncdAbl9NYadpfECYKYflMRbfwCN0iRDm9XLMxTs0CacFQBuN4Mqr23hXS2ZUFlACWADbTrnuieIMZ9AiCPyxUi9xzwhHk-kYI4rCYXT2IuoBex0oJErDbgNnL3WvUisRaSCGpK4p0IYw-qRG3BFSQzy2dGBnDKz',
    showtimes: [
      { time: '14:00', hall: 'Sala 1', type: '2D' },
      { time: '17:15', hall: 'Sala 1', type: '2D' },
      { time: '20:30', hall: 'Sala 1', type: '3D' }
    ]
  },
  {
    id: 'm2',
    title: 'Tajemnica Zaginionej Doliny',
    duration: '92 min',
    genre: 'Animacja, Familijny',
    language: 'Dubbing PL',
    rating: 'bo',
    description: 'Grupa leśnych przyjaciół odkrywa mapę prowadzącą do legendarnej doliny, w której podobno drzewa śpiewają.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApvQhW_6hw3Au88WxeR7-mZCsIQrXZGZU8_HYD74ILBRyRnLg1gwvlGtuXFr7A-dYKVmDKGILrxzvoa8YtjmDZ0h3Yu1Tvk7HetDiAtEppZhzF_BIh6WDQiZfSTzGA0O4mPjSfmUgG4cnK2RcxAEmHT343EPzPWU5tCiEdsy9zYxaSzKXAj3PJTrsdF6t4o0tpzeRX9k0Nj5RinVWkmnDMXe14_gpVSCKJLIWHhHZAw7uDUVYWl4HX_rioMV6HW5w_gU3my9fOWYGA',
    showtimes: [
      { time: '12:30', hall: 'Sala 1', type: '2D' },
      { time: '15:00', hall: 'Sala 1', type: '2D' }
    ]
  }
];

export const WORKSHOPS: WorkshopItem[] = [
  {
    id: 'w1',
    title: 'Pracownia Plastyczna',
    instructor: 'mgr Anna Nowak',
    categories: ['Dzieci', 'Młodzież'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS7bs8fibHheriJJtAQrFN-ATg8oKHhrJlEPSoY-SKUWw1qKtvy3iV4FyAN47V2tQ34u08Us07tZoSV52ohg24M8BioqLmjUqBmum_VXoDWZep0npRcBNGRSusWhLT5jWB_5mrlbXZUyB6lf-u3YyTzugdzJ_PlyLor9raeKTTiBrf4G-XuY2UOdbIJoBoTlMEU4PqtInH8f0BnDh_xANiR3951ifGLcOR5AJAG9oq8LO78l9Rboe1rEIaFD6moUW0J5V6cBcm2e7L',
    description: 'Odkryj świat kolorów i form. Zajęcia z rysunku, malarstwa oraz rzeźby.',
    instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY309I3mxB7tGsm_4ewyrKqZXSLJpF56eMjBb_5ZTpsZ1Vd7jZWN-NPouI6BfC4hXlINfxQ9cgfvTbpNLHiKFncg37leYzMbd89CR0FZSXrAEM0vg7Ob5tpEkgWagX6XdgL18Tqv72m4Mm9Yg0FeTnrCAz-2fstFSMMAkTpcnBa4G1E_SDkRxCKanL70LaSOR1kGKrHuzQoJTLUy-IwsPfFw1-7Z02sOVpDJ4RDfTXsWdLSvmbNsY1fs_vZLAI1JmIYsZ72VESJdZY',
    instructorBio: 'Absolwentka ASP w Gdańsku z ponad 15-letnim doświadczeniem w edukacji artystycznej.',
    schedule: [
      { day: 'Poniedziałek', hours: '16:00 - 17:30', group: 'Dzieci (7-12 lat)' },
      { day: 'Wtorek', hours: '17:00 - 19:00', group: 'Młodzież (13-18 lat)' }
    ],
    pricing: { monthly: '80 PLN', single: '25 PLN' }
  }
];
