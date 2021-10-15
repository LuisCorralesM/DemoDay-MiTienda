import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/fileUpload';
import { agregarAsincrono, Edit, listAsincronica } from '../actions/actionProducto';
import { ListarProductos } from './ListarProducto';
import { activeProduct } from "../actions/actionProducto"
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../style/styleComponents/crudTendero.css';
import { setLocale } from 'yup';
import Comunicate from './Comunicate';

const CrudTendero = (props) => {

    const { history } = props;

    const dispatch = useDispatch();
    const [recargar, setRecargar] = useState(false);
    const { name } = useSelector(store => store.login)

    const [values, handleInputChange, reset, setValues] = useForm({
        codigo: 0,
        nombre: "",
        precio: 0,
        descripcion: "",
        fecha: "",
        imagen: "",
        cantidad: 0,
        compra: 0,
        tienda: ""
    })

    let { codigo, nombre, precio, descripcion, fecha, imagen, cantidad, compra, tienda } = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(agregarAsincrono(codigo, nombre, precio, descripcion, fecha, imagen, cantidad, compra, tienda));
        reset();
        setRecargar(!recargar)
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
        setValues({
            ...producto
        })
    }
    const handlePut = (e) => {
        e.preventDefault();
        dispatch(Edit(values))
        reset()
        setEditform(false)
        setRecargar(!recargar)
    }
    
    // validar usuario admin
    // NOTA: FALTA HACER EL LOGOUT
    const usuarioAdmin = [];

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("uAdmin"))){
            setUsuarioValido(true)
        }
    }, []);

    const [usuarioValido, setUsuarioValido] = useState(false);  //OJO: inicializarlo en false

    const validarUsuarioAdmin = () => {
        const
            email = document.getElementById('inputEmail').value,
            password = document.getElementById('inputPassword').value

        if (email === 'luis' && password === '123') {
            Swal.fire({
                title: `Bienvenido ${name} `,
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
            usuarioAdmin.push(email,password)
            localStorage.setItem("uAdmin", JSON.stringify(usuarioAdmin))
            setUsuarioValido(true)
        }else{
            Swal.fire({
                title: `Usted no puede acceder a la zona de administración de productos `,
                icon: 'error',
                confirmButtonText: 'Reintentarlo'
              })
            
        }
    }

    // Estadisticas, ir a:
    
    const RedireccionEstadisticas = () =>{
            props.history.push('/estadisticas');
    }

    return (
        <div className="crud-container">
            {
                (!usuarioValido)
                    ? (
                        <div className="contenedorLogin">
                            <div className="contenedor-login">
                                <form className="form-signin formulario-registro">
                                    <div>
                                        <h1 className="titulo-login"> Administracion de productos de Mi Tienda </h1>
                                        <p> Esta seccion te permitira agregar productos si eres uno de los usuarios tenderos que esta registrado en nuestra base de datos. Ingresa con las credenciales suministradas por el administrador de la página </p>
                                        <input
                                            type="text"
                                            id="inputEmail"
                                            className="form-control mt-1"
                                            placeholder="Username"
                                            required=""
                                            name="email"
                                        />

                                        <input
                                            type="Password"
                                            id="inputPassword"
                                            className="form-control mt-1"
                                            placeholder="Contraseña"
                                            required=""
                                            name="password"
                                        />

                                        <button
                                            type="submit"
                                            className="boton-login-continuar"
                                            onClick={() => validarUsuarioAdmin()}
                                        >
                                            Continuar{/* <Link to = "/mapa" className="text-white boton-login text-decoration-none">  Login  </Link> */}

                                        </button>
                                        <hr />
                                    </div>
                                </form>
                                {/* {redirection && <Redirect to="/tienda" />} */}
                            </div>
                        </div>

                    )
                    : <div></div>
            }

            {
                (usuarioValido)
                    ? (
                        <div className = "interfazCrud">
                            <h1 className = "titulo-crud"> Zona de gestión de productos </h1>
                            <form className = "formProductos">
                                <div id="gestionP">
                                
                                
                                <h2> Este formulario te permite registrar nuevos productos a tu tienda. </h2>
                                
                                </div>
                                

                               
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
                                            onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="fecha"> Tienda </label>

                                        <select className="form-control"
                                            name="tienda"
                                            id="tienda"
                                            value={tienda}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Selecciona una tienda</option>
                                            <option value="Tienda El Flamingo"> Tienda El Flamingo</option>
                                            <option value="Tienda Del Campo" selected> Tienda Del Campo</option>
                                            <option value="Tienda El Diamante"> Tienda El Diamante</option>
                                            <option value="Tienda Los Arrayanes"> Tienda Los Arrayanes</option>
                                            <option value="Tienda El Guadual"> Tienda El Guadual</option>
                                        </select>
                                       
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
                                    <div  className="form-group col-md-4">


                                       
                                            {
                                                !editForm
                                                    ?
                                                    <button
                                                    id = "btn-enviar"
                                                        className="btn"
                                                        type="submit" onClick={handleRegistro}>Enviar</button>
                                                    :
                                                    <button
                                                        id = "btn-enviar"
                                                        className="btn"
                                                        type="submit" onClick={handlePut}>Guardar</button>

                                            }
                                        
                                    </div>

                                    <div className="form-group col-md-4">
                                    <button onClick ={()=>RedireccionEstadisticas()} id= "btnEstadisticas"><span> Ver Estadísticas </span></button>
                                    </div>


                                </div>
                            </form>

                            <ListarProductos handleEdit={handleEdit} />
                            

                        </div>

                    )
                    : (
                        <div></div>
                    )
            }
        </div>
    )
}

export default withRouter(CrudTendero)