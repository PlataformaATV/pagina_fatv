import React from 'react';
import "./Footer.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

function Footer() {
  return (
    <footer>
      <div>
        <img src="" alt="" />
      </div>
      <div className="footer-content">
        <h2>Visítanos</h2>
        <p>Calle 79 sur # 50-165 - oficinas 301 y 401 La Estrella - Antioquia-colombia</p>
      </div>
      <div>
        <h2>Llámanos o escríbenos</h2>
        <p>contactenos@fundacionantivirinevvrnlrwfnvwvtrv..com</p>
        <p>WhatsApp/+573226367781</p>
      </div>
      <div>
        <h2>Nuestras redes sociales</h2>
      </div>
      <div style={{ order: 5 }}> {/* Cambia a un objeto de estilo */}
        <p>Antivirus para la desercion @ 2024 all rights reserved    política de protección de datos</p>
      </div>
      <div style={{ order: 6 }}> {/* Cambia a un objeto de estilo */}
        flecha
      </div>
    </footer>
  );
}

export default Footer;
