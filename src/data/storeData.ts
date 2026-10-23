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

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  // More Bicicletas
  {
    id: 'prod-bike-06',
    name: 'Mountain Bike Aro 29 Shimano Deore 12V',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 3.890,00',
    badge: 'Alta Performance',
    specs: ['Grupo Shimano Deore 12V', 'Suspensão a Ar com Trava', 'Freios Hidráulicos'],
    imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80',
    description: 'Bicicleta de trilha avançada com altíssima rigidez e transmissão precisa.',
  },
  {
    id: 'prod-bike-07',
    name: 'Bicicleta Speed Carbon Road Shimano 105',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 7.450,00',
    badge: 'Velocidade',
    specs: ['Quadro Carbono T700', 'Grupo Shimano 105 R7000', 'Rodas Aero 38mm'],
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80',
    description: 'Projetada para asfalto e competições, peso reduzido e aerodinâmica máxima.',
  },
  {
    id: 'prod-bike-08',
    name: 'Bicicleta Urbana Retro Vintage Passeio 7V',
    category: 'bicicletas',
    priceDemonstrative: 'R$ 1.150,00',
    badge: 'Urbana',
    specs: ['Quadro Aço Carbono', 'Cestinha Frontal e Bagageiro', 'Câmbio Shimano 7V'],
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80',
    description: 'Conforto e elegância para locomoção diária e finais de semana.',
  },

  // More Motos
  {
    id: 'prod-moto-09',
    name: 'Street Sport 250cc Duas Rodas Edition',
    category: 'motos',
    priceDemonstrative: 'R$ 19.800,00',
    badge: 'Destaque',
    specs: ['Motor 250cc 4T Injeção Eletrônica', 'Freios ABS Duplo Canal', 'Painel Blackout Digital'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    description: 'Design esportivo com postura agressiva e pilotagem dinâmica nas cidades e estradas.',
  },
  {
    id: 'prod-moto-10',
    name: 'Moto Trail Adventure 300cc',
    category: 'motos',
    priceDemonstrative: 'R$ 24.900,00',
    badge: 'Todo Terreno',
    specs: ['Suspensão Longo Curso', 'Tanque 14L', 'Iluminação Full LED'],
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    description: 'Domine qualquer trajeto, terra ou asfalto com conforto e robustez incomparáveis.',
  },
  {
    id: 'prod-moto-11',
    name: 'Scooter Automática 150cc Confort',
    category: 'motos',
    priceDemonstrative: 'R$ 13.900,00',
    badge: 'Praticidade',
    specs: ['Câmbio Automático CVT', 'Partida Keyless', 'Porta Capacete Sob o Banco'],
    imageUrl: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=600&q=80',
    description: 'A solução mais ágil e econômica para o trânsito do dia a dia.',
  },

  // More Elétricas
  {
    id: 'prod-ebike-12',
    name: 'E-Bike Trail Pro Carbon 500W',
    category: 'eletricas',
    priceDemonstrative: 'R$ 9.890,00',
    badge: 'Premium',
    specs: ['Motor Central 500W Torque 85Nm', 'Bateria 15Ah 540Wh', 'Autonomia até 80km'],
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80',
    description: 'Tecnologia de ponta com assistência de pedal inteligente para subidas íngremes.',
  },
  {
    id: 'prod-ebike-13',
    name: 'Bicicleta Elétrica Dobrável Urban Fold 250W',
    category: 'eletricas',
    priceDemonstrative: 'R$ 4.790,00',
    badge: 'Compacta',
    specs: ['Quadro Dobrável em 10 Segundos', 'Aro 20 Leve', 'Bateria Integrada Removível'],
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80',
    description: 'Ideal para guardar no porta-malas ou levar no transporte público.',
  },

  // More Capacetes
  {
    id: 'prod-capacete-14',
    name: 'Capacete Aerodinâmico Carbon Series Fechado',
    category: 'capacetes',
    priceDemonstrative: 'R$ 680,00',
    badge: 'Fibra de Carbono',
    specs: ['Casco Tri-Composto', 'Viseira Anti-Risco com Pinlock', 'Ventilação Multiponto'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    description: 'Isolamento acústico superior para altas velocidades e máxima segurança.',
  },
  {
    id: 'prod-capacete-15',
    name: 'Capacete Escamoteável Modular Robocop',
    category: 'capacetes',
    priceDemonstrative: 'R$ 520,00',
    badge: 'Modular',
    specs: ['Queixeira Rebatível 90°', 'Óculos Solar Interno Embutido', 'Engate Rápido Micrométrico'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    description: 'Versatilidade total para o dia a dia na cidade e viagens longas.',
  },

  // More Acessórios
  {
    id: 'prod-acessorio-16',
    name: 'Pneu Bicicleta Aro 29x2.25 Kevlar All-Terrain',
    category: 'acessorios',
    priceDemonstrative: 'R$ 189,00',
    badge: 'Kevlar Sem Arame',
    specs: ['Composto Dual 60 TPI', 'Compatível Tubeless Ready', 'Cravos de Alta Tração'],
    imageUrl: '/mockup-assets/prod-pneu.png',
    description: 'Excelente aderência em curvas e frenagens seguras em cascalho ou terra.',
  },
  {
    id: 'prod-acessorio-17',
    name: 'Kit Ferramentas Completo para Bike & Moto',
    category: 'acessorios',
    priceDemonstrative: 'R$ 145,00',
    badge: 'Essencial',
    specs: ['Chaves Allen, Torx e Phillips', 'Extrator de Corrente Incluso', 'Estojo Resistente'],
    imageUrl: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80',
    description: 'Kit de socorro para manutenções rápidas em passeios ou na oficina.',
  },
  {
    id: 'prod-acessorio-18',
    name: 'Luvas de Proteção Moto & Ciclismo Touchscreen',
    category: 'acessorios',
    priceDemonstrative: 'R$ 98,00',
    badge: 'Proteção',
    specs: ['Proteção Rígida nos Nós dos Dedos', 'Tecido Respirável Antiderrapante', 'Touch no Polegar e Indicador'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
    description: 'Conforto térmico, pegada firme no guidão e proteção contra impacto.',
  },
];
