import React from 'react';
import './ProductDetail.css';

const PerfumesImitaciones: React.FC = () => {
  const aromas = [
    'Chanel N°5', 'Dior J\'adore', 'Marc Jacobs Daisy', 'Viktor&Rolf Flowerbomb',
    'Yves Saint Laurent Black Opium', 'Tom Ford Black Orchid', 'Jo Malone Wood Sage & Sea Salt',
    'Byredo Gypsy Water', 'Le Labo Santal 33', 'Maison Margiela Replica Jazz Club'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/perfumes_imitaciones.jpg" alt="Perfumes Imitaciones" />
      </div>
      <div className="product-info-column">
        <h2>Perfumes Imitaciones</h2>
        <p>
          Nuestra colección de perfumes imitaciones ofrece fragancias inspiradas
          en las mejores marcas del mundo a precios accesibles. Cada perfume
          está cuidadosamente elaborado para capturar la esencia de las fragancias
          originales, permitiéndote disfrutar de aromas de lujo sin el precio
          de lujo.
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

export default PerfumesImitaciones; 