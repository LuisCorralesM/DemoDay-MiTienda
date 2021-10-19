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
        mensaje:`El precio total de la compra fue $${TotalPrecio}. `,
        
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
    // const enviarEmail = async(e) => {
    //     e.preventDefault()
    //     await axios.post ("/api/form",{
    //         name,
    //         email,
    //         asunto,
    //         mensaje,
            
    //     })
    // }

    const handleFinalizar = (e) => {
        vaciar(e)
        // enviarEmail(e)
        // Daviplata
        window.open("https://transacciones.nequi.com/bdigital/login.jsp", "_blank");
    }
    const handleFinalizar2 = (e) => {
        vaciar(e)
        // enviarEmail(e)
        // Daviplata
        window.open("https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508", "_blank");
    }

    return (
        <div className="contenedor-pasarela">
            <div className="contenedor-factura">
                <h1 className="titulo-pasarela"> Resumen de su compra </h1>
                <h3 className="nombre-usuario">Sr/a {name}</h3>
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
                                <br/>
                                <p> {`Te invitamos a pagar la factura en los medios electronicos como Nequi o daviPlata, realizando una transferencia por el valor de $${TotalPrecio} a la cuenta: 3209953927`} </p>
                               
                               <button id ="btn-compra" className ="btn btn-compra" onClick ={(e)=>handleFinalizar(e)}> <img src="https://www.nequi.com.co/wp-content/themes/nequi/img/logo_nequi_header.svg" alt=""  /></button>
                               <button id ="btn-compra" className ="btn btn-compra" onClick ={(e)=>handleFinalizar2(e)}><img src="https://www.psepagos.co/PSEHostingUI/GetTicketLogo.aspx?InternalIdentifier=f3e7c8bf-1d42-4494-80ac-3d571338572a" alt=""  />  </button>
                               <a href = "https://transacciones.nequi.com/bdigital/login.jsp" target ="blank">  </a>
                               <a  href = "https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=2508" target ="blanck">  </a>
                           
                            </div>
                        ) :
                        <span>Vacio</span>
                }
            </div>
           


        </div>
    )
}

export default PasarelaPago
