import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { MapBoxContainer } from './style';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2xla3NpeXBvbHlhbm92c2t5eSIsImEiOiJjazRkMzFkYmcwdHdpM3BwOHVmbTRtMTByIn0.ND0RA7cOs6h2oAz0dmN2jA';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(28.4389200733898);
  const [lat, setLat] = useState(48.45444412608912);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) {
      return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });
  });

  return <MapBoxContainer ref={mapContainer} />;
}

export default Map;
