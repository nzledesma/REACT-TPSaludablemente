import fondoLosQSaben from '../../imagenes/fondoLosQsaben.jpg'
import fondoCard from '../../imagenes/clientes.jpg'
import BtnZoe from './btnZoe';
import './losquesaben-title.css'

import CardZoe from "./CardZoe";

const cards = [
    { id: 1, imageUrl: 'https://vida-natural.es/wp-content/uploads/2021/08/invierno-2020-numero-59-1-757x1024.jpg', linkUrl: 'target="_blank"' },
    { id: 2, imageUrl: 'https://image.isu.pub/200520032042-f01335cbef1f80d0610949b4e3513f14/jpg/page_1.jpg', linkUrl: 'target="_blank"' },
    { id: 3, imageUrl: 'https://image.isu.pub/210526142042-a253a8b4cbcf925c458bce70b7e75e1e/jpg/page_1.jpg', linkUrl: 'target="_blank"' },
  ];

const CardContainerZ = () => {
    return (
      <div className="card-container" style={LosQSabenStyle}>
        <h2>LA PALABRA DE LOS QUE SABEN</h2>
        <div className="cards" style={cardsStyle}>
          {cards.map((card) => (
            <CardZoe key={card.id} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
          ))}
          <div className="card-clientes">
            <figure style={ClientesCard}>
                   <img src="https://imgur.com/9DMdMA9" alt="" />
                <figcaption style={figcaptionStyleZ}>
                    <p>Nuestros clientes</p>
                    <BtnZoe />
                </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  };
  export default CardContainerZ;



const LosQSabenStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  display:"flex",
  flexWrap: "wrap",
  backgroundImage: `url(${fondoLosQSaben})`,
  backgroundSize: "cover",
  opacity: "0.8",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
  }

  

  const cardsStyle = {
    
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "100px"

  }

   const ClientesCard = {
    width: "250px",
    height: "350px",
    border: "2px solid black",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "20px",
    marginTop: "15px",
    backgroundImage:`url(${fondoCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    
}

   const figcaptionStyleZ ={
    width: "200px",
    height: "40px",
    backgroundColor: "#D9D9D9",
    opacity:"0.9",
    paddingBottom: "20px",
    border: "1px solid black",
    justifyContent: "center",
    borderRadius: "10px",
    textAlign: "center",

   }