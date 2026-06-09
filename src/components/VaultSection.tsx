
import { ShieldCheck, Cpu } from 'lucide-react';

const VaultSection = () => {
  return (
    <section id="vault" style={{
      padding: '8rem 0',
      position: 'relative',
      backgroundColor: 'rgba(5, 5, 5, 0.9)',
      backdropFilter: 'blur(10px)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(212, 255, 0, 0.15)',
      borderBottom: '1px solid rgba(212, 255, 0, 0.15)'
    }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 255, 0, 0.08) 0%, transparent 70%)',
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
            backgroundColor: 'rgba(212, 255, 0, 0.1)',
            padding: '8px 24px',
            borderRadius: '30px',
            border: '1px solid rgba(212, 255, 0, 0.3)',
            marginBottom: '2rem',
            boxShadow: '0 0 15px rgba(212, 255, 0, 0.1)'
          }}>
            <ShieldCheck size={18} className="text-accent" />
            <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-color)', letterSpacing: '1px', fontSize: '0.9rem', textShadow: '0 0 8px rgba(212,255,0,0.5)' }}>
              EDICIÓN ULTRA EXCLUSIVA LIMITADA
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            LA <span className="text-accent">BÓVEDA</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px' }}>
            Acceso exclusivo a prendas de colección y colaboraciones agotadas. 
            Cada artículo de La Bóveda pasa por un riguroso proceso de verificación física para garantizar su absoluta autenticidad antes del envío.
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary">
              EXPLORAR DROPS PASADOS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VaultSection;
