import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import '../style/styleComponents/estadisticas.css'

export const Estadisticas = () => {
  // NOTA: hay que guardar los productos del carrito asociados a la cantidad guardada en 'compra' (infoTienda[].compra)
  // y validar si el producto está repetido dentro del 'carrito'; en tal caso hay que unificarlo y calcular el total 
  //"compra"

  let infoTienda = JSON.parse(localStorage.getItem("carro"));
  let productos = [];
  let prodAcumulado = [];

  infoTienda.forEach(element => {
    productos.push(element.nombre)
  }); 

  productos.forEach((producto, i) => {

    let contador = 1;

    infoTienda.forEach((element, j) => {
      if (producto === element.nombre) {
        // si contador es igual a 0 agregamos el producto, de lo contrario, quiere decir que ya existe
        if(contador === 1){
          prodAcumulado.push(
            {
              nombre:element.nombre,
              veces: element.compra
            }
          )  
        }
        if(contador > 1){
          // si es la primer vez que se agrega, al sumarle 'contador' al 'prodAcumulado[i].veces', no pasa nada porque contador vale '1'
          // si es la segunda vez, ya contador vale '2' y se debe sumar ambas cantidades
          
          // prodAcumulado[i].veces = prodAcumulado[i].compra + prodAcumulado[j].compra
        }
        contador++
      }
    });
  });
  
  // console.log("carro acu" + prodAcumulado);


  const dataGrafico = [];

  if (prodAcumulado.length === 1) {
    dataGrafico.push(
      {
        color: "#6F8DAC",
        title: prodAcumulado[0].nombre,
        value: Math.round((prodAcumulado[0].veces / prodAcumulado[0].veces)*100)}
    )
  } else if (prodAcumulado.length === 2) {
    let
      valor1 = Math.round((prodAcumulado[0].veces)),
      valor2 = Math.round((prodAcumulado[1].veces)),
      total = valor1 + valor2,

      respuesta1 = Math.round((100/total)*valor1),
      respuesta2 = Math.round((100/total)*valor2)

    console.log(valor1);
    console.log(valor2);
    dataGrafico.push(
      {
        color: "#6F8DAC",
        title: prodAcumulado[0].nombre,
        value: respuesta1
      },
      {
        color: "#B4CFEA",
        title: prodAcumulado[1].nombre,
        value: respuesta2
      }
    )
  } else if (prodAcumulado.length === 3) {
    let
      valor1 = Math.round(((prodAcumulado[0].veces))),
      valor2 = Math.round(((prodAcumulado[1].veces))),
      valor3 = Math.round(((prodAcumulado[2].veces))),
      total = valor1 + valor2 + valor3,

      respuesta1 = Math.round((100/total)*valor1),
      respuesta2 = Math.round((100/total)*valor2),
      respuesta3 = Math.round((100/total)*valor3)

    dataGrafico.push(
      {
        color: "#6F8DAC",
        title: prodAcumulado[0].nombre,
        value: respuesta1,
      },
      {
        color: "#B4CFEA",
        title: prodAcumulado[1].nombre,
        value: respuesta2,
      },
      {
        color: "#00a2e8",
        title: prodAcumulado[2].nombre,
        value: respuesta3,
      },
    )
  }
  // Aqui hay que hacer algunos calculos matemáticos
  else if (prodAcumulado.length > 3) {
    let
      valor1 = Math.round(((prodAcumulado[0].veces))),
      valor2 = Math.round(((prodAcumulado[1].veces))),
      valor3 = Math.round(((prodAcumulado[2].veces))),
      valor4 = 0;

    dataGrafico.push(
      {
        color: "#6F8DAC",
        title: prodAcumulado[0].nombre,
        value: valor1
      },
      {
        color: "#B4CFEA",
        title: prodAcumulado[1].nombre,
        value: valor2
      },
      {
        color: "#00a2e8",
        title: 'otros',
        value: valor3
      },
      {
        color: "#00a2e8",
        title: 'otros',
        value: valor4
      }
    )
  }

  // console.log('__: ' + dataGrafico);

  // console.log(productos);
  // console.log(prodAcumulado);

  return (
    <div className="contenedor-graficos">
      <h3 className="titulo-graficos"> Estadísticas de ventas:</h3>
      <div className="graficos">
        <PieChart
          className="grafico"
          animate
          animationDuration={750}
          animationEasing="ease-out"
          center={[150, 70]}

          data={dataGrafico}

          lengthAngle={360}
          lineWidth={15}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[250, 250]}
          label={(data) => data.dataEntry.title + ": " + data.dataEntry.value + "%"}
          labelPosition={110}
          labelStyle={{
            fontSize: "10px",
            fontColor: "FFFFFA",
            fontWeight: "400",
          }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          <td>Arroz</td>
          <td>50%</td>
        </tbody>
      </table>
    </div>
  )
}
