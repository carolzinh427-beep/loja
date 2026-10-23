import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanners } from './components/PromoBanners';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('inicio');

  const handleSelectCategory = (catKey: string) => {
    setSelectedCategory(catKey);
    if (catKey !== 'inicio') {
      const destElement = document.getElementById('destaques');
      if (destElement) {
        destElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreClick = () => {
    const destElement = document.getElementById('categorias');
    if (destElement) {
      destElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 selection:bg-[#FFCC00] selection:text-black">
      {/* Top Header with Nav Tabs matching mockup */}
      <Header
        onSearchClick={() => setSearchOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Principal */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 2. Categorias Visuais (5 cards horizontais) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Destaques da Loja (5 cards de produtos) */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onClearCategoryFilter={() => setSelectedCategory('inicio')}
        />

        {/* 4. Banners Promocionais (Bicicletas & Motos) */}
        <PromoBanners />

        {/* 5. Experiência e Confiança (4 pilares) */}
        <TrustBadges />
      </main>

      {/* 6. Rodapé */}
      <Footer />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default App;
