import { TYPES } from "../actions/aShopCartActions";

export const shopInitialState = {
    products: [],
    cart: [],
}

export const aShopCartReducer = (state, action) => {

    switch (action.type) {
        
        case TYPES.READ_STATE: {
            return{
                products: action.payload.products,
                cart: action.payload.cart
            }
        }
        
        case TYPES.ADD_TO_CART:{

            const newItem = state.products.find(product => product.id === action.payload)

            const itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
                ?{
                ...state,
                cart: state.cart.map(item =>
                    item.id === newItem.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            }
                :{
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}]
            }
        }

        case TYPES.REMOVE_ONE_PRODUCT:{
            const itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ?{
                ...state,
                cart: state.cart.map(item =>
                    item.id === itemToDelete.id
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
            }
        
            :{
                ...state,
                cart: state.cart.filter(item => item.id !== itemToDelete.id) 
            }

        }

        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
            
        default:
            return state;
    }
}


// {
        //     id: 1,
        //     imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg",
        //     producto: "ACEITE DE OLIVA ARECO",
        //     tamaño: "500ml",
        //     precio: 1850,
        //     },
        //     {
        //     id: 2,
        //     imagen: "https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png",
        //     producto: "LENTEJAS SIN TACC",
        //     tamaño: "500gr",
        //     precio: 420,
        //     },
        //     {
        //     id: 3,
        //     imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg",
        //     producto: "MIEL ORGANICA MIEL DE MONTE",
        //     tamaño: "480gr",
        //     precio: 1280,
        //     },
        //     {
        //     id: 4,
        //     imagen: "https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true",
        //     producto: "FIDEOS WAKAS SIN GLUTEN",
        //     tamaño: "250gr",
        //     precio: 650,
        //     },

