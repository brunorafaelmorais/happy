import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

import MapMarkerImg from '../../assets/map-marker.svg';
import Map from '../../components/Map';
import MapMarker from '../../components/MapMarker';
import { Orphanage } from '../../models/Orphanage';
import api from '../../services/api';

const Locations: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api
      .get<Orphanage[]>('orphanages')
      .then(response => setOrphanages(response.data))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <div className="left">
        <header>
          <Link to="/">
            <img src={MapMarkerImg} alt="Happy Logo" />
          </Link>
        </header>

        <main>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </main>

        <footer>
          <strong>Rio do Sul</strong>
          <span> Santa Catarina</span>
        </footer>
      </div>
      <div className="right">
        <Map position={[-23.3245219, -51.1689972]}>
          {orphanages.map(orphanage => (
            <MapMarker
              key={orphanage.id}
              position={[orphanage.lat, orphanage.lng]}
              text={orphanage.name}
              linkUrl={`/orphanages/${orphanage.id}`}
            />
          ))}
        </Map>
        <Link to="/orphanages/create">
          <FiPlus size={24} />
        </Link>
      </div>
    </Container>
  );
};

export default Locations;
