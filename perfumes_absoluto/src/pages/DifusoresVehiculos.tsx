import React from 'react';
import './ProductDetail.css';

const DifusoresVehiculos: React.FC = () => {
  const aromas = [
    'Limón',
    'Naranja',
    'Naranja Pimienta',
    'Vainicoco',
    'Fresias',
    'Corona (perfume de vainilla)',
    'Ralph (perfume notas de flores blancas)',
    'Lavanda',
    'Rosas con Jazmín natural',
    'Cedrón',
    'Manzana con Canela',
    'Sándalo Clásico',
    'Coniglio Símil',
    'Tilo',
    'Durazno con Maracuyá',
    'Verbena',
    'Blue Seduction Símil',
    'Nag Champa',
    'Te Verde'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/difusotes_auto.jpg" alt="Imagen completa de Difusores para Vehículos" />
      </div>
      <div className="product-info-column">
        <h2>Difusores para Vehículos</h2>
        <p>
          Nuestros difusores para vehículos son la solución perfecta para mantener 
          tu auto con un aroma fresco y agradable en todo momento. Prácticos y fáciles 
          de usar, te permiten disfrutar de tus fragancias favoritas mientras viajas, 
          convirtiendo cada trayecto en una experiencia placentera. ¡Un toque de aroma 
          para tu camino!
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

export default DifusoresVehiculos; 