
import React from "react";
import whychoose from "../../imagenes/whychoose.jpg";
import icono1 from "../../imagenes/whychoose/icono1.png";
import icono2 from "../../imagenes/whychoose/icono2.png";
import icono3 from "../../imagenes/whychoose/icono3.png";
import icono4 from "../../imagenes/whychoose/icono4.png";
import icono5 from "../../imagenes/whychoose/icono5.png";


import PorQueElegirnosCard from "../PorQueElegirnosCard";

  const tarjetas = [
    {
      title: "SÓLO UN PAR DE CLICKS",
      texto: "Comprá rápido y fácil desde tu PC o celular en un par de clicks",
      imagen: icono1,
    },
    {
      title: "FLEXIBILIDAD DE PAGO",
      texto: "Abonalo con débito, crédito, transferencia, billetera virtual.",
      imagen: icono2,
    },
    {
      title: "ENVÍOS EXPRESS",
      texto: "Te lo enviamos a tu casa en forma rápida y segura al menor costo.",
      imagen: icono3,
    },
    {
      title: "GARANTÍA DE CONFIANZA",
      texto: "Somos una empresa de confianza, avalada por la opinión de nuestros clientes.",
      imagen: icono4,
    },
    {
      title: "ATENCIÓN INMEDIATA",
      texto: "Estamos junto a nuestros clientes. Podés comunicarte vía WhatsApp, chat, mail, y redes sociales.",
      imagen: icono5,
    },
  ];
  
export const PorQueElegirnos = () => {
  return (
    <div style={porqueelegirnosStyle}>
      <div style={tarjetassStyle}>
        {tarjetas.map((tarjeta, index) => (
          <PorQueElegirnosCard
            key={index}
            title={tarjeta.title}
            texto={tarjeta.texto}
            imagen={tarjeta.imagen}
          />
        ))}
      </div>
      <style>{mediaQuery}</style>
    </div>
  );
};

const porqueelegirnosStyle = {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "100%",
  maxHeight: "100%",
  // height: "55vw",
  backgroundImage: `url(${whychoose})`,
  backgroundSize: "cover",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: "center",
  marginTop: "20px"
};

const tarjetassStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100vw",
  marginTop: "250px",
};

const mediaQuery = `@media (max-width: 768px) {
  .tarjetas {
    justify-content: flex-start;
    margin-top: 0;
  }
}`;
