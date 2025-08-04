import React from 'react';
import './ProductDetail.css';

const PerfumesTextiles: React.FC = () => {
  const aromas = [
    'Limón',
    'Vainilla Coco',
    'Ariel (notas del jabón en polvo con suavizante Vívere)',
    'Hugo Boss (perfume de hombre notas cítricas)',
    'Ralph (notas florales perfume de mujer)',
    'Kosiuko (perfume de la marca base ananá)',
    'Coniglio (perfume infantil)',
    'Nag Champa',
    'Wanama (notas de melón fresco)',
    'Flores de Tilo',
    'Maria Cher (nro 19 notas cítricas)',
    'Blue Seduction (perfume de Antonio Banderas)',
    'OUD ROSAS (madera con rosas) símil Dolores Barreiro',
    'Ángel (perfume de la marca de Thierry Mugler)',
    'Flower símil perfume de Kenzo'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/perfumes_textiles_spray.jpg" alt="Imagen completa de Perfumes Textiles y Spray" />
      </div>
      <div className="product-info-column">
        <h2>Perfumes Textiles y Spray</h2>
        <p>
          Nuestros perfumes textiles y sprays son la solución ideal para refrescar 
          y aromatizar tus telas, ropa y espacios con un solo rocío. Disfruta de 
          fragancias duraderas que transforman el ambiente y dejan una sensación 
          de limpieza y frescura. Perfectos para cortinas, ropa de cama, sofás y 
          cualquier tejido que desees revitalizar.
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

export default PerfumesTextiles; 