
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryCards from './components/CategoryCards';
import TrendingGrid from './components/TrendingGrid';
import VaultSection from './components/VaultSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CategoryCards />
      <TrendingGrid />
      <VaultSection />
      <Footer />
    </div>
  );
}

export default App;
