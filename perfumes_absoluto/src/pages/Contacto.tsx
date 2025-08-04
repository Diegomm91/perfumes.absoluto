import React from 'react';
import './Contacto.css';

const Contacto: React.FC = () => {
  return (
    <div className="contacto-page">
      <div className="contacto-container">
        <div className="contacto-header">
          <h1>Contacto</h1>
          <p>¿Tienes alguna pregunta? ¡No dudes en contactarnos!</p>
        </div>

        <div className="contacto-content">
          <div className="contacto-info">
            <h2>Información de Contacto</h2>
            
            <div className="contacto-item">
              <div className="contacto-icon">📱</div>
              <div className="contacto-details">
                <h3>WhatsApp</h3>
                <p>+54 9 11 1234-5678</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📧</div>
              <div className="contacto-details">
                <h3>Email</h3>
                <p>info@perfumesabsoluto.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📍</div>
              <div className="contacto-details">
                <h3>Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">🕒</div>
              <div className="contacto-details">
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="contacto-form">
            <h2>Envíanos un Mensaje</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <select id="asunto" name="asunto" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="pedido">Realizar pedido</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto; 