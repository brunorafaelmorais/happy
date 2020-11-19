import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Link } from 'react-router-dom';
import happyMapIcon from '../Map/happyMapIcon';

type Props = {
  position: LatLngExpression;
  text?: string;
  linkUrl?: string;
};

const MapMarker: React.FC<Props> = ({ position, text, linkUrl }) => {
  return (
    <Marker icon={happyMapIcon} position={position}>
      {text && (
        <Popup
          closeButton={false}
          minWidth={244}
          max-maxWidth={244}
          className="map-popup"
        >
          {text && <strong>{text}</strong>}
          {text && linkUrl && (
            <Link to={linkUrl}>
              <FiArrowRight size={24} />
            </Link>
          )}
        </Popup>
      )}
    </Marker>
  );
};

export default MapMarker;
