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
      valor: radioTierra * c.toFixed(3)
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
    for (let i = 0; i < proximidad.length; i++) {

      if (proximidad[i].valor < 1) {
        return ("Emites menos de 120 g de CO2")// 120 g CO2/km.
      } else {
        return ("Emites " + (proximidad[i].valor * 120) + " g de CO2");
      }
    }
  }

  return (
    <div className="contenedor-elegir-tienda">
      <div className="contenedor-enunciado">
        <h1 className="enunciado-titulo">Para una mejor experiencia  <br />
          <span className="enunciado-titulo-span"> Elige la tienda más cercana</span>
        </h1>
      </div>
      <div className="contenedor-list-map">
        <div id="mapContainer">
          <MapContainer center={[6.230833, -75.590553]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/*Prueba: mostrar tiendas en mapa!!*/}

            {locationExample.map(tienda => (
              <Marker position={[tienda.latitude, tienda.longitude]}>
                <Popup>
                  {tienda.nombre} <br /> {tienda.barrio}
                </Popup>
              </Marker>
            )
            )}
            <Marker position={[state.latitude, state.longitude]}>
              <Popup>
                Tu ubicación
              </Popup>
            </Marker>

            {/* ////////////////////////////////////// */}

          </MapContainer>
        </div>
        <div id="misTiendas">
          <h4>Tiendas Cercanas:</h4>
          <ul>
            {
              // <Link to="/tienda">{locationExample.map(tiendas => (<b> {tiendas.nombre} <br /> </b>))} </Link>


              locationExample.map(tiendas => (<><Link onClick={() => handleSeleccion(tiendas.nombre)} to="/tienda"> {tiendas.nombre} </Link> <br />
              </>))
            }


          </ul>
          <ul>
            {proximidad.map(dist => (<b> a {dist.valor} km de ti!! <br /></b>))}
          </ul>
          <ul>
            {emisionDistancia(proximidad.valor)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
// https://www.youtube.com/watch?v=62Y8SFi2wBk - Cargar Mapa en pantalla
// https://www.youtube.com/watch?v=cK7zIoC4lEY - Mostrar "tiendas" en el mapa !!
// https://www.youtube.com/watch?v=NfDTO4c0xLc&t=2295s - Mapas y Geolocalización !!