import BtnZoe2 from "./btnzoe2";
import BtnZoe3 from "./btnzoe3";


// STYLES //
import './importsaludable.css'


const Cardimportante = () => {
    return (
      <div className="card-container">
            <h2 className="title-impor">¿POR QUÉ ES IMPORTANTE UNA <br /> ALIMENTACION SALUDABLE?</h2>
                  <p className="text-imp">
                   Una alimentación saludable es aquella que proporciona <br />
                   los nutrientes que el cuerpo necesita para mantener el <br />
                   buen funcionamiento del organismo, conservar o <br />
                   restablecer la salud, minimizar el riesgo de enfermedades <br />
                  </p>

            <div className="btn-container">
                      <div className="botton1">
                          <BtnZoe2 />
                      </div>
                      <div className="botton2">
                          <BtnZoe3 />
                      </div>
            </div>
        </div>

    );
  };
  export default Cardimportante;


