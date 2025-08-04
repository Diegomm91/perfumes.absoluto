import React from 'react';
import './ProductDetail.css';

const SahumeriosTibetanos: React.FC = () => {
  const aromas = [
    'Sándalo Tibetano',
    'Loto',
    'Jazmín Tibetano',
    'Rosa del Himalaya',
    'Cedro Tibetano',
    'Mirra Sagrada',
    'Incienso Tibetano',
    'Bergamota',
    'Vainilla Sagrada',
    'Sage Blanco'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/sahumeros_tibetanos.jpg" alt="Sahumerios Tibetanos" />
      </div>
      <div className="product-info-column">
        <h2>Sahumerios Tibetanos</h2>
        <p>
          Nuestros sahumerios tibetanos están elaborados siguiendo las tradiciones 
          milenarias del Tíbet, utilizando resinas sagradas y hierbas del Himalaya. 
          Perfectos para meditación, purificación espiritual y crear un ambiente 
          de paz y armonía. Cada sahumerio tiene propiedades específicas para 
          diferentes propósitos espirituales.
        </p>

        <div className="aroma-list-container">
          <h3>Fragancias Disponibles:</h3>
          <ul className="aroma-list">
            {aromas.map((aroma, index) => (
              <li key={index}>{aroma}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SahumeriosTibetanos; 