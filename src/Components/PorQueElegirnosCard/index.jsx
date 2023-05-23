
import React from "react";

const PorQueElegirnosCard = ({ title, texto, imagen }) => {
  return (
    <figure style={figureStyle}>
      <img src={imagen} alt={title} style={imgStyle} />
      <figcaption style={figcaptionStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={textStyle}>{texto}</p>
      </figcaption>
    </figure>
  );
};

const figureStyle = {
  width: "205px",
  border: "none",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  margin: "0px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const titleStyle = {
  fontSize: "22px",
  textAlign: "center",
  whiteSpace: "normal",
  fontFamily:"arial, sans serif",
  color: "#7F5004",
};

const textStyle = {
  fontWeight: "bold",
  marginTop: "10px", 
  fontFamily:"arial, sans serif",
};

const imgStyle = {
  width: "90%",
  height: "100px",
  borderRadius: "20px 20px 0px 0px",
  objectFit: "contain",
};

const figcaptionStyle = {
  width: "100%",
  padding: "20px",
  backgroundColor: "transparent",
  borderRadius: "0px 0px 20px 20px",
  whiteSpace: "normal",
  paddingBottom: "20px",
};

export default PorQueElegirnosCard;
