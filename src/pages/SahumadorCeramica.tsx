import React from 'react';
import './ProductDetail.css';

const SahumadorCeramica: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/sahumador_ceramica.jpg" alt="Sahumador de Cerámica" />
      </div>
      <div className="product-info-column">
        <h2>Sahumador de Cerámica</h2>
        <p>
          Nuestro sahumador de cerámica artesanal está elaborado con materiales 
          de alta calidad y técnicas tradicionales. Perfecto para quemar sahumerios, 
          resinas y hierbas aromáticas. Su diseño elegante y funcional lo convierte 
          en un elemento decorativo que también cumple una función práctica para 
          la purificación del ambiente y la aromaterapia.
        </p>

        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Cerámica artesanal de alta calidad</li>
            <li>Diseño elegante y funcional</li>
            <li>Ideal para sahumerios y resinas</li>
            <li>Perfecto para aromaterapia</li>
            <li>Elemento decorativo</li>
            <li>Fácil de limpiar y mantener</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SahumadorCeramica; 