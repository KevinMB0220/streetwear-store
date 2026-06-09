
import { ArrowRight, Flame, Shield, Crosshair } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'OUTERWEAR & JACKETS',
    image: '/apparel_cat_generated.png', // Fallback
    span: 1,
    icon: <Flame size={24} />
  },
  {
    id: 2,
    title: 'APPAREL & OVERSIZE',
    image: '/bomber_cat_generated.png',
    span: 1,
    icon: <Crosshair size={24} />
  },
  {
    id: 3,
    title: 'ACCESORIOS TÁCTICOS',
    image: '/accessories_cat_generated.png',
    span: 1,
    icon: <Shield size={24} />
  }
];

const CategoryCards = () => {
  return (
    <section id="categories" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">EXPLORA LA <span className="text-accent">COLECCIÓN</span></h2>
        
        <div className="categories-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {categories.map((cat) => (
            <div key={cat.id} className="category-card" style={{
              position: 'relative',
              height: '400px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: 'var(--surface-color)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div className="card-bg" style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `url(${cat.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.5s ease',
                opacity: 0.7
              }} />
              
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%)'
              }} />

              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'var(--accent-color)',
                filter: 'drop-shadow(0 0 8px rgba(212, 255, 0, 0.6))',
                zIndex: 2
              }}>
                {cat.icon}
              </div>

              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                zIndex: 2
              }}>
                <h3 style={{ fontSize: '1.8rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                  {cat.title}
                </h3>
                <div className="arrow-icon" style={{
                  backgroundColor: 'var(--accent-color)',
                  color: '#000',
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'var(--transition)',
                  borderRadius: '50%'
                }}>
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .category-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          transition: var(--transition);
          z-index: 3;
          pointer-events: none;
        }
        .category-card:hover::after {
          border-color: var(--accent-color);
          box-shadow: inset 0 0 20px var(--accent-glow);
        }
        .category-card:hover .card-bg {
          transform: scale(1.08);
          opacity: 0.9;
        }
        .category-card:hover .arrow-icon {
          transform: translateX(5px) scale(1.1);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        @media (max-width: 500px) {
          .categories-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
            margin-top: 1.5rem !important;
          }
          .category-card {
            height: 250px !important;
          }
          .category-card h3 {
            font-size: 1.3rem !important;
          }
          .category-card .arrow-icon {
            padding: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryCards;
