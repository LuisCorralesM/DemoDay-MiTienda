import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listAsincronica } from '../actions/actionProducto'
import { Link } from "react-router-dom"
import '../style/styleComponents/tienda.css'
import Swal from 'sweetalert2'

const Tienda = () => {
    const { productos } = useSelector(store => store.producto)
    const nombreTienda = localStorage.getItem('tienda')
    let productoCarrito = []
    // console.log(productos)

    // Listas de mercado pre-definidas ----------------------------------------------

    const lista1 = [];
    productos.forEach(producto => {
        if (producto.nombre === 'Cerveza Corona' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Pan Baguette' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Leche en caja' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Arroz' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        }
    })


    console.log("lista mercado sugerido" + lista1);

    const [pintar, setPintar] = useState(false)

    const pintarLista = (clave) => {
        localStorage.setItem("lista1", JSON.stringify(lista1))

        if (clave = 'pintar') {
            setPintar(true)
        }
    }

    const agregarCarritoLista = (lista) => {
        lista.forEach(element => {
            element.compra = 1;
            if (localStorage.getItem("carro")) {
                let historialCompra = JSON.parse(localStorage.getItem("carro"))
                historialCompra.forEach(prod => {
                    productoCarrito.push(prod)
                })
            }
            productoCarrito.push(element)
        });
        console.log(productoCarrito);
        localStorage.setItem("carro", JSON.stringify(productoCarrito))
        Swal.fire({
            title: `Lista añadida al carrito correctamente`,

            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }


    // Productos individuales  ------------------------------------------------------

    // console.log("nombre de la tienda seleccionada: " + nombreTienda)
    const productosTienda = productos.filter(producto => producto.tienda === nombreTienda)
    // console.log(productosTienda);


    const dispatch = useDispatch()
    // dispatch(listAsincronica())

    const [modal, setModal] = useState(false)
    const abrirModal = () => {
        setModal(!modal)
        console.log(modal);
    }

    const agregarCarrito = (id) => {

        productos.forEach(producto => {

            if (producto.codigo === id) {
                producto.compra = 1;
                if (localStorage.getItem("carro")) {
                    let historialCompra = JSON.parse(localStorage.getItem("carro"))
                    historialCompra.forEach(prod => {
                        productoCarrito.push(prod)
                    })
                }
                productoCarrito.push(producto)
            }
        });
        console.log(productoCarrito);
        localStorage.setItem("carro", JSON.stringify(productoCarrito))
        Swal.fire({
            title: `Producto añadido correctamente`,

            icon: 'success',
            confirmButtonText: 'Aceptar'
        })

    }

    return (

        <div className="contenedor-tienda">

            <div className="listas-de-mercado">
                <ul>
                    <button onClick={() => { pintarLista('pintar') }}>
                        Lista de mercado #1
                    </button>
                </ul>
            </div>

            <h1 className="tienda-seleccionada">{nombreTienda}</h1>

            {
                (pintar) ?
                    (
                        <div className="contenedor-lista-personalizada" >
                            <h1 className="titulo-lista-personalizada">Lista de mercado #1</h1>
                            <div className="contenedor-tabla">
                                <table>
                                    <thead>
                                        <tr className="cabecera-tabla">
                                            <th>
                                                Producto
                                            </th>
                                            <th>
                                                descripcion
                                            </th>
                                            <th>
                                                Precio
                                            </th>
                                            <th>
                                                Cantidad
                                            </th>
                                            <th>
                                                Disponibles
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            lista1.map((element, index) => (
                                                <tr key={index} className="cuerpo-tabla">
                                                    <td>
                                                        {
                                                            element.nombre
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            element.descripcion
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            element.precio
                                                        }
                                                    </td>
                                                    <td>
                                                        1   
                                                    </td>
                                                    <td>
                                                        {
                                                            element.cantidad
                                                        }
                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                                <div className="btns-tabla-lista">
                                    <button className="bnt-tabla-agregar-carrito" onClick={() => agregarCarritoLista(lista1)}> Agregar lista al carrito </button>
                                    <Link to="/carrito"><button className="btn-tabla-ir-carrito">Ir al carrito</button></Link>
                                    <button onClick={() => setPintar(false)} className="btn-tabla-contraer">Contraer tabla</button>
                                </div>
                            </div>
                            <br />
                            <h2 className="subtitulo-lista-personalizada">Seguir agregando productos al carrito <span className="fs-1">↓</span></h2>
                            <hr />
                        </div>
                    )
                    : <div></div>
            }

            {
                (productosTienda) ?
                    (
                        productosTienda.map((element, index) => (

                            <div key={index}>

                                <div className="contenedor-producto" >
                                    <div className="contenedor-img">
                                        <img src={element.imagen} alt="..." className="img-producto" />
                                        <div className="contenedor-img-pequeñas">
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                            <img src={element.imagen} className="img-producto-pequeña" alt="..." />
                                        </div>
                                    </div>
                                    <div className="contenedor-descripcion">
                                        <h1 className="nombre-producto">{element.nombre}</h1>
                                        <p className="descripcion" >{element.descripcion}</p>
                                        <p className="precio">${element.precio}</p>
                                        <p className="precio">Disponibles: {element.cantidad}</p>
                                        <button className="bnt-agregar-carrito" onClick={() => agregarCarrito(element.codigo)}> Agregar al carrito </button>
                                        <Link to="/carrito"><button className="btn-ir-carrito">Ir al carrito</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    ) :
                    <p>Datos no disponibles</p>
            }


        </div>
    )
}

export default Tienda
