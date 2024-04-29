import React from 'react';
import "./Footer.css"; // Asegúrate de que la ruta del archivo CSS sea correcta
import logo from "../../../public/logo.png"

function Footer() {
  return (
    <footer >
      <div className='logo'>
        <img src={logo} alt="logo-footer" />
      </div>
      <div className="footer-visitanos">
        <h2>Visítanos</h2>
        <p>Calle 79 sur # 50-165 - oficinas 301 y 401 La Estrella - Antioquia-colombia</p>
      </div>
      <div className='footer-contacto'>
        <h2>Llámanos o escríbenos</h2>
        <p>contactenos@fundacionantivirinevvrnlrwfnvwvtrv.com</p>
        <p>WhatsApp/+573226367781</p>
      </div>
      <div className='footer-redes'>
        <h2>Nuestras redes sociales</h2>
        <box-icon name='facebook-circle' type='logo' color='#ffffff' ></box-icon>
        <box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon>
        <box-icon name='youtube' type='logo' color='#ffffff' ></box-icon>
        <box-icon name='tiktok' type='logo' color='#ffffff' ></box-icon>
        <box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon>
      </div>
      <div className='footer-copy'> {/* Cambia a un objeto de estilo */}
        <p>Antivirus para la desercion @ 2024 all rights reserved    política de protección de datos</p>
      </div>
      <div className='footer-redirecion'> {/* Cambia a un objeto de estilo */}
        flecha
      </div>
    </footer>
  );
}

export default Footer;
