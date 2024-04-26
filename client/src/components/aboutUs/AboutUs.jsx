import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs-content">
        <div className="left-content">
          <p className="title">acerca de nosotros</p>
          <h4 className="subtitle">
            Buscamos disminuir los niveles de deserción estudiantil en Colombia
          </h4>
          <p className="paragraph">
            Siendo esta nuestra manera de aportar al logro de un país con más
            educación y consecuentemente con más desarrollo.
          </p>
        </div>
        <div className="right-content">
          <p className="right-paragraph">
            Identificar estudiantes con vulnerabilidades y acompañarlos
            integralmente, a{" "}
            <strong className="right-content-strong">
              través de un ecosistema de estrategias
            </strong>
          </p>
          <a className="right-content-link" href="/AboutUs.jsx">
            Conoce más aquí
            <img src="https://www.fundacionantivirusparaladesercion.org/assets/img/icons/arrow.svg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;