import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listAsincronica } from '../actions/actionProducto'
import { Link } from "react-router-dom"
import '../style/styleComponents/tienda.css'

const Tienda = () => {

    const { productos } = useSelector(store => store.producto)

    const dispatch = useDispatch()
    dispatch(listAsincronica())

    const [modal, setModal] = useState(false)
    const abrirModal = () => {
        setModal(!modal)
        console.log(modal);
    }

    let productoCarrito = []
    
    const agregarCarrito = (id) => {

        productos.forEach(producto => {

            if(producto.codigo === id){
                producto.compra = 1;
                if (localStorage.getItem("carro")) {
                    let historialCompra = JSON.parse(localStorage.getItem("carro"))
                    historialCompra.forEach(prod =>{
                        productoCarrito.push(prod)
                    })
                }
                productoCarrito.push(producto)
            }
        });
        console.log(productoCarrito);
        localStorage.setItem("carro", JSON.stringify(productoCarrito))
    }

    return (

        <div>

            {
                (productos) ?
                    (
                        productos.map((element, index) => (

                            <div key={index}>

                                <div className="contenedor-producto" >
                                    <div className="contenedor-img">
                                        <img src={element.imagen} className="imagen-producto" alt="..." />
                                    </div>
                                    <div className="contenedor-descripcion">
                                        <h1 className="nombre-producto">Nombre: {element.nombre}</h1> 
                                        <p className="descripcion" >Descripción: {element.descripcion}</p>
                                        <p className="precio">Precio: ${element.precio}</p>
                                        <button className= "bnt-agregar-carrito" onClick={() => agregarCarrito(element.codigo)}> Agregar al carrito </button>
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
