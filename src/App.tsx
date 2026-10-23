import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanners } from './components/PromoBanners';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from './data/storeData';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const handleSelectCategory = (catKey: string) => {
    setSelectedCategory(catKey);
    const destElement = document.getElementById('destaques');
    if (destElement) {
      destElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const destElement = document.getElementById('categorias');
    if (destElement) {
      destElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 selection:bg-[#FFCC00] selection:text-black">
      {/* Top Header */}
      <Header onSearchClick={() => setSearchOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Principal */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 2. Categorias Visuais (5 cards) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Destaques da Loja (5 cards de produtos demonstrativos) */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onClearCategoryFilter={() => setSelectedCategory(undefined)}
        />

        {/* 4. Banners Promocionais (Bicicletas Azul & Motos Vermelho) */}
        <PromoBanners />

        {/* 5. Experiência e Confiança (Faixa com 4 pilares) */}
        <TrustBadges />
      </main>

      {/* 6. Rodapé */}
      <Footer />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Casa das Bicicletas Bifão e gostaria de atendimento.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#FFCC00] hover:bg-[#E5B800] text-black p-3.5 sm:p-4 rounded-full shadow-2xl shadow-[#FFCC00]/30 hover:scale-108 transition-all duration-200 border-2 border-black flex items-center justify-center group"
        title="Fale conosco no WhatsApp"
        aria-label="Falar conosco no WhatsApp"
      >
        <Phone className="w-6 h-6 fill-black" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-display font-extrabold text-sm uppercase px-0 group-hover:px-2">
          Atendimento Bifão
        </span>
      </a>
    </div>
  );
}

export default App;
