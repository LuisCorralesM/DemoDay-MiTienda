import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listAsincronica } from '../actions/actionProducto'
import { Link } from "react-router-dom"
import '../style/styleComponents/tienda.css'
import Swal from 'sweetalert2'

import { compraAsincrona } from "../actions/actionCompra"

const Tienda = () => {
    const { productos } = useSelector(store => store.producto)
    const nombreTienda = localStorage.getItem('tienda')
    let productoCarrito = []
    const [listaSelect, setListaSelect] = useState([])
    // console.log(productos)

    // Listas de mercado pre-definidas ----------------------------------------------

    const lista1 = [];
    productos.forEach(producto => {
        if (producto.nombre === 'Panela' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Pan Baguette' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Leche en caja' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Arroz' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Huevos Mixtos' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Queso Sabanero' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Lentejas' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Pollo' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Azucar' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'papas' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Leche en polvo' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Aceite' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        } else if (producto.nombre === 'Cerveza Corona' && producto.tienda === nombreTienda) {
            lista1.push(producto)
        }

    })

    const lista2 = [];
    productos.forEach(producto => {
        if (producto.nombre === 'Queso Sabanero' && producto.tienda === nombreTienda) {
            lista2.push(producto)
        } else if (producto.nombre === 'Pan Baguette' && producto.tienda === nombreTienda) {
            lista2.push(producto)
        } else if (producto.nombre === 'Leche en caja' && producto.tienda === nombreTienda) {
            lista2.push(producto)
        } else if (producto.nombre === 'Arroz' && producto.tienda === nombreTienda) {
            lista2.push(producto)
        } else if (producto.nombre === 'Huevos Mixtos' && producto.tienda === nombreTienda) {
            lista2.push(producto)
        }
    })


    console.log("lista mercado sugerido" + lista1);

    const [pintar, setPintar] = useState(false)

    const pintarLista1 = (clave) => {
        localStorage.setItem("lista1", JSON.stringify(lista1))

        if (clave = 'pintar') {
            setPintar(!pintar)
            setListaSelect(lista1)
        }
    }

    const pintarLista2 = (clave) => {
        localStorage.setItem("lista2", JSON.stringify(lista2))

        if (clave = 'pintar') {
            setPintar(!pintar)
            setListaSelect(lista2)
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
                dispatch(compraAsincrona(producto))
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

    // btn-whatsapp

    const handleChatWsp = () => {
        let
            numero = 573126505633,
            mensaje = '¿Qué costo tiene el domicilio?';
        mensaje.replaceAll(" ", '%')
        window.open(`https://wa.me/+${numero}?text=${mensaje}`)
    }

    // btn-subir 

    const subir = (e)=> {
        if(e.target.matches('.boton-subir, .subir'))window.scrollTo(0,0)
    }

    // filtro

    const
        filtrar = (e) => {
            if (e.target.matches('.card-filter')) {
                if (e.key === 'Escape') e.target.value = ""
                document.querySelectorAll('.card').forEach(el => {
                    let contenido = el.textContent.toLowerCase().includes(e.target.value)
                    if (contenido === true) {
                        el.classList.remove('ignore')
                    } else {
                        el.classList.add('ignore')
                    }
                })
            }
        }



    return (

        <div className="contenedor-tienda">

            {/* btn-whatsap */}
            <div className="btn-whatsapp">
                <img src="assets/img/wsp.png" alt="chat de whatsapp-whatsapp-chat" width="60px" onClick={() => handleChatWsp()} />
            </div>

            {/*  btn-subir */}
            <button class="boton-subir" onClick={e=>subir(e)}>
                <span className='subir'>↑</span>
            </button>

            <h1 className="tienda-seleccionada">{nombreTienda}</h1>


            {/* Filtro */}
            <div className="filtro-de-busqueda-productos" data-scroll-spy>
                <input type="search" placeholder="Buscar..." class="card-filter input-buscar" onKeyUp={(e) => filtrar(e)} />
            </div>

            {/* Listas predeterminadas */}
            <div className="listas-de-mercado">
                <ul>
                    <button className="btn btn-primary mx-2 my-1" onClick={() => { pintarLista1('pintar') }}>
                        Lista de mercado familiar
                    </button>
                    <button className="btn btn-primary mx-2 my-1" onClick={() => { pintarLista2('pintar') }}>
                        Lista de mercado personal
                    </button>
                </ul>
            </div>

            {
                (pintar) ?
                    (
                        <div className="contenedor-lista-personalizada" >
                            <h1 className="titulo-lista-personalizada">Lista de mercado </h1>
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
                                            listaSelect.map((element, index) => (
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
                                    <button className="bnt-tabla-agregar-carrito mx-2 my-1" onClick={() => agregarCarritoLista(lista1)}> Agregar lista al carrito </button>
                                    <Link to="/carrito"><button className=" btn-tabla-ir-carrito mx-2 my-1">Ir al carrito</button></Link>
                                    <button onClick={() => setPintar(false)} className="  btn-tabla-contraer mx-2 my-1"> Cerrar lista de mercado </button>
                                </div>
                            </div>
                            <br />
                            <h2 className="subtitulo-lista-personalizada">Seguir agregando productos al carrito <span className="fs-1">↓</span></h2>
                            <hr />
                        </div>
                    )
                    : <div></div>
            }

            <div className="cards">
                {
                    (productosTienda) ?
                        (
                            productosTienda.map((element, index) => (

                                <div key={index} className="card" >
                                    <div className="contenedor-img">
                                        <img src={element.imagen} alt="..." className="img-producto" />
                                    </div>
                                    <div className="contenedor-descripcion">
                                        <h1 className="nombre-producto">{element.nombre}</h1>
                                        <p className="descripcion" >{element.descripcion}</p>
                                        <p className="precio">${element.precio}</p>
                                        <p className="precio">Disponibles: {element.cantidad}</p>
                                        <button className=" mx-2 my-1 bnt-agregar-carrito" onClick={() => agregarCarrito(element.codigo)}> Agregar al carrito </button>
                                        <Link to="/carrito"><button className=" mx-2 my-1 btn-ir-carrito">Ir al carrito</button></Link>
                                    </div>
                                </div>
                            )
                            )
                        ) :
                        <p>Datos no disponibles</p>
                }
            </div>


        </div>
    )
}

export default Tienda
