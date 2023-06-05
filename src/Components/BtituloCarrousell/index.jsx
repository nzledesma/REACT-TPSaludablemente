


const BtituloCarrousell = () => {
    return (

        <div style={btituloStyle}>
            <h3 style={btextoStyle}>SALUDABLEMENTE EN INSTAGRAM</h3>
        </div>
    )
}

export default BtituloCarrousell
    

const btituloStyle = {
    display:"flex",
    flexWrap: "wrap",  
    maxWidth: "100%",    
    maxHeight: "100%",   
    backgroundColor: "#D9D9D9",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"

}

const btextoStyle = {
    
    textShadow: "4px 4px 2px #F8B64B",
    fontSize: "40px",
    fontFamily: "calibri, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "20px",
}