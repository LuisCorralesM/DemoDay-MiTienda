// Mapa
import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationExample from '../data/locationExample.json'
import {Link} from 'react-router-dom'
// import {Navbar} from './Navbar'
import '../style/styleComponents/mapa.css'

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

let latitud = locationExample.map(data=>
  data.latitude)
let longitud = locationExample.map(data=>
  data.longitude)

  console.log(latitud)
  console.log(longitud)

// Radio de la Tierra !!
let radioTierra = 6378; // Km
let difLat = (latitud - state.latitude)*Math.PI/180;
let difLong= (longitud - state.longitude)*Math.PI/180;

const a = () => Math.pow(Math.sin(difLat/2)) + Math.cos(locationExample.latitude)*Math.cos(state.latitude)*Math.pow(Math.sin(difLong/2));
const c = () => 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
const Distancia = () => radioTierra*c;

return (
    <div>
      
      <h1>Buscar Tienda</h1>
      <p>Mis tiendas cercanas...</p>
      <div id="mapContainer">
      <MapContainer center={[6.230833, -75.590553]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/*Prueba: mostrar tiendas en mapa!!*/}

        {locationExample.map(tienda => (
          <Marker position={[tienda.latitude,tienda.longitude]}>
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
      <div>Tiendas Cercanas:</div>
          <p><Link to="/tienda"> {locationExample.map(tiendas =>( <b>{tiendas.nombre} <br /> </b>))} </Link> a {Distancia} km de ti!!</p>
      </div>
    </div>
  );
};

export default Mapa;
// https://www.youtube.com/watch?v=62Y8SFi2wBk - Cargar Mapa en pantalla
// https://www.youtube.com/watch?v=cK7zIoC4lEY - Mostrar "tiendas" en el mapa !!
// https://www.youtube.com/watch?v=NfDTO4c0xLc&t=2295s - Mapas y Geolocalización !!