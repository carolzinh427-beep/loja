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
    name: 'Bicicleta Elétrica E-Trail Pro 500W',
    category: 'eletricas',
    priceDemonstrative: 'R$ 8.990,00',
    badge: 'Alta Tecnologia',
    specs: ['Motor 500W Torque Alto', 'Bateria Lítio 13Ah Removível', 'Autonomia até 65km'],
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80',
    description: 'Quadro em alumínio aero com cabeamento interno, suspensão dianteira com trava e freios a disco hidráulicos.',
  },
  {
    id: 'prod-mtb-02',
    name: 'Mountain Bike Aro 29 Shimano Deore 12V',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 4.290,00',
    badge: 'Mais Vendida',
    specs: ['Grupo Shimano Deore 12 Velocidades', 'Suspensão a Ar com Trave no Guidão', 'Pneus Kevlar Tubeless Ready'],
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80',
    description: 'Geometria esportiva com excelente rolagem em trilhas e estradas de terra, rigidez e frenagem de precisão.',
  },
  {
    id: 'prod-moto-03',
    name: 'Motocicleta Street Sport 250cc',
    category: 'motos',
    priceDemonstrative: 'R$ 18.900,00',
    badge: 'Destaque Duas Rodas',
    specs: ['Motor 250cc 4T Injeção Eletrônica', 'Freios ABS Duplo Canal', 'Painel 100% Digital Blackout'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80',
    description: 'Equilíbrio ideal entre agilidade urbana e conforto na estrada, iluminação Full LED e ciclística precisa.',
  },
  {
    id: 'prod-capacete-04',
    name: 'Capacete Esportivo Aerodinâmico Carbon Series',
    category: 'capacetes',
    priceDemonstrative: 'R$ 680,00',
    badge: 'Segurança Premium',
    specs: ['Casco Tri-Composto com Fibra', 'Viseira Anti-Risco com Pinlock', 'Ventilação Multiponto Direcionada'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
    description: 'Projetado para reduzir ruído em altas velocidades e proteger com máximo conforto térmico.',
  },
  {
    id: 'prod-pneu-05',
    name: 'Pneu Bicicleta Aro 29x2.25 Kevlar All-Terrain',
    category: 'acessorios',
    priceDemonstrative: 'R$ 290,00',
    badge: 'Alta Durabilidade',
    specs: ['Composto Dual Compound 60 TPI', 'Compatível Tubeless sem Câmara', 'Cravos de tração auto-limpantes'],
    imageUrl: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?auto=format&fit=crop&w=900&q=80',
    description: 'Excelente aderência em curvas e frenagens seguras tanto em terreno seco quanto em lama moderada.',
  },
];
