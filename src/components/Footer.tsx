

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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>URBAN <span className="text-accent">'26</span></h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Redefiniendo el streetwear con materiales premium y cortes experimentales.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }} className="social-icon">IG</a>
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
          <p>&copy; 2026 URBAN STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
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
