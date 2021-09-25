// Mapa
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import '../style/style.css'
import locationExample from '../data/locationExample.json'

const Mapa = () => {
  return (
    <div>
      <h1>Geolocalización</h1>
      <p>Estás en Mapas...</p>
      <MapContainer center={[6.230833, -75.590553]} zoom={13} scrollWheelZoom={true}>
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

        {/* ////////////////////////////////////// */}

      </MapContainer>
      <div>Tiendas Cercanas</div>
    </div>
  );
};

export default Mapa;
// https://www.youtube.com/watch?v=62Y8SFi2wBk - Cargar Mapa en pantalla
// https://www.youtube.com/watch?v=cK7zIoC4lEY - Mostrar "tiendas" en el mapa !!
// https://www.youtube.com/watch?v=NfDTO4c0xLc&t=2295s - Mapas y Geolocalización !!