
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Disponible en excelente estado",
    price: "₡30.000",
    image: "/insta_item_1.jpg",
    soldOut: false
  },
  {
    id: 2,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_2.jpg",
    soldOut: true
  },
  {
    id: 3,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla L • Disponible en excelente estado",
    price: "₡15.000",
    image: "/insta_item_3.jpg",
    soldOut: false
  },
  {
    id: 4,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_4.jpg",
    soldOut: true
  },
  {
    id: 5,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_5.jpg",
    soldOut: true
  },
  {
    id: 6,
    "name": "Campera Columbia Vintage",
    "category": "abrigos",
    "desc": "Talla M • Vendido",
    "price": "₡15.000",
    "image": "/insta_item_6.jpg",
    "soldOut": true
  },
  {
    id: 7,
    name: "Cortaviento Nike Retro",
    category: "abrigos",
    desc: "Talla L • Disponible en excelente estado",
    "price": "₡10.000",
    image: "/insta_item_7.jpg",
    soldOut: false
  },
  {
    id: 8,
    name: "Camiseta Under Armour Sport",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_8.jpg",
    soldOut: true
  },
  {
    id: 9,
    name: "Buzos Baggy Streetwear",
    category: "pantalones",
    desc: "Talla M • Gris Disponible • Negro Agotado",
    price: "₡15.000",
    image: "/insta_item_9.jpg",
    soldOut: false
  },
  {
    id: 10,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_10.jpg",
    soldOut: true
  },
  {
    id: 11,
    name: "Polo Ralph Lauren Vintage",
    category: "camisetas",
    desc: "Talla M • Vendido",
    price: "₡15.000",
    image: "/insta_item_11.jpg",
    soldOut: true
  },
  {
    id: 12,
    name: "Fleece Columbia Retro",
    category: "abrigos",
    desc: "Talla L • Disponible en excelente estado",
    price: "₡8.000",
    image: "/insta_item_12.jpg",
    soldOut: false
  }
];

const TrendingGrid = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="img-container" style={{
                backgroundColor: '#121212', // Dark background to blend natural wood-floor edges
                height: '340px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'var(--transition)'
              }}>
                {/* Lookbook serial code label */}
                <div className="lookbook-badge" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '3px 8px',
                  fontSize: '0.65rem',
                  fontFamily: 'monospace',
                  letterSpacing: '1px',
                  fontWeight: 600,
                  borderRadius: '2px',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}>
                  8S // C-{(prod.id * 100 + 47).toString(16).toUpperCase()}
                </div>

                {prod.soldOut ? (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#e63946',
                    color: '#fff',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    borderRadius: '2px',
                    zIndex: 3,
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)',
                    letterSpacing: '1px'
                  }}>
                    VENDIDO
                  </div>
                ) : (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'var(--accent-color)',
                    color: '#000',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    borderRadius: '2px',
                    zIndex: 3,
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(212, 255, 0, 0.3)',
                    letterSpacing: '1px'
                  }}>
                    DISPONIBLE
                  </div>
                )}
                
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    filter: prod.soldOut ? 'grayscale(50%) contrast(90%)' : 'contrast(102%)',
                    opacity: prod.soldOut ? 0.65 : 1,
                    cursor: 'zoom-in'
                  }}
                  className="product-img"
                  onClick={() => setSelectedImage(prod.image)}
                />
                
                {/* Hover Add to Cart Button */}
                <div className="add-to-cart-overlay" style={{
                  position: 'absolute',
                  bottom: prod.soldOut ? '0' : '-60px',
                  left: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '12px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                  transition: 'bottom 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                  opacity: prod.soldOut ? 1 : undefined,
                  zIndex: 4
                }}>
                  {prod.soldOut ? (
                    <button className="btn-outline" style={{ width: '90%', padding: '10px', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.3)', cursor: 'not-allowed', fontSize: '0.8rem' }} disabled>
                      AGOTADO
                    </button>
                  ) : (
                    <a 
                      href="https://chat.whatsapp.com/HhsilmLjZcbBmQSe3uznOZ" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary" 
                      style={{ 
                        width: '90%', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: '8px', 
                        padding: '10px', 
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      <ShoppingCart size={16} /> PEDIR POR DM
                    </a>
                  )}
                </div>
              </div>
              
              <div style={{ padding: '0 5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="product-category" style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--accent-color)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    fontWeight: 600,
                    fontFamily: 'monospace'
                  }}>{prod.category}</span>
                  <span className="product-size" style={{ 
                    fontSize: '0.75rem', 
                    backgroundColor: 'rgba(255,255,255,0.06)', 
                    color: 'var(--text-secondary)', 
                    padding: '2px 6px',
                    borderRadius: '2px',
                    fontWeight: 600
                  }}>
                    <span className="desktop-size-label">TALLA </span>
                    {prod.desc.split('•')[0].replace('Talla', '').trim()}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: '#fff', letterSpacing: '0.5px' }}>{prod.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                  {prod.desc.includes('•') ? prod.desc.split('•').slice(1).join('•').trim() : prod.desc}
                </p>
                <div className="product-price" style={{ 
                  fontSize: '1.35rem', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 700, 
                  color: prod.soldOut ? 'var(--text-secondary)' : '#fff' 
                }}>
                  {prod.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .product-card {
          padding: 12px;
          border-radius: 6px;
          background-color: rgba(20, 20, 20, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.02);
          transition: var(--transition);
        }
        .product-card:hover {
          background-color: rgba(255, 255, 255, 0.04);
          border-color: rgba(212, 255, 0, 0.15);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          transform: translateY(-5px);
        }
        .img-container {
          border-radius: 4px;
        }
        /* Aesthetic dark vignette overlay to frame the natural flat-lay look */
        .img-container::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 45px rgba(0, 0, 0, 0.9), inset 0 0 15px rgba(0, 0, 0, 0.95);
          pointer-events: none;
          transition: var(--transition);
          z-index: 2;
        }
        .product-card:hover .img-container::after {
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.7), inset 0 0 10px rgba(0, 0, 0, 0.85);
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
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
            gap: 1.2rem 0.6rem !important;
          }
          .img-container {
            height: 220px !important;
            margin-bottom: 0.6rem !important;
          }
          .product-card {
            padding: 8px !important;
            background-color: rgba(15, 15, 15, 0.8) !important;
            border-radius: 4px !important;
          }
          .product-card h3 {
            font-size: 0.9rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.2rem !important;
          }
          .product-card p {
            font-size: 0.7rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.4rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .product-price {
            font-size: 1.05rem !important;
          }
          .lookbook-badge {
            display: none !important;
          }
          .desktop-size-label {
            display: none !important;
          }
          .product-size {
            font-size: 0.7rem !important;
            padding: 2px 4px !important;
          }
          .product-category {
            font-size: 0.7rem !important;
            letter-spacing: 0.5px !important;
          }
          .add-to-cart-overlay {
            bottom: 0 !important;
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%) !important;
            padding: 6px !important;
          }
          .add-to-cart-overlay button {
            width: 100% !important;
            padding: 6px !important;
            font-size: 0.7rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {/* Lightbox zoom modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100vh',
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s ease'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: 'white',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 2001,
              transition: 'var(--transition)'
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Zoomed product view" 
            style={{
              maxWidth: '92%',
              maxHeight: '88vh',
              objectFit: 'contain',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default TrendingGrid;
