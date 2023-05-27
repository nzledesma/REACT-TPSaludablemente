

const Aproduct = ({product, addToCart}) => {
    
    const {imagen, producto, tamaño, precio, id}= product
    
    return (

    <figure style={figStyle}>
        <img src={imagen} 
            style={imaStyle} />
        <figcaption style={figcaStyle}>
            <p style={{fontSize: "16px"}}>{producto}</p>
            <p style={{fontSize: "14px", lineHeight: "0px" }}>{tamaño}</p>
            <h3>$ {precio}</h3>
            <button onClick={() => addToCart(id)} style={comprarBtnStyles}>COMPRAR</button>
        </figcaption>
        </figure>
    )
}

export default Aproduct

const figStyle = {
    width: "280px",     
    height: "530px",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px"
}

const imaStyle = {
    width: "280px",     
    height: "400px",                       
    borderRadius: "20px 20px 0px 0px",
    marginTop: "0px",
}

const figcaStyle = {
    width: "280px",     
    height: "250px",
    backgroundColor: "#D9D9D9",
    borderRadius: "0px 0px 20px 20px",
    paddingBottom: "20px",
    borderTop: "1px solid black",
}

const comprarBtnStyles = {
    color: "black",
    backgroundColor: "#C2E4A1",
    borderRadius: "20px",
    textAlign: "center",
    paddingTop: "5px",
    fontFamily: "verdana",
    fontSize: "18px",
    border: "1px solid black",
    width: "137px",
    height: "38px",
    textDecoration: "underline",
    marginTop: "20px",
}

