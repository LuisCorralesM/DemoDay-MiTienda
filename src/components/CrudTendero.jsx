import React from 'react'

export const CrudTendero = () => {
   
   
    return (
        <>
            <div className="card mt-5">
            <div className="card-body">
                <form onSubmit>
                    <h1> Gestionar productos</h1>
                    <hr />
                    <div className="orm-group row">
                        <label className="col-form-label">Nombre de producto </label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Ingrese nombre del producto"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className=" col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                className="form-control"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group row mt-3"> 
                        <label className="col-form-label"> Imagen del producto </label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="file"
                                name="imagen"
                                className="form-control"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label className="col-form-label"> Descripcion del producto </label>
                            <textarea
                                name="descripcion"
                                className="form-control"
                                autoComplete="off">
                            </textarea>
                        </div>
                    </div>
    
                </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>

        
            
        </>
    )
}

