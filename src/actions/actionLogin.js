import {types} from "../types/types"
import { getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from "@firebase/auth"
import { google, facebook } from "../firebase/firebaseConfig"
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";





//accion asincronica
// se debe realizar un dispatch para que se ejecute cuando se resuelve el asincronismo

export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName, user.email, user.photoURL)
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
            console.log(user)
            dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
            console.log(user.email)
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
            dispatch(loginSincrono(user.uid,user.displayName, user.email, user.photoURL))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

// Login manual

export const loginSincrono = (id, displayname,email,photo) => {
    return {
        type: types.login,
        payload:{
            id, 
            displayname,
            email,
            photo
        }
    }
}

// Cerrar Sesión 
export const startLogout = () => {
    
    Swal.fire({
        title: `Vuelve pronto a Mi tienda !!`,
        icon: 'info',
        
      })
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


