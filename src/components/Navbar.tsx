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
        
        {/* Mobile Menu Button Container on the far left */}
        <div className="mobile-menu-btn-container" style={{ display: 'none', flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
          <button 
            className="mobile-menu-btn" 
            style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', padding: '8px', marginLeft: '-8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Logo */}
        <div className="logo-container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a href="#" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg className="logo-svg" width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 6px var(--accent-glow))' }}>
              <circle cx="16" cy="16" r="14" fill="#050505" stroke="var(--accent-color)" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="6.5" fill="var(--accent-color)" />
              <text x="16" y="20.5" fontFamily="var(--font-heading)" fontSize="12" fontWeight="900" fill="#000" textAnchor="middle">8</text>
            </svg>
            <span className="logo-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff' }}>
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
        <div className="icons-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
          <button style={{ background: 'transparent', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="icon-btn">
            <Search size={22} />
          </button>
          <button style={{ background: 'transparent', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="icon-btn text-user">
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
        </div>
      </div>

      {/* Slide-in Mobile Menu Sidebar Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Semi-transparent Backdrop with Blur */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 1100,
              animation: 'fadeIn 0.25s ease-out'
            }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Drawer container sliding in from the left */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '280px',
              maxWidth: '85vw',
              height: '100vh',
              backgroundColor: '#0a0a0a',
              borderRight: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '10px 0 30px rgba(0, 0, 0, 0.8)',
              zIndex: 1101,
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              animation: 'slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#050505" stroke="var(--accent-color)" strokeWidth="2.5" />
                  <circle cx="16" cy="16" r="6.5" fill="var(--accent-color)" />
                  <text x="16" y="20.5" fontFamily="var(--font-heading)" fontSize="12" fontWeight="900" fill="#000" textAnchor="middle">8</text>
                </svg>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>
                  8STREET<span className="text-accent">CLUB</span>
                </span>
              </div>
              
              {/* Close Button X inside drawer */}
              <button 
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={26} />
              </button>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <a href="#trending" className="nav-link" style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 'fit-content' }} onClick={() => setMobileMenuOpen(false)}>LANZAMIENTOS</a>
              <a href="#categories" className="nav-link" style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 'fit-content' }} onClick={() => setMobileMenuOpen(false)}>COLECCIONES</a>
              <a href="#vault" className="nav-link text-accent" style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', width: 'fit-content' }} onClick={() => setMobileMenuOpen(false)}>LA BÓVEDA</a>
            </div>

            {/* Bottom info inside sidebar */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Envíos a todo Costa Rica 🇨🇷
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Pagos vía SINPE Móvil & Tarjetas
              </div>
            </div>
          </div>
        </>
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
          .mobile-menu-btn-container { display: flex !important; }
          .logo-container {
            justify-content: center !important;
          }
        }
        @media (max-width: 500px) {
          .text-user {
            display: none !important;
          }
          .logo-svg {
            width: 25px !important;
            height: 25px !important;
          }
          .logo-text {
            font-size: 1.15rem !important;
            letter-spacing: 1px !important;
          }
          .logo-link {
            gap: 6px !important;
          }
          .icons-container {
            gap: 0.8rem !important;
          }
          .icon-btn svg {
            width: 19px !important;
            height: 19px !important;
          }
          .mobile-menu-btn svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
