import React from 'react';
import './ProductDetail.css';

const DifusoresAmbiente: React.FC = () => {
  const aromas = [
    'Limon',
    'Naranja',
    'Naranja Pimienta',
    'Vainicoco',
    'Fresias',
    'Corona',
    'Ralph',
    'Lavanda',
    'Rosas con Jazmin',
    'Cedron',
    'Manzana con Canela',
    'Sandalo Clasico',
    'Coniglio Simil',
    'Tilo',
    'Durazno con Maracuya',
    'Verbena',
    'Blue Seduccion Simil',
    'Nagchampa',
    'Te Verde'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/difusores.jpg" alt="Imagen completa de Difusores de Ambiente" />
      </div>
      <div className="product-info-column">
        <h2>Difusores de Ambiente</h2>
        <p>
          Descubre nuestra exclusiva colección de difusores de ambiente de 100ml, 
          diseñados para transformar cualquier espacio con sus fragancias envolventes. 
          Son perfectos tanto para el hogar como para tu vehículo, y también pueden 
          usarse para recargar humidificadores eléctricos.
        </p>

        <div className="aroma-list-container">
          <h3>Aromas Disponibles:</h3>
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

export default DifusoresAmbiente; 