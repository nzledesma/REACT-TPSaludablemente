import React from 'react'
import OfertSemFondo from "./ImgOfertSem.jpg"
import OferImg1 from "./ImgOfertSem.jpg"
//import OfertSemItem from "./OfertSemItem.jpg"
import OfertSemCard from "../OfertaSemCard/OfertaSemCard.jsx"

const db = [
  {
    id: 1,
    //imagen: `url(${OfertSemItem})`,
    producto: "ACEITE DE COCO BIOTERRA",
    tamaño: "800ml",
    precio: "$5000",
    descripcion: "Los aceites de coco BIOTERRA son 100% naturales y tienen distintos usos, ya que pueden aplicarse directamente sobre la piel, o bien, utilizarse como ingredientes en la cocina.",
  }
]

export const OfertaSem = () => {
  return (
    <div>
      
      <div style= {OfertSemStyle}>
        <h3 style= {texto}>OFERTA DE LA SEMANA</h3>
        <div style = {cajaTextoStyle}>
          <h4 style= {texto}>{db.map(item => item.descripcion)}</h4>
        </div>
        <div style={tarjetasStyle}>
          {
            db.map(item => <OfertSemCard
              key={item.id}
              card={item}
              />)  
          }  
        </div>
      </div>
    </div>
  )
}

const OfertSemStyle = {
  backgroundImage: `url(${OfertSemFondo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "20%, 80%",
  padding: "2vh",
  Height: "auto",
}

const texto = {
  color: "black",
  fontFamily:"arial, sans serif",
  fontSize: "40px",
  textShadow: "5px 3px 5px #FFF0AF",
  display:"flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "40px",
  flex: "3",
  gridColumn: "50%",
}

const tarjetasStyle = {
  maxHeight : "600px",
  display:"flex",
  flex: "1",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  margin: "40px",
  objectFit: "cover",
  gridColumn: "50%",
}

const cajaTextoStyle = {
  display: "flex",
  flex: "1",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  maxHeight: "800px",
}