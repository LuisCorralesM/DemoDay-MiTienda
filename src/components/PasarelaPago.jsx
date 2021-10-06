import React from 'react'
import { useSelector } from 'react-redux'

const PasarelaPago = ({ carrito }) => {
    // console.log("pasarela   " + carrito);
    const { register } = useSelector(store => store.register)

    return (
        <div>
            <h1> Pasarela de pago</h1>
            <h2>Sr/a {"Luis "}</h2>
            <p>Factura # {Math.round(Math.random() * 100000)}</p>
            <div>
                {
                    (carrito) ?
                        (
                            carrito.map((element, index) => (
                                <div key={index} id="items" style={{ color: "white;" }}>
                                    <li><span>Los precios</span>{element.precio}</li>
                                </div>

                            )
                            )
                        ) :
                        <span>Vacio</span>
                }
            </div>
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
