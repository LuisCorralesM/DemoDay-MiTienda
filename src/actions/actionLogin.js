import {types} from "../types/types"
import { getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from "@firebase/auth"
import { google, facebook } from "../firebase/firebaseConfig"

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

// Para google
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

// Para facebook
export const loginFacebook = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,facebook)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

// Login manual

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id, 
            displayname
        }
    }
}

// Cerrar Sesión 
export const startLogout = () => {
    alert('salir')
    return async( dispatch ) => {
        const auth = getAuth();
        console.log(auth);
        await signOut(auth);
        dispatch(logout() );
    }
}

export const logout = () => ({
    type: types.logout
})


