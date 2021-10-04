import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {registroEmailPasswordNombre} from '../actions/actionRegister';


export const RegistroYup = () => {


    const [redirection, setRedirection] = useState(false)

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            nombre:"",
            email:"",
            pass1:"",
            pass2:""
            
        },
        validationSchema:   Yup.object({
            nombre:Yup.string().required(),
            email:Yup.string().email().required(),
            pass1:Yup.string().required().oneOf([Yup.ref("pass2")]),
            pass2:Yup.string().required()

        }) ,
        onSubmit:(data) => {
            
            const {nombre, email, pass1} = data;
            dispatch(registroEmailPasswordNombre(email,pass1,nombre))
            setRedirection(true)
        }
    })

   

    

    return (
        <div className="contenedorRegistro">
            <div className="Registro py-5 container text-center">
                <form className="form-signin formulario-registro"  onSubmit = {formik.handleSubmit}>
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
                            onChange={formik.handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            />

                        <input
                            type="Password"
                            name="pass1"
                            className="form-control"
                            placeholder="Password"
                            onChange={formik.handleChange}
                        />

                        <input
                            type="Password"
                            name="pass2"
                            className="form-control"
                            placeholder="Password"
                            onChange={formik.handleChange}
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
