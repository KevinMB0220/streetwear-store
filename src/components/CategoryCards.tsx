
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'KICKS & SNEAKERS',
    image: '/sneakers_cat_generated.png', // Fallback to placeholder if missing
    span: 1
  },
  {
    id: 2,
    title: 'APPAREL & OVERSIZE',
    image: '/apparel_cat_generated.png',
    span: 1
  },
  {
    id: 3,
    title: 'ACCESORIOS TÁCTICOS',
    image: '/accessories_cat_generated.png',
    span: 1
  }
];

const CategoryCards = () => {
  return (
    <section id="categories" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">EXPLORA LA <span className="text-accent">COLECCIÓN</span></h2>
        
        <div style={{
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
                bottom: '30px',
                left: '30px',
                right: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
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
                  transition: 'var(--transition)'
                }}>
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .category-card:hover .card-bg {
          transform: scale(1.08);
          opacity: 0.9;
        }
        .category-card:hover .arrow-icon {
          transform: translateX(5px);
          box-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
        }
      `}</style>
    </section>
  );
};

export default CategoryCards;
