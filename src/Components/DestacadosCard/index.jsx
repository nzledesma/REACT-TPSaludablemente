import DestacadosBtn from "../DestacadosBtn"


const DestacadosCard = (props) => {
    return (

    <figure style={figureStyle}>
        <img src={props.card.imagen} alt={props.card.titulo} 
            style={imgStyle} />
        <figcaption style={figcaptionStyle}>
            <p style={{fontSize: "16px"}}>{props.card.producto}</p>
            <p style={{fontSize: "14px", lineHeight: "0px" }}>{props.card.tamaño}</p>
            <h3>{props.card.precio}</h3>
            <DestacadosBtn />
        </figcaption>
        
    </figure>
    )
}

export default DestacadosCard

const figureStyle = {
    width: "300px",     
    height: "530px",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px"
}

const imgStyle = {
    width: "300px",     
    height: "400px",                       
    borderRadius: "20px 20px 0px 0px",
    marginTop: "0px",
}

const figcaptionStyle = {
    width: "300px",     
    height: "250px",
    backgroundColor: "#D9D9D9",
    borderRadius: "0px 0px 20px 20px",
    paddingBottom: "20px",
    borderTop: "1px solid black",
}

