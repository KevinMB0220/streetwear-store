
import { ShieldCheck, Cpu } from 'lucide-react';

const VaultSection = () => {
  return (
    <section id="vault" style={{
      padding: '8rem 0',
      position: 'relative',
      backgroundColor: '#050505',
      overflow: 'hidden',
      borderTop: '1px solid rgba(57, 255, 20, 0.2)',
      borderBottom: '1px solid rgba(57, 255, 20, 0.2)'
    }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(57, 255, 20, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(57, 255, 20, 0.1)',
            padding: '8px 20px',
            borderRadius: '30px',
            border: '1px solid rgba(57, 255, 20, 0.3)',
            marginBottom: '2rem'
          }}>
            <ShieldCheck size={18} className="text-accent" />
            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-color)', letterSpacing: '1px', fontSize: '0.9rem' }}>
              AUTENTICIDAD VERIFICADA ON-CHAIN
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            LA <span className="text-accent">BÓVEDA</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
            Acceso exclusivo a ediciones ultra-limitadas y colaboraciones especiales. 
            Cada pieza en La Bóveda incluye un tag NFC para verificar su procedencia y garantizar su exclusividad.
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={20} />
              VERIFICAR MI PIEZA
            </button>
            <button className="btn-outline">
              EXPLORAR DROPS PASADOS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VaultSection;
