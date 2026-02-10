
import { EventItem, NewsItem, MovieItem, WorkshopItem } from './types';

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Jesienne Brzmienia - Jazz w MDK',
    category: 'Koncert',
    date: '2024-10-15',
    time: '19:00',
    location: 'Sala Widowiskowa',
    price: '45 PLN',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop',
    description: 'Wieczór pełen improwizacji i ciepłych dźwięków saksofonu w wykonaniu lokalnych artystów. W programie standardy jazzowe oraz autorskie kompozycje zespołu Blue Note Trio. Po koncercie zapraszamy na jam session w kuluarach.'
  },
  {
    id: 'e2',
    title: 'Malowanie na Szkle - Techniki',
    category: 'Warsztaty',
    date: '2024-10-22',
    time: '16:30',
    location: 'Pracownia Plastyczna',
    price: 'Bezpłatne',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop',
    description: 'Zapraszamy dzieci i dorosłych na kreatywne spotkanie z tradycyjnym rzemiosłem artystycznym. Zapewniamy wszystkie materiały: szkło, specjalistyczne farby konturowe i wypełniające. Stwórz własny unikatowy witraż!'
  },
  {
    id: 'e3',
    title: '„Moralność Pani Dulskiej” – Grupa Teatralna',
    category: 'Teatr',
    date: '2024-10-28',
    time: '18:00',
    location: 'Kino Uciecha',
    price: 'Wstęp Wolny',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop',
    description: 'Klasyka polskiej literatury w nowoczesnej interpretacji naszej amatorskiej grupy teatralnej "Maska". Dowcipne, ale i gorzkie spojrzenie na mieszczańską obłudę, które mimo upływu lat wciąż pozostaje aktualne.'
  },
  {
    id: 'e4',
    title: 'Wystawa Fotografii: Człuchów w Obiektywie',
    category: 'Wystawa',
    date: '2024-11-05',
    time: '17:00',
    location: 'Hol Główny',
    price: 'Wstęp Wolny',
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop',
    description: 'Wernisaż prac lokalnych fotografików amatorów. Zobacz nasze miasto z zupełnie innej perspektywy. Wystawa potrwa do końca listopada.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Ruszyły zapisy na sekcje artystyczne w nowym semestrze!',
    date: '10.10.2024',
    excerpt: 'Mamy jeszcze wolne miejsca w grupach tanecznych oraz w pracowni rzeźby. Nie zwlekaj, liczba miejsc ograniczona!',
    content: 'Z wielką radością ogłaszamy, że nabór na zajęcia w sezonie 2024/2025 został otwarty. W ofercie znajdą Państwo: taniec nowoczesny, balet dla najmłodszych, warsztaty ceramiczne, naukę gry na instrumentach oraz kursy fotografii cyfrowej. Zapisy przyjmujemy osobiście w sekretariacie MDK lub poprzez formularz online dostępny w zakładce "Pracownie". Pierwsze zajęcia ruszają już od listopada!',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'n2',
    title: 'Zmiana godzin otwarcia kasy biletowej',
    date: '08.10.2024',
    excerpt: 'Informujemy, że w dniach 15-18 października kasa biletowa będzie czynna wyjątkowo w godzinach 12:00 - 20:00.',
    content: 'W związku z intensywną sprzedażą biletów na jesienne koncerty, wychodzimy naprzeciw Państwa oczekiwaniom i wydłużamy godziny pracy kasy. Przypominamy również o możliwości zakupu biletów online przez naszą stronę internetową 24/7. Za utrudnienia przepraszamy.',
    imageUrl: '',
    isImportant: true
  },
  {
    id: 'n3',
    title: 'Sukces naszej grupy tanecznej na festiwalu w Gdyni',
    date: '05.10.2024',
    excerpt: 'Zespół "Impuls" zdobył Grand Prix na ogólnopolskim przeglądzie tańca współczesnego.',
    content: 'Nasi tancerze nie mają sobie równych! Podczas minionego weekendu grupa "Impuls" prowadzona przez instruktora Marka Kwiatkowskiego wywalczyła najwyższe trofeum na Festiwalu Tańca w Gdyni. Gratulujemy ciężkiej pracy i pasji, która przynosi tak wspaniałe efekty. Już niedługo będzie można zobaczyć zwycięski układ na naszej scenie!',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop'
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
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646be8958?q=80&w=1000&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1460666819451-7410f519397c?q=80&w=1000&auto=format&fit=crop',
    description: 'Odkryj świat kolorów i form. Zajęcia z rysunku, malarstwa oraz rzeźby.',
    instructorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    instructorBio: 'Absolwentka ASP w Gdańsku z ponad 15-letnim doświadczeniem w edukacji artystycznej.',
    schedule: [
      { day: 'Poniedziałek', hours: '16:00 - 17:30', group: 'Dzieci (7-12 lat)' },
      { day: 'Wtorek', hours: '17:00 - 19:00', group: 'Młodzież (13-18 lat)' }
    ],
    pricing: { monthly: '80 PLN', single: '25 PLN' }
  }
];
