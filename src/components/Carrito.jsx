import React from 'react'
import {Link} from "react-router-dom"

export const Carrito = () => {
    return (
        <div>

            <h1> Carrito de compras </h1>
            <table class="table">
                <thead style={{color: "white;"}}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="items" style={{color: "white;"}}>
                    <tr>
                        <th scope="row">id</th>
                        <td>Café</td>
                        <td>1</td>
                        <td>
                            <button className="btn btn-info btn-sm sumar"  >
                                +
                            </button>
                            <button className="btn btn-danger btn-sm restar"  >
                                -
                            </button>
                        </td>
                        <td>$ <span>500</span></td>
                    </tr>
                </tbody>
                <tfoot style={{color: "white;"}}>
                    <th scope="row" colspan="2">Total productos</th>
                    <td>10</td>
                    <td>
                        <button className="btn-carrito-vaciar" id="vaciar-carrito">
                            Vaciar todo
                        </button>
                        <button className="btn btn-info btn-sm" id="finalizar-compra" style={{color: "white"}, {fontSize: "16px;"}} >
                            <Link to = "pasarelaPago">Finalizar compras </Link>
                        </button>
                    </td>
                    <td className="font-weight-bold">$ <span>5000</span></td>
                    <tr id="footer">
                        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                    </tr>
                </tfoot>
            </table>









        </div>
    )
}
