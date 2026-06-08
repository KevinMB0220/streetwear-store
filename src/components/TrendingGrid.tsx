
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Hoodie 'Midnight'",
    desc: "Algodón pesado, corte oversize.",
    price: "$65.00",
    image: "/apparel_cat_generated.png"
  },
  {
    id: 2,
    name: "Sneakers 'Retro X'",
    desc: "Edición limitada, suela de aire.",
    price: "$120.00",
    image: "/sneakers_cat_generated.png"
  },
  {
    id: 3,
    name: "Pantalón Cargo Táctico",
    desc: "Múltiples bolsillos, ajuste técnico.",
    price: "$55.00",
    image: "/product_cargo_generated.png"
  },
  {
    id: 4,
    name: "Tech Vest 'Urban'",
    desc: "Chaleco utilitario, repelente al agua.",
    price: "$85.00",
    image: "/accessories_cat_generated.png"
  }
];

const TrendingGrid = () => {
  return (
    <section id="trending" style={{ padding: '6rem 0', backgroundColor: '#111111' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>TRENDING <span className="text-accent">NOW</span></h2>
          <a href="#" className="text-accent" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '1px', fontSize: '1.1rem', textDecoration: 'underline' }}>VER TODO</a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2.5rem'
        }}>
          {products.map((prod) => (
            <div key={prod.id} className="product-card">
              <div style={{
                backgroundColor: 'var(--surface-color)',
                height: '320px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="product-img"
                />
                
                {/* Hover Add to Cart Button */}
                <div className="add-to-cart-overlay" style={{
                  position: 'absolute',
                  bottom: '-50px',
                  left: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                  transition: 'bottom 0.3s ease'
                }}>
                  <button className="btn-primary" style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <ShoppingCart size={18} /> AÑADIR
                  </button>
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{prod.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{prod.desc}</p>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-color)' }}>
                  {prod.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        .product-card:hover .add-to-cart-overlay {
          bottom: 0;
        }
      `}</style>
    </section>
  );
};

export default TrendingGrid;
