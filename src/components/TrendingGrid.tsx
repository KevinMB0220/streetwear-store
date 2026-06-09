
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Camiseta Vintage 'Adventure'",
    desc: "Algodón lavado, desgaste natural, año 1994.",
    price: "$35.00",
    image: "/vintage_tee.png"
  },
  {
    id: 2,
    name: "Chaqueta Racing Vintage",
    desc: "Chaqueta tipo Nascar con parches bordados retro.",
    price: "$85.00",
    image: "/racing_jacket.png"
  },
  {
    id: 3,
    name: "Jersey Retro 'Holsten'",
    desc: "Jersey de fútbol clásico de los 90s, cuello polo.",
    price: "$50.00",
    image: "/retro_jersey.png"
  },
  {
    id: 4,
    name: "Pantalón Cargo Carhartt",
    desc: "Lona gruesa desgastada, corte baggy clásico.",
    price: "$60.00",
    image: "/cargo_pants.png"
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
        
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2.5rem'
        }}>
          {products.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="img-container" style={{
                backgroundColor: 'var(--surface-color)',
                height: '320px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'var(--transition)'
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
        .product-card {
          padding: 10px;
          border-radius: 8px;
          transition: var(--transition);
        }
        .product-card:hover {
          background-color: rgba(255, 255, 255, 0.03);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transform: translateY(-5px);
        }
        .img-container {
          border-radius: 4px;
        }
        .product-card:hover .product-img {
          transform: scale(1.08);
        }
        .product-card:hover .add-to-cart-overlay {
          bottom: 0;
          opacity: 1;
        }
        .add-to-cart-overlay {
          opacity: 0;
        }

        @media (max-width: 500px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem 0.8rem !important;
          }
          .img-container {
            height: 200px !important;
            margin-bottom: 0.8rem !important;
          }
          .product-card {
            padding: 5px !important;
          }
          .product-card h3 {
            font-size: 0.95rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.2rem !important;
          }
          .product-card p {
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.4rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .product-card div {
            font-size: 0.95rem !important;
          }
          .add-to-cart-overlay {
            bottom: 0 !important;
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%) !important;
            padding: 6px !important;
          }
          .add-to-cart-overlay button {
            width: 100% !important;
            padding: 6px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TrendingGrid;
