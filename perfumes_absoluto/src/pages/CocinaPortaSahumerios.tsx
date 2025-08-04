import React from 'react';
import './ProductDetail.css';

const CocinaPortaSahumerios: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/cocina_porta_sahumerios.jpg" alt="Cocina Porta Sahumerios" />
      </div>
      <div className="product-info-column">
        <h2>Cocina Porta Sahumerios</h2>
        <p>
          Nuestra cocina porta sahumerios es una solución práctica y elegante para
          organizar y almacenar tus sahumerios. Diseñada con múltiples compartimentos,
          te permite mantener tus aromas organizados y fácilmente accesibles.
          Perfecta para cualquier espacio donde quieras tener tus sahumerios ordenados.
        </p>
        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Múltiples compartimentos organizados</li>
            <li>Diseño compacto y funcional</li>
            <li>Materiales duraderos</li>
            <li>Fácil de transportar</li>
            <li>Ideal para regalo</li>
            <li>Mantiene los sahumerios protegidos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocinaPortaSahumerios; 