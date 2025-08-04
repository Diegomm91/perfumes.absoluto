import React from 'react';
import './ProductDetail.css';

const BalsamosNaturales: React.FC = () => {
  const aromas = [
    'Lavanda',
    'Menta',
    'Eucalipto',
    'Romero',
    'Sándalo',
    'Vainilla',
    'Coco',
    'Almendras',
    'Rosa',
    'Jazmín'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/balsamos_naturales.jpg" alt="Bálsamos Naturales" />
      </div>
      <div className="product-info-column">
        <h2>Bálsamos Naturales</h2>
        <p>
          Nuestros bálsamos naturales están elaborados con ingredientes 100% naturales 
          y aceites esenciales puros. Perfectos para hidratar y nutrir la piel, 
          proporcionando una sensación de bienestar y relajación. Ideales para masajes, 
          cuidado de la piel y aromaterapia.
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

export default BalsamosNaturales; 