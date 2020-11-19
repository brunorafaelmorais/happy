import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {
  Container,
  ImageFull,
  ThumbsContainer,
  ContentAll,
  ContainerCards,
  ContainerMap,
} from './styles';

import ChildrenImage from '../../assets/children.jpg';

import Layout from '../../components/Layout';
import DividerLine from '../../components/DividerLine';
import CardInfo from '../../components/CardInfo';
import { ButtonBase } from '../../components/ButtonBase/styles';

import { Orphanage } from '../../models/Orphanage';
import api from '../../services/api';
import Map from '../../components/Map';
import MapMarker from '../../components/MapMarker';

type RouteParams = {
  id: string;
};

const OrphanageDetail: React.FC = () => {
  const [orphanage, setOrphanage] = useState({} as Orphanage);

  const { id } = useParams<RouteParams>();

  useEffect(() => {
    api
      .get<Orphanage>(`orphanages/${id}`)
      .then(response => setOrphanage(response.data))
      .catch(console.log);
  }, [id]);

  return (
    <Layout title="Orfanato">
      <Container>
        <ImageFull>
          <img src={ChildrenImage} alt="Children" />
        </ImageFull>
        <ThumbsContainer>
          {[1, 2, 3, 4, 5, 6].map(number => (
            <div key={number}>
              <figure>
                <img src={ChildrenImage} alt="Children" />
              </figure>
            </div>
          ))}
        </ThumbsContainer>

        {!_.isEmpty(orphanage) && (
          <ContentAll>
            <div>
              <Typography variant="h3" gutterBottom>
                <strong>{orphanage.name}</strong>
              </Typography>
              <Typography variant="body1">{orphanage.about}</Typography>

              <ContainerMap>
                <div>
                  <Map
                    interactive={false}
                    position={[orphanage.lat, orphanage.lng]}
                  >
                    <MapMarker
                      position={[orphanage.lat, orphanage.lng]}
                      text={orphanage.name}
                    />
                  </Map>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/Current+Location/${orphanage.lat},${orphanage.lng}`}
                  rel="noopener noreferrer"
                  target="__blank"
                >
                  Ver rotas no Google Maps
                </a>
              </ContainerMap>
            </div>

            <DividerLine />

            <div>
              <Typography variant="h4" gutterBottom>
                <strong>Instruções para visita</strong>
              </Typography>
              <Typography variant="body1">{orphanage.instructions}</Typography>

              <ContainerCards>
                <Grid container spacing={2}>
                  <Grid item xs={6} style={{ display: 'flex' }}>
                    <CardInfo
                      type="info"
                      icon={FiClock}
                      text={orphanage.opening_hours}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ display: 'flex' }}>
                    <CardInfo
                      type={orphanage.open_on_weekends ? 'success' : 'danger'}
                      icon={FiCheckCircle}
                      text={
                        orphanage.open_on_weekends
                          ? 'Atendemos fim de semana'
                          : 'Não atendemos fim de semana'
                      }
                    />
                  </Grid>
                </Grid>
              </ContainerCards>

              <ButtonBase>
                <FaWhatsapp size={24} />
                Entrar em contato
              </ButtonBase>
            </div>
          </ContentAll>
        )}
      </Container>
    </Layout>
  );
};

export default OrphanageDetail;
