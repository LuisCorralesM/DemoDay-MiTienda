import React, {useEffect, useState}  from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/fileUpload';
import { agregarAsincrono, Edit, listAsincronica } from '../actions/actionProducto';
import { ListarProductos } from './ListarProducto';
import {activeProduct} from "../actions/actionProducto"

export const CrudTendero = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset, setValues] = useForm({
        codigo: 0,
        nombre: "",
        precio: 0,
        descripcion:"",
        fecha:"",
        imagen:"",
        cantidad: 0,
        compra: 0
    })

    let { codigo, nombre, precio, descripcion, fecha, imagen, cantidad, compra} = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(agregarAsincrono(codigo,nombre, precio, descripcion, fecha, imagen, cantidad, compra));
        reset();
    }

    const handlePictureClick = () => {
         document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    //causa del bucle infinito

    // useEffect(() => {
    //     dispatch(listAsincronica());
    //   }, [dispatch])

      const [editForm, setEditform] = useState(false)
      const handleEdit = (producto) => {
        
          dispatch(activeProduct(producto.id, producto))
           setEditform(true) 
           setValues ({
               ...producto
           })
        }
        const handlePut = (e)=> {
            e.preventDefault();
            dispatch(Edit(values))
            reset()
            setEditform(false)
        }


    return (
        <div className = "crud-container">

            <form>
                <h1> Zona de gestión de productos </h1>
                <div className="form-group">
                <div className="form-group col-md-4">
                        <label htmlFor="codigo">Código de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="codigo" 
                        id="codigo"
                        value={codigo}
                        onChange={handleInputChange} 
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange} 
                        required
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="precio">Precio de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="precio" 
                        id="precio" 
                        value={precio} 
                        onChange={handleInputChange} 
                        required 
                        /> 
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion"> Descripción </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        value={descripcion}
                        onChange={handleInputChange}
                        required
                         />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="cantidad"> Stocks </label>
                        <input 
                        className="form-control" 
                        type="number" 
                        name="cantidad" 
                        id="cantidad"
                        value={cantidad}
                        onChange={handleInputChange}
                        required
                         />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="fecha"> Fecha de ingreso del producto </label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                        value={fecha}
                        onChange={handleInputChange}/>
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn btn-secondary"
                           onClick={handlePictureClick} type="button"> Subir imagen de producto </button>
                        {/* <input type = "text"
                        value = {imagen}
                        onBlur = {handleInputChange}
                        id = "imagen"
                        name = "imagen"

                        /> */}
                        </div>
                    <div>

                        
                    <div className="d-grid gap-2 mx-auto">
                            {
                                !editForm
                                    ?
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick = {handleRegistro}>Enviar</button>
                                    :
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick={handlePut}>Guardar</button>

                            }
                        </div>
                    </div>

                   
                </div>
            </form>
        
            <ListarProductos handleEdit = {handleEdit}/>
            
        </div>
    )
}
