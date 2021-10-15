import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'

export const Estadisticas = () => {
       let infoTienda = JSON.parse(localStorage.getItem("carro"));

      

    return (
        <div>
            <h3> Estadísticas por tienda:</h3>
            <br/>
            <PieChart
              animate
              animationDuration={750}
              animationEasing="ease-out"
              center={[125, 50]}
              data={[
     {
     color: "#6F8DAC",
     title: "Producto #1",
     value: 33.3,
     },
     {
     color: "#B4CFEA",
     title: "Producto #2",
     value: 50,
     },
     {
     color: "#00a2e8",
     title: "Producto #3",
     value: 16.7,
     },
   ]}
              lengthAngle={360}
              lineWidth={15}
              paddingAngle={0}
              radius={50}
              rounded
              startAngle={0}
              viewBoxSize={[250, 250]}
              label = {(data) => data.dataEntry.title+": "+data.dataEntry.value+"%"}
              labelPosition={110}
              labelStyle={{
                fontSize: "10px",
                fontColor: "FFFFFA",
                fontWeight: "400",
              }}
            />
            
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
