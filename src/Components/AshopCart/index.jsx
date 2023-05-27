
import { TYPES } from "../../actions/aShopCartActions";
import { useReducer } from "react";
import { aShopCartReducer, shopInitialState } from "../../reducer/aShopCartReducer";
import Aproduct from "../Aproduct"
import Acart from "../Acart"
import fondoDestacados from "../../imagenes/fondoDestacados.jpg"

const AshopCart = () => {

    const [state, dispatch] = useReducer(aShopCartReducer, shopInitialState)

    const {products, cart}= state;
    
    const addToCart = (id) =>dispatch({type: TYPES.ADD_TO_CART, payload: id})

    const deletteFromCart = (id, all) => {
        if (all) {
            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})  
        } else {
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
        }
    }
    
    return (
    <>
        <div style={deStyle}>
            <div>
                <h3 style={texStyle}>PRODUCTOS DESTACADOS</h3>
            </div>
            <div style={tarStyle}>
                {
                    products.map(product => <Aproduct
                        key={product.id}
                        product={product}
                        addToCart={addToCart}

                    />)  
                }
            </div>
        </div>
                
        <div style={deCarStyle}>
            <div>
                <h3 style={texCarStyle}>TUS COMPRAS</h3>
            </div>
            <div style={tarCarStyle}>
                {
                    cart.map((item, index) => <Acart
                        key={index}
                        item={item}
                        deletteFromCart={deletteFromCart}
                    />)  
                }
            </div>
        </div>
    </> 
    )
}

export default AshopCart

const deStyle = {
    display:"flex",
    flexWrap: "wrap",  
    maxWidth: "100%",    
    maxHeight: "100%",   
    backgroundImage: `url(${fondoDestacados})`,
    backgroundSize: "cover",
    opacity: "0.8",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px"
}

const texStyle = {
    textShadow: "4px 4px 2px #F8B64B",
    fontSize: "40px",
    // fontWeight: 300,
    fontFamily: "calibri, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "40px",
}

const tarStyle = {
    display:"flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "100px"
}

const deCarStyle = {
    display:"flex",
    flexWrap: "wrap",  
    maxWidth: "100%",    
    maxHeight: "100%", 
    flexDirection: "column",  
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
}

const texCarStyle = {
    fontFamily: "verdana, sans-serif",
    fontSize: "20px",
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    textDecoration: "underline",

    color: "black",
    backgroundColor: "#F8B64B",
    borderRadius: "20px",
    textAlign: "center",
    paddingTop: "10px",
    border: "1px solid black",
    width: "196px",
    height: "55px",
    marginTop: "10px",
    marginLeft: "40px"
}

const tarCarStyle = {
    display:"flex",
    flexWrap: "wrap",
}

