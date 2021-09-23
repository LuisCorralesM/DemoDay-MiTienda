import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export const Login = () => {

    return (
        <div className="contenedorLogin">
            <div className="contenedor-login">
                <form className="form-signin formulario-registro">
                    <div className="cajita-login">
                        <h1 className="h4 mb-3 font-weight-normal">
                            Inicio de sesión
                        </h1>

                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control mt-1"
                            placeholder="Email"
                            required=""
                            name="userName"
                        />

                        <input
                            type="Password"
                            id="inputPassword"
                            className="form-control mt-1"
                            placeholder="Contreña"
                            required=""
                            name="password"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block boton-login"
                        >
                            <Link to = "/mapa" className="text-white boton-login text-decoration-none">  Login  </Link>
                           
                        </button>

                        <div className="">
                            <p>Login with social networks</p>

                            <div className="google-btn btn-primary boton-login">
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
                {/* {this.state.form.redirecionar && <Redirect to="/todas" />} */}
            </div>
        </div>
    )
}
