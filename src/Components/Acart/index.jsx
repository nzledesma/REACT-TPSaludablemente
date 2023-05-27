
const Acart = ({item, deletteFromCart}) => {
    
    const {imagen, producto, tamaño, precio, id, quantity} = item;

    return (
        
    <div style={cartStyle}>
        <img src={imagen} 
            style={imagenCartStyle} />
        <div style={figcapCartStyle}>
            <p style={{fontSize: "20px"}}>{producto}</p>
            <p style={{fontSize: "20px", lineHeight: "0px" }}>{tamaño}</p>
            <h3>$ {precio} x {quantity} = $ {precio * quantity}</h3>
            <button onClick={() => deletteFromCart(id, false)} style={cartBtns}>Eliminar uno</button>
            <button onClick={() => deletteFromCart(id, true)} style={cartBtns}>Eliminar todos</button>
        </div>
    </div>
    )
}

export default Acart

const cartStyle = {
    display:"flex",
    flexWrap: "wrap",  
    maxWidth: "100%",    
    maxHeight: "100%",
    width: "1280px",
    backgroundcolor: "white",
    border: "1px solid black",
    justifyContent: "start",
    alignItems: "center",
}

const imagenCartStyle = {
    width: "150px",     
    height: "150px",                       
    marginLeft: "40px",
    marginTop: "10px",
}

const figcapCartStyle = {
    maxWidth: "100%",     
    height: "250px",
    padding: "10px",
    marginTop: "30px",
}

const cartBtns = {
    margin: "10px",
    border: "1px solid black",
    borderRadius: "16px",
    fontSize: "16px", 
}


