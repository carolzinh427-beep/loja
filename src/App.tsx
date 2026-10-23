import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { FullCatalog } from './components/FullCatalog';
import { PromoBanners } from './components/PromoBanners';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('inicio');
  const [showFullCatalog, setShowFullCatalog] = useState(false);

  const handleSelectCategory = (catKey: string) => {
    setSelectedCategory(catKey);
    if (catKey === 'inicio') {
      setShowFullCatalog(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowFullCatalog(true);
      setTimeout(() => {
        const destElement = document.getElementById('catalogo-completo');
        if (destElement) {
          destElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleExploreClick = () => {
    setShowFullCatalog(true);
    setTimeout(() => {
      const destElement = document.getElementById('catalogo-completo');
      if (destElement) {
        destElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleViewFullCatalog = () => {
    setShowFullCatalog(true);
    setTimeout(() => {
      const destElement = document.getElementById('catalogo-completo');
      if (destElement) {
        destElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleBackToFeatured = () => {
    setShowFullCatalog(false);
    setSelectedCategory('inicio');
    setTimeout(() => {
      const destElement = document.getElementById('destaques');
      if (destElement) {
        destElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
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
        {/* 1. Hero Principal (Com hotspot interativo funcional em EXPLORAR PRODUTOS) */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 2. Categorias Visuais (5 cards com cliques funcionais que filtram o catálogo) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Destaques da Loja (5 cards de produtos com botão Ver Todos funcional) */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onClearCategoryFilter={() => setSelectedCategory('inicio')}
          onViewFullCatalog={handleViewFullCatalog}
        />

        {/* 4. Catálogo Completo (Aberto via 'Ver Todos', abas de navegação ou cards) */}
        {showFullCatalog && (
          <FullCatalog
            initialCategory={selectedCategory}
            onBackToFeatured={handleBackToFeatured}
          />
        )}

        {/* 5. Banners Promocionais (Bicicletas & Motos com links WhatsApp) */}
        <PromoBanners />

        {/* 6. Experiência e Confiança (4 pilares com links funcionais) */}
        <TrustBadges />
      </main>

      {/* 7. Rodapé */}
      <Footer />

      {/* Search Modal Interativo */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

export default App;
