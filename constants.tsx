
import { Bouquet, ComparisonPoint } from './types';

export const BOUQUETS: Bouquet[] = [
  {
    id: 'classic-7',
    name: 'The Petit Charm',
    count: 7,
    price: 80,
    description: 'A delicate arrangement perfect for bedside tables or small workspaces.',
    image: 'https://picsum.photos/seed/flower1/600/800',
    features: ['7 Premium Silk Stems', 'Ceramic Vase Included', 'Long-lasting Vibrancy']
  },
  {
    id: 'signature-13',
    name: 'The Graceful Dozen Plus One',
    count: 13,
    price: 120,
    description: 'Our most popular choice, offering a lush and balanced floral aesthetic.',
    image: 'https://picsum.photos/seed/flower2/600/800',
    features: ['13 Hand-crafted Stems', 'Detailed Real-touch Petals', 'Ideal Centerpiece']
  },
  {
    id: 'grand-20',
    name: 'The Eternal Majesty',
    count: 20,
    price: 160,
    description: 'A luxurious, full-bodied bouquet that makes a stunning statement in any room.',
    image: 'https://picsum.photos/seed/flower3/600/800',
    features: ['20 Deluxe Stems', 'Rich Textural Variety', 'Premium Gift Wrapping']
  }
];

export const COMPARISONS: ComparisonPoint[] = [
  {
    title: 'Longevity',
    natural: 'Lasts 5-10 days with proper care before wilting.',
    artificial: 'Lasts for years with zero maintenance or decay.'
  },
  {
    title: 'Maintenance',
    natural: 'Requires daily watering, stem trimming, and sun management.',
    artificial: 'Requires only occasional dusting to stay perfect.'
  },
  {
    title: 'Allergies',
    natural: 'Can trigger pollen allergies and sensitivities.',
    artificial: 'Hypoallergenic and safe for all households.'
  },
  {
    title: 'Cost Efficiency',
    natural: 'Recurring expense for fresh aesthetics.',
    artificial: 'One-time investment for perpetual beauty.'
  },
  {
    title: 'Versatility',
    natural: 'Fragile and sensitive to temperature and environment.',
    artificial: 'Resilient and suitable for dark corners or humid bathrooms.'
  }
];
