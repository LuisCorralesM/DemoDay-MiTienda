import React from 'react'
import { Link, Redirect } from 'react-router-dom'
const url = 'https://api-sprint2-aspalma.herokuapp.com/usuario/'


export const Registro = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //         form:{
    //             id:"",
    //             username:"",
    //             password:"",
    //             apellido:"",
    //             nombre:""
    //         },
    //         redireccionar:false
    //     }




    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    // }
    // handleChange = async e => {
    //     await this.setState({
    //         form:{
    //             ...this.state.form,
    //             [e.target.name]:e.target.value
    //         }
    //     })
    // } //target.name : permite capturar dependiendo del name que tenga el input en el formulario.


    // RegistroUsuario = async () => {
    //     await axios.post(url, {
    //         id: uuid,
    //         apellido: this.state.form.apellido,
    //         nombre: this.state.form.nombre,
    //         username: this.state.form.username,
    //         password: md5(this.state.form.password)
    //     })
    //     .then(respuesta => {
    //         Swal.fire({text:`Usuario registrado exitosamente`,
    //         icon:'success'
    //         })



    //         this.setState({redireccionar:true})
    //         // const registros = []

    //         // localStorage.setItem('Registro', JSON.stringify(this.state.form))
    //         // registros.push(JSON.parse(localStorage.getItem('Registro')))
    //         // localStorage.setItem('Registros', JSON.stringify(registros))
    //         // console.log(registros)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    //     await axios.get(url) 
    //     .then(response => localStorage.setItem('Registros2', JSON.stringify(response.data)))
    // }



    // render() {
    return (
        <div className="contenedorRegistro">
            <div className="Registro py-5 container text-center">
                <form className="form-signin formulario-registro" >
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
                            placeholder="Apellido paterno"
                            name="apellido_paterno"
                            className="form-control"
                            autoComplete="off"
                            required=""

                        />

                        <input
                            type="text"
                            placeholder="Apellido materno"
                            name="apellido_materno"
                            className="form-control"
                            autoComplete="off"
                            required=""
                        />

                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Nombre"
                            required=""
                        />

                        <input
                            type="email"
                            name="username"
                            className="form-control"
                            placeholder="Email"
                            required=""
                            />

                        <input
                            type="Password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required=""
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

                        {/* {this.state.form.redirecionar && <Redirect to="/" />} */}
                    </div>
                </form>

            </div>

        </div>
    )
}
