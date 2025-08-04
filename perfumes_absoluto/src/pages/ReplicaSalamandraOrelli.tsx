import React from 'react';
import './ProductDetail.css';

const ReplicaSalamandraOrelli: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-column">
        <img src="/imagenes_absoluto/replica_salamandra_orelli.jpg" alt="Réplica Salamandra Orelli" />
      </div>
      <div className="product-info-column">
        <h2>Réplica Salamandra Orelli</h2>
        <p>
          Nuestra réplica de la salamandra Orelli es una reproducción fiel del
          diseño original, elaborada con atención al detalle y materiales de
          calidad. Perfecta para quienes aprecian el diseño clásico y quieren
          agregar un elemento de elegancia a su espacio. Combina funcionalidad
          con un valor estético excepcional.
        </p>
        <div className="aroma-list-container">
          <h3>Características:</h3>
          <ul className="aroma-list">
            <li>Réplica fiel del diseño original</li>
            <li>Atención al detalle</li>
            <li>Materiales de calidad</li>
            <li>Diseño clásico y elegante</li>
            <li>Valor estético excepcional</li>
            <li>Funcionalidad garantizada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReplicaSalamandraOrelli; 