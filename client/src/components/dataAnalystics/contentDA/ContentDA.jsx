import './ContentDA.css';
function ContentDA() {
    return(
        <div className="content">
        <div className="content-info">
          <p className="title">Nuestro Modelo</p>
          <h4 className="subtitle">Analítica de Datos</h4>
          <p className="paragraph">
            El área de Analítica de Datos se basa en una solución integral y
            open-source para la permanencia estudiantil apoyada en la
            tecnología, donde se usan el Machine Learning y la Big Data para
            responder a alertas tempranas de riesgo de abandono estudiantil y
            análisis de las causas raíces que lo producen.
          </p>
          <p className="paragraph">
            Además, por medio de una aplicación web se realiza la gestión de
            casos de intervención para accionar a los datos y se hace
            acompañamiento para una correcta adopción desde el área de bienestar
            con consultas de expertos en permanencia.
          </p>
        </div>
        <div className="content-image">
          <img
            src="/img_DataAnalytics/data-analytics-image.webp"
            alt="Data Analytics"
          />
        </div>
      </div>
    )
}

export default ContentDA;