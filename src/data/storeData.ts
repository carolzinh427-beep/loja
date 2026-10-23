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
    imageUrl: '/mockup-assets/cat-bicicletas.png',
    filterKey: 'bicicletas',
  },
  {
    id: 'cat-motos',
    title: 'Motos',
    subtitle: 'Mobilidade, força e adrenalina',
    count: 'Linha completa',
    imageUrl: '/mockup-assets/cat-motos.png',
    filterKey: 'motos',
  },
  {
    id: 'cat-eletricas',
    title: 'Elétricas',
    subtitle: 'Autonomia inteligente e tecnologia',
    count: 'E-Bikes de alta performance',
    imageUrl: '/mockup-assets/cat-eletricas.png',
    filterKey: 'eletricas',
  },
  {
    id: 'cat-capacetes',
    title: 'Capacetes',
    subtitle: 'Segurança e aerodinâmica esportiva',
    count: 'Certificação de segurança',
    imageUrl: '/mockup-assets/cat-capacetes.png',
    filterKey: 'capacetes',
  },
  {
    id: 'cat-acessorios',
    title: 'Acessórios',
    subtitle: 'Pneus, componentes e ferramentas',
    count: 'Reposição e upgrade',
    imageUrl: '/mockup-assets/cat-acessorios.png',
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
    imageUrl: '/mockup-assets/prod-ebike.png',
    description: 'Quadro em alumínio, pedal assistido e freios a disco.',
  },
  {
    id: 'prod-mtb-02',
    name: 'Mountain Bike Aro 29',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 1.299,00',
    badge: 'Mais Vendida',
    specs: ['Câmbio 21 Velocidades', 'Suspensão Dianteira', 'Freio a Disco Mecânico'],
    imageUrl: '/mockup-assets/prod-mtb.png',
    description: 'Geometria esportiva com excelente rolagem em qualquer terreno.',
  },
  {
    id: 'prod-moto-03',
    name: 'Honda CG 160 Start',
    category: 'motos',
    priceDemonstrative: 'R$ 14.990,00',
    badge: 'Economia & Força',
    specs: ['Motor 160cc Flex', 'Partida Elétrica', 'Excelente Autonomia'],
    imageUrl: '/mockup-assets/prod-cg160.png',
    description: 'A motocicleta mais confiável e econômica do Brasil.',
  },
  {
    id: 'prod-capacete-04',
    name: 'Capacete Pro Tork Fechado',
    category: 'capacetes',
    priceDemonstrative: 'R$ 349,90',
    badge: 'Segurança',
    specs: ['Casco ABS Injetado', 'Viseira Cristal 2mm', 'Forro Confortável'],
    imageUrl: '/mockup-assets/prod-capacete.png',
    description: 'Proteção aerodinâmica e segurança certificada.',
  },
  {
    id: 'prod-pneu-05',
    name: 'Pneu 29x2.10',
    category: 'acessorios',
    priceDemonstrative: 'R$ 89,90',
    badge: 'Alta Durabilidade',
    specs: ['Borracha de Alta Tração', 'Excelente Rolagem', 'Aro 29'],
    imageUrl: '/mockup-assets/prod-pneu.png',
    description: 'Cravos direcionais para tração e durabilidade.',
  },
];
