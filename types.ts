
export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price?: string;
  imageUrl: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  isImportant?: boolean;
}

export interface MovieItem {
  id: string;
  title: string;
  duration: string;
  genre: string;
  language: string;
  rating: string;
  description: string;
  imageUrl: string;
  showtimes: { time: string; hall: string; type: string }[];
}

export interface WorkshopItem {
  id: string;
  title: string;
  instructor: string;
  categories: string[];
  imageUrl: string;
  description: string;
  schedule: { day: string; hours: string; group: string }[];
  pricing: { monthly: string; single: string };
  instructorImage: string;
  instructorBio: string;
}
