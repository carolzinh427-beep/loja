export interface Product {
  id: string;
  name: string;
  category: 'bicicletas' | 'motos' | 'eletricas' | 'capacetes' | 'acessorios';
  priceDemonstrative: string;
  badge?: string;
  specs: string[];
  imageUrl: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  imageUrl: string;
  filterKey: string;
}

export const WHATSAPP_NUMBER = '5533991405778';
export const WHATSAPP_DISPLAY = '(33) 99140-5778';

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'cat-bikes',
    title: 'Bicicletas',
    subtitle: 'MTB, Speed, Passeio e Urbana',
    count: 'Modelos selecionados',
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    filterKey: 'bicicletas',
  },
  {
    id: 'cat-motos',
    title: 'Motos',
    subtitle: 'Mobilidade, força e adrenalina',
    count: 'Linha completa',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    filterKey: 'motos',
  },
  {
    id: 'cat-eletricas',
    title: 'Bicicletas Elétricas',
    subtitle: 'Autonomia inteligente e tecnologia',
    count: 'E-Bikes de alta performance',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
    filterKey: 'eletricas',
  },
  {
    id: 'cat-capacetes',
    title: 'Capacetes',
    subtitle: 'Segurança e aerodinâmica esportiva',
    count: 'Certificação de segurança',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    filterKey: 'capacetes',
  },
  {
    id: 'cat-acessorios',
    title: 'Acessórios & Peças',
    subtitle: 'Pneus, componentes e ferramentas',
    count: 'Reposição e upgrade',
    imageUrl: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80',
    filterKey: 'acessorios',
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-ebike-01',
    name: 'Bicicleta Elétrica 350W',
    category: 'eletricas',
    priceDemonstrative: 'R$ 6.999,00',
    badge: 'Alta Tecnologia',
    specs: ['Motor 350W Torque Alto', 'Bateria Lítio 13Ah', 'Autonomia até 55km'],
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80',
    description: 'Quadro em alumínio, pedal assistido e freios a disco.',
  },
  {
    id: 'prod-mtb-02',
    name: 'Mountain Bike Aro 29',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 1.299,00',
    badge: 'Mais Vendida',
    specs: ['Câmbio 21 Velocidades', 'Suspensão Dianteira', 'Freio a Disco Mecânico'],
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80',
    description: 'Geometria esportiva com excelente rolagem em qualquer terreno.',
  },
  {
    id: 'prod-moto-03',
    name: 'Honda CG 160 Start',
    category: 'motos',
    priceDemonstrative: 'R$ 14.990,00',
    badge: 'Economia & Força',
    specs: ['Motor 160cc Flex', 'Partida Elétrica', 'Excelente Autonomia'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    description: 'A motocicleta mais confiável e econômica do Brasil.',
  },
  {
    id: 'prod-capacete-04',
    name: 'Capacete Pro Tork Fechado',
    category: 'capacetes',
    priceDemonstrative: 'R$ 349,90',
    badge: 'Segurança',
    specs: ['Casco ABS Injetado', 'Viseira Cristal 2mm', 'Forro Confortável'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    description: 'Proteção aerodinâmica e segurança certificada.',
  },
  {
    id: 'prod-pneu-05',
    name: 'Pneu 29x2.10',
    category: 'acessorios',
    priceDemonstrative: 'R$ 89,90',
    badge: 'Alta Durabilidade',
    specs: ['Borracha de Alta Tração', 'Excelente Rolagem', 'Aro 29'],
    imageUrl: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?auto=format&fit=crop&w=600&q=80',
    description: 'Cravos direcionais para tração e durabilidade.',
  },
];
