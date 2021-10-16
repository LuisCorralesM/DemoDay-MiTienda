import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { agregarAsincrono, deleteAsincrono } from '../actions/actionProducto'
import '../style/styleComponents/listarProductos.css';

export const ListarProductos = ({ handleEdit }) => {
    const { productos } = useSelector(store => store.producto)
    console.log(productos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(agregarAsincrono)
    }, [dispatch])

    return (
        <div>
            <h1 className="titulo-tabla-listar-productos"> Productos disponibles en la tienda </h1>
            <table className = "tablaProductos">
                <thead>
                    <tr className="cabecera-tabla-litar-productos">
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Fecha ingreso</th>
                        <th>Imagen</th>
                        <th>Stock</th>
                        <th>Tienda</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (productos) ?
                            (

                                productos.map((element, index) => (

                                    <tr key={index} className="cuerpo-tabla-litar-productos">
                                        <td>{element.codigo}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.precio}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><img src={element.imagen} alt="" width="50px" /></td>
                                        <td>{element.cantidad}</td>
                                        <td>{element.tienda}</td>
                                        <td>
                                            <button className="btn btn-secondary" onClick={() => handleEdit(element)}>
                                                Editar
                                            </button>
                                            <button className="btn btn-danger" onClick={() => dispatch(deleteAsincrono(element.nombre))}>
                                                Eliminar
                                            </button>

                                        </td>

                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }


                </tbody>

            </table>

        </div>
    )
}