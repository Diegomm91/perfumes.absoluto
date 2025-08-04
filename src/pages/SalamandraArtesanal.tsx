import React from 'react';
import './ProductDetail.css';

const SalamandraArtesanal: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/salamndra_artesanal.jpg" alt="Salamandra Artesanal" />
      </div>
      <div className="product-info-column">
        <h2>Salamandra Artesanal</h2>
        <p>
          Nuestra salamandra artesanal está elaborada con técnicas tradicionales y
          materiales de alta calidad. Perfecta para crear un ambiente cálido y
          acogedor, combina funcionalidad con un diseño elegante que se adapta
          a cualquier decoración. Ideal para espacios donde quieras agregar un
          toque de calidez y estilo.
        </p>
        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Elaboración artesanal tradicional</li>
            <li>Materiales de alta calidad</li>
            <li>Diseño elegante y funcional</li>
            <li>Perfecta para decoración</li>
            <li>Ambiente cálido y acogedor</li>
            <li>Durabilidad garantizada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalamandraArtesanal; 