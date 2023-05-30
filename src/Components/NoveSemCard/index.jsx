
import aceiteCoco from "../../imagenes/aceiteCoco.jpg"



const NoveSemCard = () => {
    
    
    return (
        
    <div style={cardStyle}>
        <img src={aceiteCoco} 
            style={imagenCocoStyle} />
        <div style={figcapCocoStyle}>
            <p style={{fontSize: "20px"}}>ACEITE DE COCO BIOTERRA</p>
            <p style={{fontSize: "20px", lineHeight: "0px" }}>800 ml</p>
            <button style={cardCocoBtn}>Consultar</button>
        </div>
    </div>
    )
}

export default NoveSemCard

const cardStyle = {
    width: "300px",     
    height: "530px",
    border: "3px solid black",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px"
}

const imagenCocoStyle = {
    width: "295px",     
    height: "400px",                       
    borderRadius: "20px 20px 0px 0px",
    marginTop: "0px",
}

const figcapCocoStyle = {
    width: "295px",     
    height: "250px",
    backgroundColor: "#D9D9D9",
    borderRadius: "0px 0px 20px 20px",
    paddingBottom: "20px",
    borderTop: "1px solid black",
}

const cardCocoBtn = {
    margin: "20px",
    border: "1px solid black",
    borderRadius: "16px",
    fontSize: "16px",
    backgroundColor: "#C2E4A1"
}


