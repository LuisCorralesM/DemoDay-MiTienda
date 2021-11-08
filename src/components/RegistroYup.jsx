import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import '../style/styleComponents/registrarse.css'

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
                        <div className="fadeIn first ">
                            <h3 className="titulo-registrarse">Crea una cuenta</h3>
                        </div>
                        {/* formulario */}


                        <input
                            type="text"
                            name="nombre"
                            className="form-control input-formulario"
                            placeholder="Nombre"
                            onChange={formik.handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control input-formulario"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            />

                        <input
                            type="Password"
                            name="pass1"
                            className="form-control input-formulario"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            min="6"
                        />

                        <input
                            type="Password"
                            name="pass2"
                            className="form-control input-formulario"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            min="6"
                        />      
                        <br />
                        <button
                            type="submit"
                            className="boton-registrar"
                        >
                            Registro 
                        </button>
                        <br />
                        <Link
                            to="/login"
                            className="enlace-inicio-sesion"
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
