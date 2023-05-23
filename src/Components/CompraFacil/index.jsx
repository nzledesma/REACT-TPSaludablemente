import React from 'react'
import fondoCompraFacil from "../../imagenes/fondoCompraFacil.jpg"

export const CompraFacil = () => {
  return (
    
    <div style={cfStyle}>
      <div>
        <h3 style={cfTtexto}>¡COMPRA FÁCIL!</h3>
      </div>
      <div style={lisStyle}>
        <ul>
          <li>Lo elegís online con un sólo click</li>
          <li>Lo pagás del modo más conveniente <br />(débito - crédito - transferencia - MP)</li>
          <li>Lo recibís en tu casa al día siguiente</li>
        </ul>
      </div>
      <button
        style={cfBtnStyles}
    >SABER MÁS</button>
    </div>
  )
}

const cfStyle = {
  display:"flex",
  flexDirection: "column",
  flexWrap: "wrap",  
  maxWidth: "100%",    
  maxHeight: "100%",
  width: "1414px",
  height: "492px",   
  backgroundImage: `url(${fondoCompraFacil})`,
  backgroundSize: "cover",
  opacity: "0.8",
  backgroundPosition: "center",
  justifyContent: "center",
  // alignItems: "center",
  paddingLeft: "10px",
}
  


const cfTtexto = {
  textShadow: "4px 4px 2px #F8B64B",
  webkitTextStroke: "2px black",
  webkitTextFillColor: "#7F5004",
  fontSize: "40px",
  fontWeight: 300,
  fontFamily: "calibri, sans-serif",
  display: "flex",
  flexWrap: "wrap",
  padding: "40px"
}

const lisStyle = {
  color: "black",
  textAlign: "left",
  fontFamily: "verdana",
  fontSize: "18px",
}


const cfBtnStyles = {
  color: "black",
  backgroundColor: "#F8B64B",
  borderRadius: "20px",
  textAlign: "center",
  paddingTop: "5px",
  fontFamily: "verdana",
  fontSize: "20px",
  border: "1px solid black",
  width: "230px",
  height: "58px",
  textDecoration: "underline",
  marginTop: "20px",
  marginLeft: "40px"
}