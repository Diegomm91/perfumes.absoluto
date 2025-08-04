import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bienvenidos a Perfumes Absoluto</h1>
          <p>Descubre nuestra exclusiva colección de perfumes, difusores y aromas naturales</p>
          <Link to="/productos" className="cta-button">
            Ver Productos
          </Link>
        </div>
      </div>

      <div className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="/imagenes_absoluto/difusores.jpg" alt="Difusores de Ambiente" />
            <h3>Difusores de Ambiente</h3>
            <p>Fragancias envolventes para transformar cualquier espacio</p>
            <Link to="/difusores-ambiente" className="product-link">Ver más</Link>
          </div>

          <div className="product-card">
            <img src="/imagenes_absoluto/difusotes_auto.jpg" alt="Difusores para Vehículos" />
            <h3>Difusores para Vehículos</h3>
            <p>Mantén tu auto con un aroma fresco y agradable</p>
            <Link to="/difusores-vehiculos" className="product-link">Ver más</Link>
          </div>

          <div className="product-card">
            <img src="/imagenes_absoluto/perfumes_textiles_spray.jpg" alt="Perfumes Textiles" />
            <h3>Perfumes Textiles y Spray</h3>
            <p>Refresca y aromatiza tus telas con un solo rocío</p>
            <Link to="/perfumes-textiles" className="product-link">Ver más</Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>Sobre Nosotros</h2>
          <p>
            En Perfumes Absoluto nos especializamos en ofrecer productos de alta calidad 
            para crear ambientes únicos y experiencias sensoriales inolvidables. 
            Nuestros productos están diseñados para transformar cualquier espacio 
            con fragancias naturales y duraderas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 