

const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Image / Video overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#0d0d0d'
      }}>
        {/* Usando la imagen generada, puedes cambiar la ruta según corresponda */}
        <img 
          src="/hero_bg_generated.png" 
          alt="Streetwear urban style"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.9) 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          letterSpacing: '4px'
        }}>
          8STREET CLUB.<br/>
          VINTAGE & <span className="text-accent" style={{ textShadow: '0 0 25px rgba(212,255,0,0.6)' }}>THRIFT STORE</span>.
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-primary)',
          maxWidth: '650px',
          margin: '0 auto 3rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '15px 25px',
          borderRadius: '8px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          Curaduría exclusiva de prendas de segunda mano, camisetas retro y chaquetas de colección en Costa Rica. Viste con piezas únicas cargadas de historia.
        </p>
        
        <button className="btn-primary" style={{
          fontSize: '1.3rem',
          padding: '15px 40px',
          letterSpacing: '2px'
        }}>
          [ VER DROPS VINTAGE ]
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
