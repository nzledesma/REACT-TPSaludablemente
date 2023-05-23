import OfertaSemBtn from "../OfertaSemBtn/OfertaSemBtn"
import OfertSemItem from "./OfertSemItem.jpg"

const OfertaSemCard = (props) => {
    return (

    <figure style={figureStyle}>
        <img src={props.card.imagen} alt={props.card.titulo} 
            style={imgStyle} />
        <figcaption style={figcaptionStyle}>
            <p style={{fontSize: "30px"}}>{props.card.producto}</p>
            <p style={{fontSize: "24px", lineHeight: "0px" }}>{props.card.tamaño}</p>
            <p style={{fontSize: "30px"}}>{props.card.precio}</p>
            <OfertaSemBtn />
        </figcaption>
        
    </figure>
    )
}

export default OfertaSemCard

const figureStyle = {
    width: "437px",     
    height: "auto",
    maxHeight: "600px",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${OfertSemItem})`,
    backgroundPosition: "center -10%",
    backgroundSize: "contain",
}

const imgStyle = {
    width: "300px",     
    height: "600px",                       
    borderRadius: "20px 20px 0px 0px",
    marginRight: "0px",

}

const figcaptionStyle = {
    width: "434px",     
    height: "190px",
    backgroundColor: "#D9D9D9",
    borderRadius: "0px 0px 20px 20px",
    paddingBottom: "0px",
    borderTop: "1px solid black",
    marginRight: "0px",
}


