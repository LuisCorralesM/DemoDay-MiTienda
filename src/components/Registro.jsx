import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';


export const Registro = () => {

    const [redirection, setRedirection] = useState(false)

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
        setRedirection(true)
    }
    
    return (
        <div className="contenedorRegistro">
            <div className="Registro py-5 container text-center">
                <form className="form-signin formulario-registro" onSubmit={handleRegistro}>
                    <div
                        className="cajita"
                    >
                        <h1 className="h3 mb-3 font-weight-normal">
                            ¡Registrate en nuestro sistema!
                        </h1>
                        {/* icono */}
                        <div className="fadeIn first ">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS689Xb1GJwNGzZl9KR7CTRKAZFaXt1060H32xPbb8hw_NXNpJ409Sl-aLnPsJQUfKJnYEV_KndttR1bbUKS_f7DGE3OP59H1Y&usqp=CAU&ec=45725305"
                                id="icon"
                                alt="User Icon"
                                width="100px" />

                            <h3>Crea una cuenta</h3>
                        </div>
                        {/* formulario */}


                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                            required=""
                            value={nombre}
                            onChange={handleInputChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required=""
                            value={email}
                            onChange={handleInputChange}
                            />

                        <input
                            type="Password"
                            name="pass1"
                            className="form-control"
                            placeholder="Password"
                            required=""
                            value = {pass1}
                            onChange={handleInputChange}
                        />

                        <input
                            type="Password"
                            name="pass2"
                            className="form-control"
                            placeholder="Password"
                            required=""
                            value = {pass2}
                            onChange={handleInputChange}
                        />      
                        <br />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mb-1 boton"
                        >
                            Registro 
                        </button>
                        <br />
                        <Link
                            to="/login"
                            className="link text-decoration-none"
                        >
                            ¿Ya estas registrado?
                        </Link>

                        {redirection && <Redirect to="/login" />}
                    </div>
                </form>

            </div>

        </div>
    )
}
