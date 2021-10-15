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

        if(JSON.parse(localStorage.getItem('carro'))){
            initialStateCantidad = carrito1.reduce((acc, { compra }) => acc + compra, 0);
        }else{
            initialStateCantidad = 0;
        }

        setTCantidad(initialStateCantidad);


        // estado inicial de 'tPrecio'
        let initialStatePrecio = 0;

        const carrito2 = JSON.parse(localStorage.getItem("carro"));

        if(JSON.parse(localStorage.getItem('carro'))){
            initialStatePrecio = carrito2.reduce((acc, { compra, precio }) => acc + (precio * compra), 0);
        }else{
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
                        if (window.confirm(`¿Está seguro de eliminar el producto: ${producto.nombre} ?`)) {
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
        vaciarCarro = (e,accion) => {
            dispararAnimacion(e,accion)
            setTCantidad(0)
            setTPrecio(0)
            localStorage.clear();
            setRecargar(!recargar)
        }
        
        const finalizarCompra= (e,accion) => {
            dispararAnimacion(e,accion)
            setTimeout(() => {
                setPasarela(!pasarela)
            }, 500);
        }

            // Animacion en cada cambio de página

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
        
    return (
        <div className="contenedor-carrito">
            {(pasarela) ? (
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
                            <button className="btn-carrito-vaciar" id="vaciar-carrito" onClick={(e) => vaciarCarro(e, 'vaciar-carrito')}>
                                Vaciar todo
                            </button>
                            <button onClick = {(e)=>finalizarCompra(e,'finalizar-compra')}className="btn btn-info btn-sm" id="finalizar-compra" style={{ color: "white" }, { fontSize: "16px;" }} >
                                 Pagar
                            </button>
                        </td>
                        <td className="font-weight-bold"></td>
                        <td className="font-weight-bold">$ <span>{tPrecio}</span></td>
                    </tfoot>
                </table>
            </div>
            ): <PasarelaPago total={carrito} TotalPrecio={tPrecio} TotalProductos={tCantidad} vaciar = {vaciarCarro}/>}
            
           
            
        </div>
    )
}
