
export interface Bouquet {
  id: string;
  name: string;
  count: number;
  price: number;
  description: string;
  image: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ComparisonPoint {
  title: string;
  natural: string;
  artificial: string;
}
