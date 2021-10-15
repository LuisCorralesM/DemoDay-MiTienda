// Mapa
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationExample from '../data/locationExample.json';
import { Link } from 'react-router-dom';
// import {Navbar} from './Navbar'
import { useDispatch } from "react-redux";
import { activeProduct } from "../actions/actionProducto";
import { useSelector } from "react-redux";
import '../style/styleComponents/mapa.css';
import * as L from "leaflet";

const Mapa = () => {

  const [state, setstate] = useState({
    longitude: 0,
    latitude: 0
  })

  useEffect(() => {
    handleUbicacion()
  }, [])
  const handleUbicacion = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setstate({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      }
    )
  }


  // Parámetros cálculo de distancia !!
  let proximidad = [] // Array de proximidad
  let distancias = { valor: 0 }
  let radioTierra = 6378;   // Radio de la Tierra !! (en Km)

  for (let i = 0; i < locationExample.length; i++) {

    let latitud = locationExample.map(data =>
      data.latitude)
    let longitud = locationExample.map(data =>
      data.longitude)

    let difLat = (latitud[i] - state.latitude) * Math.PI / 180; // diferencia de latitudes
    let difLong = (longitud[i] - state.longitude) * Math.PI / 180; //diferencia de longitudes
    let a = (Math.sin(difLat / 2) * Math.sin(difLat / 2)) + Math.cos(latitud[i]) * Math.cos(state.latitude) * (Math.sin(difLong / 2) * Math.sin(difLong / 2)); // parámetro "a"
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));  // parámetro "c"
    distancias = {
      valor: (radioTierra * (c.toFixed(4)))
    }
    proximidad.push(distancias);
  }
  console.log(proximidad)

  const handleSeleccion = (tienda) => {
    localStorage.setItem("tienda", tienda)
    console.log(localStorage.setItem("tienda", tienda))

  }
  const { productos } = useSelector(store => store.producto)
  const productosTienda = productos.map(producto => producto.nombre)

  const emisionDistancia = (distance) => {

    if (distance < 1) {
      return ("emites menos de 120 g de CO2")// 120 g CO2/km.
    } else {
      return ("emites " + Math.ceil((distance * 120)) + " g de CO2");
    }
  }

// Create icon
const LeafIcon = L.Icon.extend({
  options: {}
});

// Defining icons type
const blueIcon = new LeafIcon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
}),
greenIcon = new LeafIcon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
});

  return (
    <div className="contenedor-elegir-tienda">
      <div className="contenedor-enunciado">
        <h1 className="enunciado-titulo">Para una mejor experiencia  <br />
          <span className="enunciado-titulo-span"> Elige la tienda más cercana</span>
        </h1>
      </div>
      <div className="contenedor-list-map">
        <div id="mapContainer">
          <MapContainer center={[6.280833, -75.560553]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/*Prueba: mostrar tiendas en mapa!!*/}

            {locationExample.map(tienda => (
              <Marker position={[tienda.latitude, tienda.longitude]} icon={blueIcon}>
                <Popup>
                  {tienda.nombre} <br /> {tienda.barrio}
                </Popup>
              </Marker>
            )
            )}
            <Marker position={[state.latitude, state.longitude]} icon={greenIcon}>
              <Popup>
                Tu ubicación
              </Popup>
            </Marker>

            {/* ////////////////////////////////////// */}

          </MapContainer>
        </div>
        <div className="tabla-tiendas">
          <h1 className="encabezado-tabla"> Tiendas cercanas</h1>
          <table>
            <thead>
              <tr className="cabecera-tabla">
                <th>
                  Tienda
                </th>
                <th>
                  Distancia
                </th>
                <th>
                  Huella de carbono
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="cuerpo-tabla">
                <td>
                  {
                    locationExample.map(tiendas => (<><Link onClick={() => handleSeleccion(tiendas.nombre)} to="/tienda" className="enlace-tienda"> {tiendas.nombre} </Link> <br /> <hr />
                    </>))
                  }
                </td>
                <td>
                  {proximidad.map(dist => (<b> a {dist.valor.toFixed(2)} Km de ti<br /><hr /></b>))}
                </td>
                <td>
                  {proximidad.map(dist => (<b>{emisionDistancia(dist.valor.toFixed(2))} <br /><hr /></b>))}
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="pie-tabla-mensaje">
            *Entre más cerca esté la tienda que elijas más pequeña es la huella de carbono
            <br /><br /><span>Contribuyamos a salvar el planeta!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
// https://www.youtube.com/watch?v=62Y8SFi2wBk - Cargar Mapa en pantalla
// https://www.youtube.com/watch?v=cK7zIoC4lEY - Mostrar "tiendas" en el mapa !!
// https://www.youtube.com/watch?v=NfDTO4c0xLc&t=2295s - Mapas y Geolocalización !!