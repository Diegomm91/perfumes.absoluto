import React from 'react';
import './ProductDetail.css';

const Mohai: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/mohai.jpg" alt="Mohai" />
      </div>
      <div className="product-info-column">
        <h2>Mohai</h2>
        <p>
          Nuestro producto Mohai es una creación única que combina tradición
          y modernidad. Elaborado con ingredientes naturales y técnicas
          artesanales, ofrece una experiencia sensorial excepcional.
          Perfecto para quienes buscan algo diferente y especial en el
          mundo de los aromas y fragancias.
        </p>
        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Creación única y exclusiva</li>
            <li>Ingredientes naturales</li>
            <li>Técnicas artesanales</li>
            <li>Experiencia sensorial excepcional</li>
            <li>Diseño innovador</li>
            <li>Calidad premium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mohai; 