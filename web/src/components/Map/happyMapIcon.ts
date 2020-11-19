import L from 'leaflet';
import mapMarkerImg from '../../assets/map-marker.svg';

export default L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [48, 54],
  iconAnchor: [24, 54],
  popupAnchor: [0, -50],
});
