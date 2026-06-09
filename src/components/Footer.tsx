

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#050505" stroke="var(--accent-color)" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="6.5" fill="var(--accent-color)" />
                <text x="16" y="20.5" fontFamily="var(--font-heading)" fontSize="12" fontWeight="900" fill="#000" textAnchor="middle">8</text>
              </svg>
              <h3 style={{ fontSize: '1.5rem', margin: 0, letterSpacing: '2px' }}>8STREET <span className="text-accent">CLUB</span></h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Tu thrift store de confianza en Costa Rica. Selección exclusiva de prendas vintage, retro tees, jerseys y ropa urbana curada.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.instagram.com/8streetclub___/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }} className="social-icon">IG</a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }} className="social-icon">X</a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }} className="social-icon">TK</a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '1.1rem' }}>SOPORTE</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" className="footer-link">Envíos y Entregas</a></li>
              <li><a href="#" className="footer-link">Devoluciones</a></li>
              <li><a href="#" className="footer-link">Guía de Tallas</a></li>
              <li><a href="#" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '1.1rem' }}>LEGAL</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#" className="footer-link">Términos de Servicio</a></li>
              <li><a href="#" className="footer-link">Política de Privacidad</a></li>
              <li><a href="#" className="footer-link">Condiciones de The Vault</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '1.1rem' }}>NEWSLETTER</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Únete al crew y entérate de los lanzamientos antes que nadie.
            </p>
            <div style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="TU EMAIL" 
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '10px 15px',
                  outline: 'none',
                  flex: 1,
                  fontFamily: 'var(--font-body)'
                }}
              />
              <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                UNIRSE
              </button>
            </div>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.8rem'
        }}>
          <p>&copy; 2026 8STREET CLUB. TODOS LOS DERECHOS RESERVADOS.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYPAL</span>
            <span>CRYPTO</span>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon:hover { color: var(--accent-color) !important; }
        .footer-link:hover { color: var(--accent-color); text-decoration: underline; }
      `}</style>
    </footer>
  );
};

export default Footer;
