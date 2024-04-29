import React from 'react';
import './ContextData.css'; // Importa el archivo CSS

const ContextData = () => (
  <div className="context-data-container">
    <h1 className="context-data-title text-center font-bold text-2xl">Nuestro aporte en Colombia</h1>
    <div className="context-data-statistics">
      <div className="statistic">
        <h2 className="statistic-number">17,937</h2>
        <p className="statistic-description text-center">Estudiantes acompañados por la Fundación</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">17,159</h2>
        <p className="statistic-description text-center">Asesorías de orientación sociopedagógica y sociovocacional (ASP Y ASV)</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">455</h2>
        <p className="statistic-description text-center">Talleres grupales</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">2,862</h2>
        <p className="statistic-description text-center">Tutorías académicas</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">372</h2>
        <p className="statistic-description text-center">Tutores voluntarios vinculados</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">1,467</h2>
        <p className="statistic-description text-center">Talleres de Nivélate</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">81</h2>
        <p className="statistic-description text-center">Grupos de estudio</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">158</h2>
        <p className="statistic-description text-center">Estudiantes que reciben computador en préstamo o donación</p>
      </div>
    </div>
  </div>
);

export default ContextData;
