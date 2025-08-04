import React from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos: React.FC = () => {
  const productos = [
    {
      id: 'difusores-ambiente',
      nombre: 'Difusores de Ambiente',
      imagen: '/imagenes_absoluto/difusores.jpg',
      descripcion: 'Fragancias envolventes para transformar cualquier espacio',
      ruta: '/difusores-ambiente'
    },
    {
      id: 'difusores-vehiculos',
      nombre: 'Difusores para Vehículos',
      imagen: '/imagenes_absoluto/difusotes_auto.jpg',
      descripcion: 'Mantén tu auto con un aroma fresco y agradable',
      ruta: '/difusores-vehiculos'
    },
    {
      id: 'perfumes-textiles',
      nombre: 'Perfumes Textiles y Spray',
      imagen: '/imagenes_absoluto/perfumes_textiles_spray.jpg',
      descripcion: 'Refresca y aromatiza tus telas con un solo rocío',
      ruta: '/perfumes-textiles'
    },
    {
      id: 'aceites-esenciales',
      nombre: 'Aceites Esenciales',
      imagen: '/imagenes_absoluto/aceites_esenciales.jpg',
      descripcion: 'Aceites naturales para aromaterapia y bienestar',
      ruta: '/aceites-esenciales'
    },
    {
      id: 'balsamos-naturales',
      nombre: 'Bálsamos Naturales',
      imagen: '/imagenes_absoluto/balsamos_naturales.jpg',
      descripcion: 'Bálsamos naturales para el cuidado personal',
      ruta: '/balsamos-naturales'
    },
    {
      id: 'sahumerios-naturales',
      nombre: 'Sahumerios Naturales',
      imagen: '/imagenes_absoluto/sahumerios.jpg',
      descripcion: 'Sahumerios naturales para purificar el ambiente',
      ruta: '/sahumerios-naturales'
    },
    {
      id: 'sahumerios-tibetanos',
      nombre: 'Sahumerios Tibetanos',
      imagen: '/imagenes_absoluto/sahumeros_tibetanos.jpg',
      descripcion: 'Sahumerios tibetanos tradicionales',
      ruta: '/sahumerios-tibetanos'
    },
    {
      id: 'sahumador-ceramica',
      nombre: 'Sahumador de Cerámica',
      imagen: '/imagenes_absoluto/sahumador_ceramica.jpg',
      descripcion: 'Sahumador artesanal de cerámica',
      ruta: '/sahumador-ceramica'
    },
    {
      id: 'porta-sahumerios',
      nombre: 'Porta Sahumerios',
      imagen: '/imagenes_absoluto/porta_sahumerios.jpg',
      descripcion: 'Porta sahumerios elegante y funcional',
      ruta: '/porta-sahumerios'
    },
    {
      id: 'cocina-porta-sahumerios',
      nombre: 'Cocina Porta Sahumerios',
      imagen: '/imagenes_absoluto/cocina_porta_sahumerios.jpg',
      descripcion: 'Cocina porta sahumerios para uso doméstico',
      ruta: '/cocina-porta-sahumerios'
    },
    {
      id: 'salamandra-artesanal',
      nombre: 'Salamandra Artesanal',
      imagen: '/imagenes_absoluto/salamndra_artesanal.jpg',
      descripcion: 'Salamandra artesanal para sahumerios',
      ruta: '/salamandra-artesanal'
    },
    {
      id: 'replica-salamandra-orelli',
      nombre: 'Réplica Salamandra Orelli',
      imagen: '/imagenes_absoluto/replica_salamandra_orelli.jpg',
      descripcion: 'Réplica de salamandra Orelli',
      ruta: '/replica-salamandra-orelli'
    },
    {
      id: 'perfumes-imitaciones',
      nombre: 'Perfumes Imitaciones',
      imagen: '/imagenes_absoluto/perfumes_imitaciones.jpg',
      descripcion: 'Perfumes de imitación de alta calidad',
      ruta: '/perfumes-imitaciones'
    },
    {
      id: 'mohai',
      nombre: 'Mohai',
      imagen: '/imagenes_absoluto/mohai.jpg',
      descripcion: 'Productos Mohai para el cuidado personal',
      ruta: '/mohai'
    }
  ];

  return (
    <div className="productos-page">
      <div className="productos-header">
        <h1>Nuestros Productos</h1>
        <p>Descubre nuestra completa colección de perfumes, difusores y productos naturales</p>
      </div>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <Link to={producto.ruta} className="ver-producto-btn">
                Ver Producto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos; 