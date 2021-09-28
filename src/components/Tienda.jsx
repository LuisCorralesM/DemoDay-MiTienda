import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import {Link} from "react-router-dom"

const Tienda = () => {

    const [modal, setModal] = useState(false)
    const abrirModal = () => {
        setModal(!modal)
        console.log(modal);
    }

        return (

            <div>
                <h1 className="text-center m-3">Productos</h1>
                <div className="card mx-auto" style={{width: "18rem"}} >
                    <img src="assets/img/vendedor.png" className="card-img-top" alt="..." style={{width: "50px"}}/>
                    <div className="card-body">
                        <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={()=>abrirModal()}> Ver detalle </button>
                    </div>
                </div>

                <Modal id="modal-modificar" isOpen = {modal}>
                    <div id="X">
                        <div onClick={()=>abrirModal()} className="fs-1 p-1 text-light bg-dark" style={{width: "30px"}}> X </div>
                    </div>
                    <ModalHeader>

                        <h4>  </h4>
                        <img id="imagen-descripcion" alt="" />


                    </ModalHeader>

                    <ModalBody>
                        <p> ... </p>
                        <p>... </p>
                        <p>.... </p>
                        <p>.... </p>
                    </ModalBody>

                    <ModalFooter>

                        <div> <Link to = "/carrito"> Comprar </Link> </div>
                    </ModalFooter>


                </Modal>



            </div>
        )
    }

export default Tienda
