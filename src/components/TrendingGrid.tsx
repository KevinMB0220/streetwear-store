
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Estado Nueva. Color azul clásico.",
    price: "₡30.000",
    image: "/insta_item_1.jpg",
    soldOut: false
  },
  {
    id: 2,
    name: "Polo Ralph Lauren Retro",
    category: "camisetas",
    desc: "Talla M • Estado Excelente. Clásico bordado.",
    price: "₡15.000",
    image: "/insta_item_2.jpg",
    soldOut: true
  },
  {
    id: 3,
    name: "Polo Ralph Lauren Sport",
    category: "camisetas",
    desc: "Talla L • Estado Excelente. Blanco con azul.",
    price: "₡15.000",
    image: "/insta_item_3.jpg",
    soldOut: false
  },
  {
    id: 4,
    name: "Polo Ralph Lauren Striped",
    category: "camisetas",
    desc: "Talla M • Estado Excelente. Diseño de rayas.",
    price: "₡15.000",
    image: "/insta_item_4.jpg",
    soldOut: true
  },
  {
    id: 5,
    name: "Polo Ralph Lauren Red Logo",
    category: "camisetas",
    desc: "Talla M • Estado Excelente. Bordado rojo.",
    price: "₡15.000",
    image: "/insta_item_5.jpg",
    soldOut: true
  },
  {
    id: 6,
    name: "Campera Columbia Vintage",
    category: "abrigos",
    desc: "Talla M • Estado Excelente. Cortavientos retro.",
    price: "₡15.000",
    image: "/insta_item_6.jpg",
    soldOut: true
  },
  {
    id: 7,
    name: "Cortaviento Nike Retro",
    category: "abrigos",
    desc: "Talla L • Estado Bueno. Cortavientos ligero.",
    price: "₡10.000",
    image: "/insta_item_7_raw.jpg",
    soldOut: false
  },
  {
    id: 8,
    name: "Buzos Baggy Streetwear",
    category: "pantalones",
    desc: "Talla M • Estado Excelente. Buzos anchos.",
    price: "₡15.000",
    image: "/insta_item_9_raw.jpg",
    soldOut: false
  },
  {
    id: 9,
    name: "Fleece Columbia Retro",
    category: "abrigos",
    desc: "Talla L (Queda L) • Estado Excelente.",
    price: "₡8.000",
    image: "/insta_item_12_raw.jpg",
    soldOut: false
  }
];

const TrendingGrid = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = activeCategory === "todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="trending" style={{ padding: '6rem 0', backgroundColor: '#111111' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ margin: 0, textAlign: 'center' }}>PRENDAS <span className="text-accent">DISPONIBLES</span></h2>
        </div>

        {/* Category Filter Menu */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
          justifyContent: 'center'
        }}>
          {['todos', 'camisetas', 'abrigos', 'pantalones'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'btn-primary' : 'btn-outline'}
              style={{
                padding: '10px 24px',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px'
              }}
            >
              {cat === 'todos' ? 'Ver Todo' : cat}
            </button>
          ))}
        </div>
        
        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredProducts.map((prod) => (
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
                {prod.soldOut && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#ff3b30',
                    color: '#fff',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                    zIndex: 2,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(255, 59, 48, 0.4)'
                  }}>
                    VENDIDO
                  </div>
                )}
                
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    filter: prod.soldOut ? 'grayscale(40%)' : 'none',
                    opacity: prod.soldOut ? 0.75 : 1
                  }}
                  className="product-img"
                />
                
                {/* Hover Add to Cart Button */}
                <div className="add-to-cart-overlay" style={{
                  position: 'absolute',
                  bottom: prod.soldOut ? '0' : '-50px',
                  left: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                  transition: 'bottom 0.3s ease',
                  opacity: prod.soldOut ? 1 : undefined
                }}>
                  {prod.soldOut ? (
                    <button className="btn-outline" style={{ width: '90%', padding: '10px', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)', cursor: 'not-allowed' }} disabled>
                      AGOTADO
                    </button>
                  ) : (
                    <button className="btn-primary" style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '10px' }}>
                      <ShoppingCart size={18} /> PEDIR POR DM
                    </button>
                  )}
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{prod.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{prod.desc}</p>
                <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: prod.soldOut ? 'var(--text-secondary)' : 'var(--accent-color)' }}>
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
        /* Aesthetic dark vignette overlay to hide the floor */
        .img-container::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.95);
          pointer-events: none;
          transition: var(--transition);
          z-index: 1;
        }
        .img-container:hover::after {
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.7);
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
          z-index: 2;
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
