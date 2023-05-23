// eslint-disable-next-line react/prop-types
const CardZoe = ({ imageUrl, linkUrl }) => {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt="Imagen de la tarjeta" style={imgZStyle}/>
      </a>
      
    );
  };
  
  export default CardZoe;
  
  const imgZStyle = {
      width: "250px",     
      height: "350px",                       
      borderRadius: "10px 10px 10px 10px",
      marginTop: "30px",
      margin: "20px",
      backgroundSize: "cover",
      backgroundPosition: "center",  
      border: "2px solid black",  
  }
  