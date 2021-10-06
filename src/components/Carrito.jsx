import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import PasarelaPago from './PasarelaPago'

export const Carrito = () => {
    useEffect(() => {
        let initialStateTienda = 0

        const carrito = JSON.parse(localStorage.getItem("carro"))
        initialStateTienda = carrito.reduce((acc, { compra, precio }) => acc + (precio * compra), 0)

        setTPrecio(initialStateTienda)
    }, [])

    const carrito = JSON.parse(localStorage.getItem("carro"))
    const [recargar, setRecargar] = useState(false)

    // estado para guardar los totales del carrito: total cantidad / total precio

    const [tCantidad, setTCantidad] = useState(1)

    const [tPrecio, setTPrecio] = useState(0)

    // metodo para hallar totales
    console.log(carrito);
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
                        if (window.confirm('Seguro')) {
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
        vaciarCarro = () => {
            setTCantidad(0)
            setTPrecio(0)
            localStorage.clear();
            setRecargar(!recargar)
        }

    return (
        <div>
            <div >
                <h1> Carrito de compras </h1>
                <table class="table">
                    <thead style={{ color: "white;" }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acción</th>
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
                                            <th scope="row">{element.codigo}</th>
                                            <td>{element.nombre}</td>
                                            <td>{element.compra}</td>
                                            <td>
                                                <button
                                                    className="btn btn-info btn-sm sumar"
                                                    onClick={() => btnSumar(element.codigo)}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm restar"
                                                    onClick={() => btnRestar(element.codigo)}
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
                                <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                            </tr>
                    }

                    <tfoot style={{ color: "white;" }}>
                        <th scope="row" colspan="2">Total productos</th>
                        <td>{tCantidad}</td>
                        <td>
                            <button className="btn-carrito-vaciar" id="vaciar-carrito" onClick={() => vaciarCarro()}>
                                Vaciar todo
                            </button>
                            <button className="btn btn-info btn-sm" id="finalizar-compra" style={{ color: "white" }, { fontSize: "16px;" }} >
                                <Link to="/pasarelaPago">  Finalizar compras </Link>
                            </button>
                        </td>
                        <td className="font-weight-bold"></td>
                        <td className="font-weight-bold">$ <span>{tPrecio}</span></td>
                    </tfoot>
                </table>
            </div>

            <PasarelaPago total={carrito}/>
        </div>
    )
}
