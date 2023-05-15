
import fondoDestacados from "../../imagenes/fondoDestacados.jpg"
import DestacadosCard from "../DestacadosCard"

const db = [
  {
    id: 1,
    imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg",
    producto: "ACEITE DE OLIVA ARECO",
    tamaño: "500ml",
    precio: "$1850",
  },
  {
    id: 2,
    imagen: "https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png",
    producto: "LENTEJAS SIN TACC",
    tamaño: "500gr",
    precio: "$420",
  },
  {
    id: 3,
    imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg",
    producto: "MIEL ORGANICA MIEL DE MONTE",
    tamaño: "480gr",
    precio: "$1280",
  },
  {
    id: 4,
    imagen: "https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true",
    producto: "FIDEOS WAKAS SIN GLUTEN",
    tamaño: "250gr",
    precio: "$650",
  },
]

export const Destacados = () => {
  return (
    
    <div style={destacadosStyle}>
      <div>
        <h3 style={texto}>PRODUCTOS DESTACADOS</h3>
      </div>
      <div style={tarjetasStyle}>
        {
          db.map(item => <DestacadosCard
            key={item.id}
            card={item}
            
          />)  
        }
      </div>
    </div>
  )
}

const destacadosStyle = {
  maxWith: "100%",
  maxHeight: "100%",
  display:"flex",
  flexWrap: "wrap",
  backgroundImage: `url(${fondoDestacados})`,
  backgroundSize: "cover",
  opacity: "0.8",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
}
  
const texto = {
  color: "black",
  fontFamily:"arial, sans serif",
  fontSize: "40px",
  textShadow: "5px 3px 5px #FFF0AF",
  display:"flex",
  flexWrap: "wrap",
  justifyContent: "center",
}

const tarjetasStyle = {
  display:"flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "100px"
}

