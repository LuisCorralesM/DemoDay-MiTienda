import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { agregarAsincrono, deleteAsincrono } from '../actions/actionProducto'

   //Causa del bucle infinito
//    useEffect(() => {
//        dispatch(agregarAsincrono)
//    }, [dispatch])
export const ListarProductos = ({ handleEdit }) => {
    const { productos } = useSelector(store => store.producto)
    console.log(productos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(agregarAsincrono)
    }, [dispatch])

    return (
        <div>
            <h1> Productos dispobibles en la tienda </h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Fecha ingreso</th>
                        <th>Imagen</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (productos) ?
                            (

                                productos.map((element, index) => (

                                    <tr key={index}>
                                        <td>{element.codigo}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.precio}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><img src={element.imagen} alt="" width="50px" /></td>
                                        <td>{element.cantidad}</td>
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