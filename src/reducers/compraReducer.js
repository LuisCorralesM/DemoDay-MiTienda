import {typesCompra} from "../types/types";

const initialState = {
    compra:[]
    
    }


export const compraReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case typesCompra.registerCompra:
            return {
                compra:[action.payload]
            }
        default:
            return state

    }
}
