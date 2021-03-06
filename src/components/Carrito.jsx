import React, { useState, useEffect } from 'react'
import PasarelaPago from './PasarelaPago'
import { withRouter } from 'react-router-dom'
import '../style/styleComponents/carrito.css'

export const Carrito = (props) => {
    const { history } = props;
    useEffect(() => {
        // NOTA: arreglar el estado inicial de 'tCantidad' para que muestre bien las cantidades cuando se recarga la pagina 
        //como se hizo con 'tPrecio'

        // estado inicial de 'tCantidad'

        let initialStateCantidad = 0;

        const carrito1 = JSON.parse(localStorage.getItem('carro'));

        if (JSON.parse(localStorage.getItem('carro'))) {
            initialStateCantidad = carrito1.reduce((acc, { compra }) => acc + compra, 0);
        } else {
            initialStateCantidad = 0;
        }

        setTCantidad(initialStateCantidad);


        // estado inicial de 'tPrecio'
        let initialStatePrecio = 0;

        const carrito2 = JSON.parse(localStorage.getItem("carro"));

        if (JSON.parse(localStorage.getItem('carro'))) {
            initialStatePrecio = carrito2.reduce((acc, { compra, precio }) => acc + (precio * compra), 0);
        } else {
            initialStatePrecio = 0;
        }
        setTPrecio(initialStatePrecio);
    }, [])

    const carrito = JSON.parse(localStorage.getItem("carro"));
    const [recargar, setRecargar] = useState(false);
    const [pasarela, setPasarela] = useState(true);

    // estado para guardar los totales del carrito: total cantidad / total precio

    const [tCantidad, setTCantidad] = useState(0);

    const [tPrecio, setTPrecio] = useState(0);

    // metodo para hallar totales
    // console.log(carrito);
    let
        acumuladoCantidad = 0,
        acumuladoPrecio = 0;


    console.log(acumuladoCantidad);

    const
        btnSumar = (id) => {
            carrito.forEach(producto => {
                if (producto.codigo === id) {
                    producto.cantidad--
                    producto.compra++
                    localStorage.setItem("carro", JSON.stringify(carrito))
                }
            });
            // Reduce para "compra"
            acumuladoCantidad = carrito.reduce((acc, { compra }) => acc + compra, 0)
            setTCantidad(acumuladoCantidad)
            // Reduce para "{precio * cantidad}"
            acumuladoPrecio = carrito.reduce((acc, { compra, precio }) => acc + (precio * compra), 0)
            setTPrecio(acumuladoPrecio)

            setRecargar(!recargar)
        },
        btnRestar = (id) => {
            carrito.forEach((producto, index) => {
                if (producto.codigo === id) {
                    producto.cantidad++
                    producto.compra--
                    setTCantidad(acumuladoCantidad)
                    localStorage.setItem("carro", JSON.stringify(carrito))
                    if (producto.compra === 0) {
                        if (window.confirm(`??Est?? seguro de eliminar el producto: ${producto.nombre} ?`)) {
                            carrito.splice(index, 1)
                            localStorage.setItem("carro", JSON.stringify(carrito))
                        } else {
                            producto.compra++
                            localStorage.setItem("carro", JSON.stringify(carrito))
                        }
                    }
                }
                // Reduce para "compra"
                acumuladoCantidad = carrito.reduce((acc, { compra }) => acc + compra, 0)
                setTCantidad(acumuladoCantidad)
                // Reduce para "{precio * cantidad}"
                acumuladoPrecio = carrito.reduce((acc, { compra, precio }) => acc + (precio * compra), 0)
                setTPrecio(acumuladoPrecio)

            })
            setRecargar(!recargar)
        },
        vaciarCarro = (e, accion) => {
            dispararAnimacion(e, accion)
            setTCantidad(0)
            setTPrecio(0)
            localStorage.clear();
            setRecargar(!recargar)
        }

    const finalizarCompra = (e, accion) => {
        dispararAnimacion(e, accion)
        setTimeout(() => {
            setPasarela(!pasarela)
        }, 500);
    }

    // Animacion en cada cambio de p??gina

    const dispararAnimacion = (e, accion) => {
        e.preventDefault();

        const divAnimacion = document.getElementById('animacion')
        divAnimacion.classList.toggle('animacion-open')
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
            // if (accion === '') {
            //     history.push('/')
            //     }else if(accion === '/landingpage/privado'){
            //         history.push('/landingpage/privado')
            //     }

        }, 500);
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
            divAnimacion.classList.toggle('animacion-open')
        }, 1000);

        // if(direccion === '/mapa'){
        //     setTimeout(() => {
        //         history.push('/mapa')
        //     }, 900);

        // }
    }

    const handleChatWsp = () => {
        let
            numero = 573126505633,
            mensaje = 'Buenos dias, quisiera reportar mi compra y comunicarme con usted para conocer la gestion del domicilio';
        mensaje.replaceAll(" ", '%')
        window.open(`https://wa.me/+${numero}?text=${mensaje}`)
    }

    return (
        <div className="contenedor-carrito">
            {(pasarela) ? (
                <div >
                    <div className="btn-whatsapp-domiciliario">
                        <img src="https://res.cloudinary.com/academia-geek/image/upload/v1634676199/domiciliario_m3clbc.png" alt="chat de whatsapp-whatsapp-chat" onClick={() => handleChatWsp()} />
                    </div>
                    <h1 className="titulo-carrito"> Carrito de compras </h1>
                    <table className="table">
                        <thead style={{ color: "white;" }}>
                            <tr>
                                <th scope="col" className="th-none">#</th>
                                <th scope="col">Item</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col" className="th-none">Acci??n</th>
                                <th scope="col">Precio unidad</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        {
                            (carrito) ?
                                (
                                    carrito.map((element, index) => (
                                        <tbody key={index} id="items" style={{ color: "white;" }}>
                                            <tr>
                                                <th scope="row" className="th-none">{element.codigo}</th>
                                                <td>{element.nombre}</td>
                                                <td>{element.compra}</td>
                                                <td className="th-none">
                                                    <button
                                                        className="btn btn-info btn-sm btnsumar"
                                                        id="btn-carrito-pagar"
                                                        onClick={() => btnSumar(element.codigo)}
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        className="btn  btn-danger btn-sm btnrestar"
                                                        onClick={() => btnRestar(element.codigo)}
                                                        id="vaciar-carrito"
                                                    >
                                                        -
                                                    </button>
                                                </td>
                                                <td>$ <span>{element.precio}</span></td>
                                                <td>$ <span>{element.compra * element.precio}</span></td>
                                            </tr>
                                        </tbody>

                                    )
                                    )
                                ) :
                                <tr id="footer">
                                    <th scope="row" colspan="4">Carrito vac??o - comience a comprar!</th>
                                </tr>
                        }

                        <tfoot >
                            <th scope="row" colspan="1" id="th-total">Total productos</th>
                            <td>{tCantidad}</td>
                            <td>

                                <button className="btn btn-info" id="btn-carrito-pagar" onClick={(e) => finalizarCompra(e, 'finalizar-compra')}   >
                                    Pagar
                                </button>
                                <button className="btn btn-danger" id="vaciar-carrito" onClick={(e) => vaciarCarro(e, 'vaciar-carrito')}>
                                    Vaciar todo
                                </button>

                            </td>
                            <td className="font-weight-bold">$ <span>{tPrecio}</span></td>
                        </tfoot>
                    </table>
                </div>
            ) : <PasarelaPago total={carrito} TotalPrecio={tPrecio} TotalProductos={tCantidad} vaciar={vaciarCarro} />}



        </div>
    )
}
