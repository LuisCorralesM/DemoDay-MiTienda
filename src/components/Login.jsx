import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle, loginFacebook} from '../actions/actionLogin';
import '../style/styleComponents/login.css'

export const Login = () => {

    const [redirection, setRedirection] = useState(false)

    const [values, handleInputChange ] = useForm ({
        email:"",
        password:""
    })

    const {email, password} = values
    
    const dispatch = useDispatch();


    const handleLogin = (e)=> {
        e.preventDefault();
        dispatch(loginEmailPassword(email,password));
        setRedirection(true)
    }

  
// Con google
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
// Con Facebook
    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

   

    return (
        <div className="contenedorLogin">
            <div className="contenedor-login">
                <form className="form-signin formulario-registro" onSubmit={handleLogin}>
                    <div>
                        <h1 className="titulo-login"> Iniciar Sesion </h1>
                        
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control mt-1"
                            placeholder="Email"
                            required=""
                            name="email"
                            value = {email}
                            onChange = {handleInputChange}
                        />

                        <input
                            type="Password"
                            id="inputPassword"
                            className="form-control mt-1"
                            placeholder="Contraseña"
                            required=""
                            name="password"
                            value = {password}
                            onChange = {handleInputChange}
                        />

                        <button
                            type="submit"
                            className="boton-login-continuar"
                        >
                            Continuar{/* <Link to = "/mapa" className="text-white boton-login text-decoration-none">  Login  </Link> */}
                           
                        </button>
                        <hr />
                       
                        <div className="">
                            <p>Inicia sesión con redes sociales </p>
                            {/* Con google */}
                            <div className="google-btn boton-login-google" onClick = {handleGoogle}>
                                <div className="google-icon-wrapper">
                                    <img className="google-icon icono-login-redes" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="boton-google-pointer">
                                    Inicio sesión con Google
                                </p>
                            </div>
                            {/* Con facebook */}
                            <div className="google-btn boton-login-google" onClick = {handleFacebook}>
                                <div className="google-icon-wrapper">
                                    <img className="google-icon icono-login-redes" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/256px-Facebook_icon.svg.png" alt="google button" />
                                </div>
                                <p className="boton-google-pointer">
                                    Inicia sesión con Facebook
                                </p>
                            </div>
                        </div>
                        <hr />
                        <Link
                            to="/registro"
                            className="enlace-login-registrarse"
                        >
                            Registrarme
                        </Link>

                    </div>
                </form>
                {redirection && <Redirect to="/tienda" />}
            </div>
        </div>
    )
}
