import React from 'react'
import { useSelector } from 'react-redux'
import '../style/styleComponents/pasarelaDePago.css'

//NOTA hacer que el #Factura no se pierda al recargar la pagina (idea: que el numero se genere solo cuando se da click en el btn pasarela)
const nFactura = Math.round(Math.random() * 100000)

const PasarelaPago = ({ total, TotalPrecio, TotalProductos }) => {
    const { name } = useSelector(store => store.login)

    return (
        <div className="contenedor-pasarela">
            <div className="contenedor-factura">
                <h1 className="titulo-pasarela"> Pasarela de pago</h1>
                <h2 className="nombre-usuario">Sr/a {name}</h2>
                <p>Factura # {nFactura}</p>
                {
                    (total) ?
                        (
                            <div>
                                {
                                    total.map((element, index) => (
                                        <div key={index} id="items">
                                            <ul className="lista-productos">
                                                <li>Nombre: {element.nombre}</li>
                                                <li>Descripcion: {element.descripcion}</li>
                                                <li>Catidad: {element.compra}</li>
                                                <li>Precion unitario: ${element.precio}</li>
                                                <li>Precio total: ${element.precio * element.compra}</li>
                                            </ul>
                                        </div>

                                    )
                                    )

                                }
                                <li>Total productos: {TotalProductos}</li>
                                <li><span>Total a pagar: </span>{TotalPrecio}</li>
                            </div>
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
