import { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'var(--transition)',
        backgroundColor: scrolled ? 'rgba(13, 13, 13, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        padding: '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ flex: 1 }}>
          <a href="#" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '2px' }}>
            URBAN <span className="text-accent">'26</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          <a href="#drops" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)' }}>LANZAMIENTOS</a>
          <a href="#kicks" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)' }}>SNEAKERS</a>
          <a href="#apparel" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)' }}>APPAREL</a>
          <a href="#accessories" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)' }}>ACCESORIOS</a>
          <a href="#vault" className="nav-link text-accent" style={{ fontWeight: 600, transition: 'var(--transition)' }}>LA BÓVEDA</a>
        </nav>

        {/* Icons */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
          <button style={{ background: 'transparent', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="icon-btn">
            <Search size={22} />
          </button>
          <button style={{ background: 'transparent', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="icon-btn">
            <User size={22} />
          </button>
          <button style={{ background: 'transparent', color: 'var(--text-primary)', transition: 'var(--transition)', position: 'relative' }} className="icon-btn">
            <ShoppingBag size={22} />
            <span style={{
              position: 'absolute', top: '-5px', right: '-8px',
              backgroundColor: 'var(--accent-color)', color: '#000',
              fontSize: '0.7rem', fontWeight: 700, borderRadius: '50%',
              width: '18px', height: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>2</span>
          </button>
          
          <button 
            className="mobile-menu-btn" 
            style={{ display: 'none', background: 'transparent', color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: var(--accent-color);
        }
        .icon-btn:hover {
          color: var(--accent-color) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
