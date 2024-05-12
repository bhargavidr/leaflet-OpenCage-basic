import React, {useEffect}from 'react';
import { useMap, MapContainer, TileLayer, Marker} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import markerIconPng from "./marker-icon.png"
import {Icon} from 'leaflet'

const MapComponent = ({position}) => {
  

  function MyComponent() {
    const map = useMap()
    // console.log('map center:', map.getCenter())
    useEffect(() => {
        map.setView(position);
      }, [position]); //recenter the tile
    return null
  }
  

  return (
    <div style={{ height: '50vh', width: '50%', margin: 'auto' }}> 
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '50vh', width: '100%', margin: 'auto' }}>
        <MyComponent />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
  </MapContainer>
  </div>
  );
};

export default MapComponent;
