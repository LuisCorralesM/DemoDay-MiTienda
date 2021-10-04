import {  typesProducto } from "../types/types";
import { addDoc,collection,deleteDoc,getDocs, query,where,doc, updateDoc } from "@firebase/firestore"
import {db} from "../firebase/firebaseConfig"

// Agregar productos

//Acción síncrona
export const agregarProducto = (producto) => {
    return {
        type:typesProducto.register,
        payload: producto
    }
}

//Acción asincrónica
export const agregarAsincrono = (codigo, nombre, precio, descripcion, fecha, imagen) => {
    return (dispatch) => {
        const producto = {
            codigo,
            nombre,
            precio,
            descripcion,
            fecha,
            imagen
        }
        //addDoc recibe como parametro la coleccion y el objeto que se desea adicionar
        //collection recibe como parametro el db y el nombre que se le dara a esta coleccion 
        addDoc(collection(db,"Productos"), producto )
        .then(resp=>{
            dispatch(agregarProducto(producto))
            
        })
        .catch(e=> console.error(e))
    }

}

// Listar productos

export const list = (producto) => {
    return {
        type: typesProducto.list,
        payload:producto
    }
    
}

export const listAsincronica = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "Productos"))
        const productos = []
        querySnapshot.forEach((doc)=>{
            productos.push({
                ...doc.data()
            })
        })
        dispatch(list(productos))
    }
}

//Eliminar productos

export const eliminar = (nombre) => {
    return {
        type: typesProducto.delete,
        payload: nombre
    }
}

export const deleteAsincrono = (nombre) =>{
    return async(dispatch) => {
        const prodCollection = collection(db,"Productos");
        const q = query(prodCollection,where("nombre","==",nombre))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            //doc una especie de buscador
            deleteDoc(doc(db,"Productos",docu.id));
        })
        dispatch(eliminar(nombre));
        dispatch(listAsincronica())
    }
}

// Editar productos

export const activeProduct = (id, producto) => {
    return {
        type: typesProducto.active,
        payload:{
            id, 
            ...producto
        }
    }
}

export const Edit = (producto) => {

    return async (dispatch) => {
        
        const prodCollection = collection(db,"Productos");
        const q = query(prodCollection,where("codigo","==", producto.codigo))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            //doc una especie de buscador
            updateDoc(doc(db,"Productos",docu.id),{
                codigo: producto.codigo,
                nombre:producto.nombre,
                precio:producto.precio,
                descripcion:producto.descripcion,
                fecha:producto.fecha,
                imagen:producto.imagen
            } );
        })
        dispatch(listAsincronica())
    }
}