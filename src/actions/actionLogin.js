import {types} from "../types/types"
import { getAuth, signInWithPopup,signInWithEmailAndPassword } from "@firebase/auth"
import { google } from "../firebase/firebaseConfig"

//accion asincronica
// se debe realizar un dispatch para que se ejecute cuando se resuelve el asincronismo

export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log(user)
             console.log('Bienvenid@');
       })
       .catch(e =>{
           console.log(e);
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id, 
            displayname


        }
    }
}
