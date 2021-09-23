import React from 'react'

const PasarelaPago = () => {
    return (
        <div>
            <h1> Pasarela de pago</h1>
            <div className="Registro py-5 container text-center">
                <form className="form-signin formulario-registro" >
                    <div
                        className="cajita"
                    >
                        


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
                            Finalizar compra
                        </button>
                        <br />
                        

                        
                    </div>
                </form>

            </div>


            
        </div>
    )
}

export default PasarelaPago
