import { LatLngExpression } from 'leaflet';
import React from 'react';
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';

interface Props extends MapContainerProps {
  position?: LatLngExpression;
  interactive?: boolean;
}

const Map: React.FC<Props> = ({
  children,
  interactive = true,
  position,
  ...rest
}) => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={false}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...rest}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
      />
      {children}
    </MapContainer>
  );
};

export default Map;
