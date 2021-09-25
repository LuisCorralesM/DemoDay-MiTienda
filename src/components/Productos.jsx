import React from 'react'

const Productos = () => {
    return (
        <>
            
            <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center"> Listado de productos </h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre del producto </th>
                                <th scope="col"> Descripcion del producto</th>
                                <th scope="col"> Inventario </th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr >
                                <td> Producto x</td>
                                <td> Descripción x </td>
                                <td> 2 </td>
                                <td><button className="btn btn-secondary" >
                                    Modificar
                                   </button><button className="btn btn-danger" >
                                    Borrar
                                   </button>
                                </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
            
        </>
            
        
    )
}

export default Productos
