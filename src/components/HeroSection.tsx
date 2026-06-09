

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image / Video overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#050505'
      }}>
        <img 
          src="/hero_bg_premium.png" 
          alt="Streetwear urban style lookbook"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45,
            filter: 'grayscale(15%) contrast(110%)'
          }}
        />
        {/* Analog scanlines overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.35) 50%)',
          backgroundSize: '100% 4px',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.4
        }}></div>
        {/* Cyberpunk dot-matrix grid overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'radial-gradient(rgba(212, 255, 0, 0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.6
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.95) 100%)',
          zIndex: 2
        }}></div>
      </div>

      {/* Content */}
      <div className="container hero-container">
        <h1 className="hero-title">
          8STREET CLUB.<br/>
          VINTAGE & <span className="text-accent" style={{ textShadow: '0 0 25px rgba(212,255,0,0.6)' }}>THRIFT STORE</span>.
        </h1>
        <p className="hero-desc">
          Curaduría exclusiva de prendas de segunda mano, camisetas retro y chaquetas de colección en Costa Rica. Viste con piezas únicas cargadas de historia.
        </p>
        
        <a href="#trending" className="btn-primary hero-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          [ VER DROPS VINTAGE ]
        </a>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-container {
          text-align: center;
          z-index: 10;
          padding-top: 50px;
        }
        .hero-title {
          font-size: clamp(3rem, 7vw, 6.2rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
          letter-spacing: 3px;
        }
        .hero-desc {
          font-size: 1.2rem;
          color: var(--text-primary);
          max-width: 650px;
          margin: 0 auto 3rem auto;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
          background-color: rgba(5,5,5,0.45);
          padding: 15px 25px;
          border-radius: 8px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.06);
          line-height: 1.5;
        }
        .hero-btn {
          font-size: 1.25rem;
          padding: 14px 36px;
          letter-spacing: 2px;
        }

        @media (max-width: 500px) {
          .hero-section {
            height: auto;
            min-height: 100dvh;
            padding: 90px 0 40px 0;
            display: flex;
            align-items: center;
          }
          .hero-container {
            padding-top: 0;
          }
          .hero-title {
            font-size: 2.1rem;
            letter-spacing: 1.5px;
            margin-bottom: 1rem;
          }
          .hero-desc {
            font-size: 0.9rem;
            padding: 12px 16px;
            margin-bottom: 2rem;
            line-height: 1.4;
          }
          .hero-btn {
            font-size: 0.95rem;
            padding: 12px 24px;
            letter-spacing: 1px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
