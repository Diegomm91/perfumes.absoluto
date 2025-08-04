import React from 'react';
import './ProductDetail.css';

const AceitesEsenciales: React.FC = () => {
  const aromas = [
    'Lavanda',
    'Eucalipto',
    'Menta',
    'Limón',
    'Naranja',
    'Tea Tree',
    'Romero',
    'Sándalo',
    'Jazmín',
    'Rosa',
    'Bergamota',
    'Ylang Ylang',
    'Geranio',
    'Manzanilla',
    'Cedro'
  ];

  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/aceites_esenciales.jpg" alt="Aceites Esenciales" />
      </div>
      <div className="product-info-column">
        <h2>Aceites Esenciales</h2>
        <p>
          Nuestros aceites esenciales son 100% naturales y puros, extraídos de plantas 
          y flores mediante procesos cuidadosos que preservan todas sus propiedades 
          terapéuticas. Ideales para aromaterapia, masajes, difusión y uso tópico 
          (diluidos). Cada aceite tiene beneficios únicos para el bienestar físico 
          y emocional.
        </p>

        <div className="aroma-list-container">
          <h3>Aceites Disponibles:</h3>
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

export default AceitesEsenciales; 