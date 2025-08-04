import React from 'react';
import './ProductDetail.css';

const PortaSahumerios: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/porta_sahumerios.jpg" alt="Porta Sahumerios" />
      </div>
      <div className="product-info-column">
        <h2>Porta Sahumerios</h2>
        <p>
          Nuestro porta sahumerios elegante y funcional está diseñado para sostener 
          y organizar tus sahumerios de manera segura y estética. Fabricado con 
          materiales duraderos y un diseño que combina funcionalidad con elegancia. 
          Perfecto para mantener tus sahumerios organizados y listos para usar.
        </p>

        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Diseño elegante y funcional</li>
            <li>Materiales duraderos</li>
            <li>Organización segura de sahumerios</li>
            <li>Fácil de transportar</li>
            <li>Múltiples compartimentos</li>
            <li>Ideal para regalo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortaSahumerios; 