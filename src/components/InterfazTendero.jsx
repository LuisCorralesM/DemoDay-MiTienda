import React from 'react'
import CrudTendero from './CrudTendero'
import Productos from './Productos'

export const InterfazTendero = () => {
    return (
        <div className="container text-center">
        <header><h1> Interfaz de Tendero </h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            <CrudTendero/>
          </div>
          <div className="col-md-6">
            <Productos/>
          </div>
        </div>
      </div>
    )
}
