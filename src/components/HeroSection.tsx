

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
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          REDEFINE LAS REGLAS.<br/>
          COLECCIÓN URBANA <span className="text-accent">'26</span>.
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)'
        }}>
          Estética cruda, materiales premium y diseños sin concesiones.
          Explora la nueva temporada y marca la diferencia en las calles.
        </p>
        
        <button className="btn-primary" style={{
          fontSize: '1.3rem',
          padding: '15px 40px',
          letterSpacing: '2px'
        }}>
          [ EXPLORAR EL DROP ]
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
