import React from 'react';
import './ContextData.css';

const ContextData = () => (
  <div className="context-data-container">
    <h1 className="mb-20 context-data-title text-5xl text-white text-center font-extrabold">Nuestro aporte en Colombia</h1>
    <div className="context-data-statistics">
      <div className="statistic">
        <h2 className="statistic-number">11,400</h2>
        <p className="statistic-description text-center">Estudiantes acompañados por la Fundación</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">19,641</h2>
        <p className="statistic-description text-center">Asesorías de orientación sociopedagógica y sociovocacional (ASP Y ASV)</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">715</h2>
        <p className="statistic-description text-center">Talleres grupales</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">4,605</h2>
        <p className="statistic-description text-center">Tutorías académicas</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">441</h2>
        <p className="statistic-description text-center">Tutores voluntarios vinculados</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">3,560</h2>
        <p className="statistic-description text-center">Talleres de Nivélate</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">129</h2>
        <p className="statistic-description text-center">Grupos de estudio</p>
      </div>
      <div className="statistic">
        <h2 className="statistic-number">221</h2>
        <p className="statistic-description text-center">Estudiantes que reciben computador en préstamo o donación</p>
      </div>
    </div>
  </div>
);

export default ContextData;
