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
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85',
    filterKey: 'bicicletas',
  },
  {
    id: 'cat-motos',
    title: 'Motos',
    subtitle: 'Mobilidade, força e adrenalina',
    count: 'Linha completa',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=85',
    filterKey: 'motos',
  },
  {
    id: 'cat-eletricas',
    title: 'Elétricas',
    subtitle: 'Autonomia inteligente e tecnologia',
    count: 'E-Bikes de alta performance',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85',
    filterKey: 'eletricas',
  },
  {
    id: 'cat-capacetes',
    title: 'Capacetes',
    subtitle: 'Segurança e aerodinâmica esportiva',
    count: 'Certificação de segurança',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85',
    filterKey: 'capacetes',
  },
  {
    id: 'cat-acessorios',
    title: 'Acessórios',
    subtitle: 'Pneus, componentes e ferramentas',
    count: 'Reposição e upgrade',
    imageUrl: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85',
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
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85',
    description: 'Quadro em alumínio, pedal assistido e freios a disco.',
  },
  {
    id: 'prod-mtb-02',
    name: 'Mountain Bike Aro 29',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 1.299,00',
    badge: 'Mais Vendida',
    specs: ['Câmbio 21 Velocidades', 'Suspensão Dianteira', 'Freio a Disco Mecânico'],
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85',
    description: 'Geometria esportiva com excelente rolagem em qualquer terreno.',
  },
  {
    id: 'prod-moto-03',
    name: 'Honda CG 160 Start',
    category: 'motos',
    priceDemonstrative: 'R$ 14.990,00',
    badge: 'Economia & Força',
    specs: ['Motor 160cc Flex', 'Partida Elétrica', 'Excelente Autonomia'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=85',
    description: 'A motocicleta mais confiável e econômica do Brasil.',
  },
  {
    id: 'prod-capacete-04',
    name: 'Capacete Pro Tork Fechado',
    category: 'capacetes',
    priceDemonstrative: 'R$ 349,90',
    badge: 'Segurança',
    specs: ['Casco ABS Injetado', 'Viseira Cristal 2mm', 'Forro Confortável'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85',
    description: 'Proteção aerodinâmica e segurança certificada.',
  },
  {
    id: 'prod-pneu-05',
    name: 'Pneu 29x2.10',
    category: 'acessorios',
    priceDemonstrative: 'R$ 89,90',
    badge: 'Alta Durabilidade',
    specs: ['Borracha de Alta Tração', 'Excelente Rolagem', 'Aro 29'],
    imageUrl: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?auto=format&fit=crop&w=800&q=85',
    description: 'Cravos direcionais para tração e durabilidade.',
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 'prod-bike-06',
    name: 'Mountain Bike Aro 29 Shimano Deore 12V',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 3.890,00',
    badge: 'Alta Performance',
    specs: ['Grupo Shimano Deore 12V', 'Suspensão a Ar com Trava', 'Freios Hidráulicos'],
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85',
    description: 'Bicicleta de trilha avançada com altíssima rigidez e transmissão precisa.',
  },
  {
    id: 'prod-bike-07',
    name: 'Bicicleta Speed Carbon Road Shimano 105',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 7.450,00',
    badge: 'Velocidade',
    specs: ['Quadro Carbono T700', 'Grupo Shimano 105 R7000', 'Rodas Aero 38mm'],
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85',
    description: 'Projetada para asfalto e competições, peso reduzido e aerodinâmica máxima.',
  },
  {
    id: 'prod-moto-09',
    name: 'Street Sport 250cc Duas Rodas Edition',
    category: 'motos',
    priceDemonstrative: 'R$ 19.800,00',
    badge: 'Destaque',
    specs: ['Motor 250cc 4T Injeção Eletrônica', 'Freios ABS Duplo Canal', 'Painel Blackout Digital'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=85',
    description: 'Design esportivo com postura agressiva e pilotagem dinâmica.',
  },
  {
    id: 'prod-moto-10',
    name: 'Moto Trail Adventure 300cc',
    category: 'motos',
    priceDemonstrative: 'R$ 24.900,00',
    badge: 'Todo Terreno',
    specs: ['Suspensão Longo Curso', 'Tanque 14L', 'Iluminação Full LED'],
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=85',
    description: 'Domine qualquer trajeto, terra ou asfalto com conforto e robustez.',
  },
  {
    id: 'prod-ebike-12',
    name: 'E-Bike Trail Pro Carbon 500W',
    category: 'eletricas',
    priceDemonstrative: 'R$ 9.890,00',
    badge: 'Premium',
    specs: ['Motor Central 500W Torque 85Nm', 'Bateria 15Ah 540Wh', 'Autonomia até 80km'],
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85',
    description: 'Tecnologia de ponta com assistência de pedal inteligente para subidas íngremes.',
  },
  {
    id: 'prod-capacete-14',
    name: 'Capacete Aerodinâmico Carbon Series Fechado',
    category: 'capacetes',
    priceDemonstrative: 'R$ 680,00',
    badge: 'Fibra de Carbono',
    specs: ['Casco Tri-Composto', 'Viseira Anti-Risco com Pinlock', 'Ventilação Multiponto'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=85',
    description: 'Isolamento acústico superior para altas velocidades e máxima segurança.',
  },
  {
    id: 'prod-acessorio-16',
    name: 'Pneu Bicicleta Aro 29x2.25 Kevlar All-Terrain',
    category: 'acessorios',
    priceDemonstrative: 'R$ 189,00',
    badge: 'Kevlar Sem Arame',
    specs: ['Composto Dual 60 TPI', 'Compatível Tubeless Ready', 'Cravos de Alta Tração'],
    imageUrl: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?auto=format&fit=crop&w=800&q=85',
    description: 'Excelente aderência em curvas e frenagens seguras em cascalho ou terra.',
  },
  {
    id: 'prod-acessorio-17',
    name: 'Kit Ferramentas Completo para Bike & Moto',
    category: 'acessorios',
    priceDemonstrative: 'R$ 145,00',
    badge: 'Essencial',
    specs: ['Chaves Allen, Torx e Phillips', 'Extrator de Corrente Incluso', 'Estojo Resistente'],
    imageUrl: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85',
    description: 'Kit de socorro para manutenções rápidas em passeios ou na oficina.',
  },
];
