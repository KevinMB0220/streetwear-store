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
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 6px var(--accent-glow))' }}>
              <circle cx="16" cy="16" r="14" fill="#050505" stroke="var(--accent-color)" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="6.5" fill="var(--accent-color)" />
              <text x="16" y="20.5" fontFamily="var(--font-heading)" fontSize="12" fontWeight="900" fill="#000" textAnchor="middle">8</text>
            </svg>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff' }}>
              8STREET<span className="text-accent">CLUB</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem' }} className="desktop-nav">
          <a href="#trending" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>LANZAMIENTOS</a>
          <a href="#categories" className="nav-link" style={{ fontWeight: 600, transition: 'var(--transition)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>COLECCIONES</a>
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          backgroundColor: 'rgba(5, 5, 5, 0.98)',
          backdropFilter: 'blur(15px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          borderBottom: '1px solid rgba(212, 255, 0, 0.15)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <a href="#trending" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 600 }} onClick={() => setMobileMenuOpen(false)}>LANZAMIENTOS</a>
          <a href="#categories" className="nav-link" style={{ fontSize: '1.5rem', fontWeight: 600 }} onClick={() => setMobileMenuOpen(false)}>COLECCIONES</a>
          <a href="#vault" className="nav-link text-accent" style={{ fontSize: '1.5rem', fontWeight: 600 }} onClick={() => setMobileMenuOpen(false)}>LA BÓVEDA</a>
        </div>
      )}

      <style>{`
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--accent-color);
          text-shadow: 0 0 10px var(--accent-glow);
        }
        .nav-link:hover::after {
          width: 100%;
          box-shadow: 0 0 8px var(--accent-glow);
        }
        .icon-btn:hover {
          color: var(--accent-color) !important;
          transform: translateY(-2px) scale(1.1);
          filter: drop-shadow(0 0 8px var(--accent-glow));
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
