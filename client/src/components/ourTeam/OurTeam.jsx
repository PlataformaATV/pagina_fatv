import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="OurTeam-block">
      <div className="OurTeam-block-title">
        <h3>sobre nuestro equipo</h3>
      </div>
      <div className="OurTeam">
        <div className="cards">
          {/* Inicio card 1*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/CarlosVasquez.jpeg" alt="Carlos Vásquez" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">Carlos vásquez restrepo</h5>
                <p className="content-info-role">Presidente</p>
              </div>
            </div>
          </div>
          {/* Fin card 1*/}
          {/* Inicio card 2*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/AstridFranco.jpg" alt="Astrid Franco" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">astrid franco</h5>
                <p className="content-info-role">Coordinadora Área Social</p>
              </div>
            </div>
          </div>
          {/* Fin card 2*/}
          {/* Inicio card 3*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/LuisSanchez.jpeg" alt="Luis Sanchez" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">luis fernando sánchez</h5>
                <p className="content-info-role">Director</p>
              </div>
            </div>
          </div>
          {/* Fin card 3*/}
          {/* Inicio card 4*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/KarenGonzales.jpg" alt="Karen Gonzáles" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">karen gonzález</h5>
                <p className="content-info-role">
                  Coordinadora Área Evaluación y Datos
                </p>
              </div>
            </div>
          </div>
          {/* Fin card 4*/}
          {/* Inicio card 5*/}
          <div className="card">
            <div className="image">
              <img
                src="/img_OurTeam/VictorValencia.jpeg"
                alt="Victor Valencia"
              />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">Víctor Manuel Valencia</h5>
                <p className="content-info-role">Subdirector</p>
              </div>
            </div>
          </div>
          {/* Fin card 5*/}
          {/* Inicio card 6*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/JazminAlzate.jpeg" alt="Jazmin Alzate" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">jazmín alzate</h5>
                <p className="content-info-role">
                  Coordinadora Alianzas y Cooperación
                </p>
              </div>
            </div>
          </div>
          {/* Fin card 6*/}
          {/* Inicio card 7*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/DavidBotero.jpeg" alt="David Botero" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">david santiago botero</h5>
                <p className="content-info-role">Coordinador Área Legal</p>
              </div>
            </div>
          </div>
          {/* Fin card 7*/}
          {/* Inicio card 8*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/DanielaCorrea.jpeg" alt="Daniela Correa" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">daniela correa</h5>
                <p className="content-info-role">
                  Coordinadora Área Comunicaciones
                </p>
              </div>
            </div>
          </div>
          {/* Fin card 8*/}
          {/* Inicio card 9*/}
          <div className="card">
            <div className="image">
              <img src="/img_OurTeam/LuisGonzales.jpg" alt="Luis Gonzalez" />
            </div>
            <div className="content">
              <div className="content-info">
                <h5 className="content-info-name">luis fernando gonzález</h5>
                <p className="content-info-role">
                  Coordinador Área Administrativa y Financiera
                </p>
              </div>
            </div>
          </div>
          {/* Fin card 9*/}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
