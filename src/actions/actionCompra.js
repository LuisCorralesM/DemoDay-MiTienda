import {typesCompra } from "../types/types"
import { addDoc,collection } from "@firebase/firestore"
import {db} from "../firebase/firebaseConfig"

export const agregarCompra = (producto) => {
    return {
        type:typesCompra.registerCompra,
        payload: producto
    }
}

//Acción asincrónica
export const compraAsincrona = (producto) => {
    return (dispatch) => {

        addDoc(collection(db,"Carrito"), producto)
        .then(resp=>{
            dispatch(agregarCompra(producto))
            
        })
        .catch(e=> console.error(e))
    }

}
