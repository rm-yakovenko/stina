import React, { useEffect, useRef } from 'react';
import PlaceCard from 'components/PlaceCard';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'assets/marker.svg';
import marker1 from 'assets/markers/marker1.svg';
import marker2 from 'assets/markers/marker2.svg';
import marker3 from 'assets/markers/marker3.svg';
import marker4 from 'assets/markers/marker4.svg';
import marker5 from 'assets/markers/marker5.svg';
import marker6 from 'assets/markers/marker6.svg';
import marker7 from 'assets/markers/marker7.svg';
import marker8 from 'assets/markers/marker8.svg';
import marker9 from 'assets/markers/marker9.svg';
import marker10 from 'assets/markers/marker10.svg';

import { StyledMapPopup } from './style';

const MARKER_SIZE = [30, 40];

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: MARKER_SIZE,
});

L.Marker.prototype.options.icon = DefaultIcon;

const markersMap = {
  1: L.icon({
    iconUrl: marker1,
    iconSize: MARKER_SIZE,
  }),
  2: L.icon({
    iconUrl: marker2,
    iconSize: MARKER_SIZE,
  }),
  3: L.icon({
    iconUrl: marker3,
    iconSize: MARKER_SIZE,
  }),
  4: L.icon({
    iconUrl: marker4,
    iconSize: MARKER_SIZE,
  }),
  5: L.icon({
    iconUrl: marker5,
    iconSize: MARKER_SIZE,
  }),
  6: L.icon({
    iconUrl: marker6,
    iconSize: MARKER_SIZE,
  }),
  7: L.icon({
    iconUrl: marker7,
    iconSize: MARKER_SIZE,
  }),
  8: L.icon({
    iconUrl: marker8,
    iconSize: MARKER_SIZE,
  }),
  9: L.icon({
    iconUrl: marker9,
    iconSize: MARKER_SIZE,
  }),
  10: L.icon({
    iconUrl: marker10,
    iconSize: MARKER_SIZE,
  }),
};

function LeafletMap({ currentCategory }) {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([48.4525087, 28.4034291], 14);
    }
  }, [currentCategory]);

  return (
    <MapContainer
      center={[48.4525087, 28.4034291]}
      zoom={14}
      maxZoom={20}
      style={{ height: '100%', width: '100%' }}
      attributionControl
      zoomControl
      doubleClickZoom
      scrollWheelZoom={false}
      dragging
      animate
      easeLinearity={0.35}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
      }}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {currentCategory &&
        currentCategory.places?.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.long]}
            icon={markersMap[currentCategory.id]}
          >
            <StyledMapPopup>
              <PlaceCard placeData={place} />
            </StyledMapPopup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default LeafletMap;
