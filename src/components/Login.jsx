import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle} from '../actions/actionLogin';

export const Login = () => {

    const [redirection, setRedirection] = useState(false)

    const [values, handleInputChange, reset ] = useForm ({
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

  

    const handleGoogle = () => {
        dispatch(loginGoogle())
        
    }

    return (
        <div className="contenedorLogin">
            <div className="contenedor-login">
                <form className="form-signin formulario-registro" onSubmit={handleLogin}>
                    <div>
                        <h1> Login </h1>
                        
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
                            className="btn btn-primary btn-block boton-login"
                        >
                            Login{/* <Link to = "/mapa" className="text-white boton-login text-decoration-none">  Login  </Link> */}
                           
                        </button>

                        <div className="">
                            <p>Login with social networks</p>

                            <div className="google-btn btn-primary boton-login" onClick = {handleGoogle}>
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/registro"
                            className="Link text-decoration-none"
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
