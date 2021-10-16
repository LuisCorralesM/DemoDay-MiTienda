import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { agregarAsincrono, deleteAsincrono } from '../actions/actionProducto'
import '../style/styleComponents/listarProductos.css';

export const ListarProductos = ({ handleEdit }) => {
    const { productos } = useSelector(store => store.producto);

    // Esta lógica es para hacer que en la tabla se puedan pintar los productos segun la tienda seleccionada
    let tiendas = [];

    const [tiendaSelect, setTiendaSelect] = useState()
    const [recargar, setRecargar] = useState(false)

    if (productos) {
        productos.forEach(element1 => {
            tiendas.push(element1.tienda)
        });

        tiendas = tiendas.reduce((a, e) => {
            if (!a.find(d => d == e)) {
                a.push(e);
            }
            return a
        }, [])
        tiendas.pop()
    }
    console.log(tiendas);

    const hanleTienda = (tienda) => {
        let seleccionada = []
        productos.forEach(e => {
            if (tienda === e.tienda) {
                seleccionada.push(e)
                console.log(seleccionada);
                setTiendaSelect(seleccionada)
                setRecargar(true)
            }
        })
        if(tienda === 'todas'){
            setTiendaSelect(productos)
            setRecargar(true)
    }
    }
    console.log(tiendaSelect);
    //----------------------------------------------------------------------------------------------
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(agregarAsincrono)
    }, [dispatch])

    return (
        <div>
            <h1 className="titulo-tabla-listar-productos"> Productos disponibles en la tienda </h1>
            <h2 className="subtitulo-filtro-tiendas">Filtar</h2>
            <ul className="lista-tiendas">
                <li
                onClick={() => { hanleTienda('todas') }}
                >
                    Todas
                </li>
                {
                    (tiendas) ?
                        (
                            tiendas.map((tienda, i) => (
                                <li key={i}
                                    onClick={() => { hanleTienda(tienda) }}
                                >
                                    {tienda}
                                </li>
                            ))
                        ) :
                        <div></div>
                }
            </ul>
            <table className="tablaProductos">
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
                        (tiendaSelect && recargar) ?
                            (

                                tiendaSelect.map((element, index) => (

                                    <tr key={index} className="cuerpo-tabla-litar-productos">
                                        <td>{element.codigo}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.precio}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><img src={element.imagen} alt="" width="50px" height="35px" /></td>
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
                            (

                                productos.map((element, index) => (

                                    <tr key={index} className="cuerpo-tabla-litar-productos">
                                        <td>{element.codigo}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.precio}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><img src={element.imagen} alt="" width="50px" height="35px" /></td>
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

                            )

                        // <p>Datos no disponibles</p>
                    }


                </tbody>

            </table>

        </div>
    )
}