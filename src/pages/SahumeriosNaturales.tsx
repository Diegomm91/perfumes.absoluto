import React from 'react';
import './ProductDetail.css';

const SahumeriosNaturales: React.FC = () => {
  const aromas = [
    'Sándalo',
    'Lavanda',
    'Rosa',
    'Jazmín',
    'Cedro',
    'Palo Santo',
    'Sage',
    'Mirra',
    'Incienso',
    'Vainilla'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/sahumerios.jpg" alt="Sahumerios Naturales" />
      </div>
      <div className="product-info-column">
        <h2>Sahumerios Naturales</h2>
        <p>
          Nuestros sahumerios naturales están elaborados con resinas, hierbas y aceites 
          esenciales puros. Perfectos para purificar el ambiente, crear un espacio 
          sagrado y promover la relajación. Cada sahumerio tiene propiedades únicas 
          para limpiar energéticamente cualquier espacio.
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

export default SahumeriosNaturales; 