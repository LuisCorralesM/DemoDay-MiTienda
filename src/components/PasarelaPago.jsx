import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/styleComponents/pasarelaDePago.css'
import axios from 'axios'

//NOTA hacer que el #Factura no se pierda al recargar la pagina (idea: que el numero se genere solo cuando se da click en el btn pasarela)
const nFactura = Math.round(Math.random() * 100000)

const PasarelaPago = ({ total, TotalPrecio, TotalProductos,vaciar }) => {
    const { name } = useSelector(store => store.login)
    const { email} = useSelector(store => store.login)
    console.log("email"+ email)

    const [state, setstate] = useState({
        
        asunto:"Notificación de compra desde Mi Tienda", 
        mensaje:`El precio total de la compra fue ${TotalPrecio}. `,
        
    })

    const productosTotal = ()=> {
        
        
            return(
                
                total.map((element, index) => (
                <div key={index} id="items">
                    <ul className="lista-productos">
                        <li>Nombre: {element.nombre}</li>
                        <li>Descripcion: {element.descripcion}</li>
                        <li>Cantidad: {element.compra}</li>
                        <li>Precion unitario: ${element.precio}</li>
                        <li>Precio total: ${element.precio * element.compra}</li>
                    </ul>
                </div>

            )
            )
            

        )
    }


    const {asunto, mensaje } = state
    const enviarEmail = async(e) => {
        e.preventDefault()
        await axios.post ("/api/form",{
            name,
            email,
            asunto,
            mensaje,
            
        })
    }

    const handleFinalizar = (e) => {
        vaciar(e)
        enviarEmail(e)
        
    }

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
                               <button onClick ={(e)=>handleFinalizar(e)}> Finalizar compra </button>
                           
                            </div>
                        ) :
                        <span>Vacio</span>
                }
            </div>
            {/* <div className="Registro py-5 container text-center">
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
 */}


        </div>
    )
}

export default PasarelaPago
