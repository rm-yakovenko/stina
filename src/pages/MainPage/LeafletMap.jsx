import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'assets/marker.svg';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 40],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LeafletMap({ currentCategory }) {
  return (
    <MapContainer
      center={[48.4525087, 28.4034291]}
      zoom={14}
      maxZoom={20}
      style={{ height: '100%', width: '100%' }}
      attributionControl
      zoomControl
      doubleClickZoom
      scrollWheelZoom
      dragging
      animate
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {currentCategory &&
        currentCategory.places.map((place) => (
          <Marker position={place.position}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default LeafletMap;
