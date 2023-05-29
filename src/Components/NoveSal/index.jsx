
import novedadesSaludables from "../../imagenes/novedadesSaludables.jpg"
import NoveSemCard from '../NoveSemCard'


export const NoveSal = () => {
    return (
        <div style={NoveStyle}>
            <div>
                <h3 style={NoveTitulo}>NOVEDADES SALUDABLES</h3>
            </div>
            <div style={CocoStyle}>
                <div>
                    <h4 style={comeStyle}>Sólo en nuestra web te ofrecemos los ACEITES DE COCO BIOTERRA, que son 100% naturales y tienen distintos usos, ya que pueden aplicarse directamente sobre la piel, o bien, utilizarse como ingredientes en la cocina.<br/>¡PROBALO CON NOSOTROS!</h4>
                </div>
                <div>
                    <NoveSemCard />
                </div>
            </div>
        </div>
    )
}

    const NoveStyle = {
    display:"flex",
    flexWrap: "wrap",  
    maxWidth: "100%",    
    maxHeight: "100%",   
    backgroundImage: `url(${novedadesSaludables})`,
    backgroundSize: "cover",
    opacity: "0.8",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
    }
    
    const NoveTitulo = {
    textShadow: "4px 4px 2px #F8B64B",
    webkitTextStroke: "2px black",
    webkitTextFillColor: "#7F5004",
    fontSize: "40px",
    fontWeight: 300,
    fontFamily: "calibri, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "40px"
    }

    const CocoStyle = {
    display:"flex",
    flexWrap: "wrap",
    gap: "200px",
    maxWidth: "100%",
    marginBottom: "100px",
    alignItems: "center",
    justifyContent: "space-around"
    }

    const comeStyle = {
        width: "500px", 
        height:"200px",
        marginBottom: "50px"
    }

