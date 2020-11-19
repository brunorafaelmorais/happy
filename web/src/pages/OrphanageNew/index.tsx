import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ChildrenImage from '../../assets/children.jpg';

import Layout from '../../components/Layout';

import { Container, ContainerMap, Group, PhotosContainer } from './styles';
import DividerLine from '../../components/DividerLine';
import Map from '../../components/Map';
import { ButtonBase } from '../../components/ButtonBase/styles';

type FormData = {
  name: string;
  lat: number;
  lng: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<File>;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  lat: yup.number().required(),
  lng: yup.number().required(),
  about: yup.string().required(),
  instructions: yup.string().required(),
  opening_hours: yup.string().required(),
});

const OrphanageNew: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(formData => {
    console.log(formData);
  });

  return (
    <Layout title="Adicione um orfanato">
      <Container>
        <form onSubmit={onSubmit}>
          <Group>
            <Typography variant="h4" gutterBottom>
              <strong>Dados</strong>
            </Typography>
            <DividerLine gutterY={16} />

            <ContainerMap>
              <div>
                <Map position={[-27.2092052, -49.6401092]} />
              </div>
              <span>Clique no mapa para adicionar a localização</span>
            </ContainerMap>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  render={props => (
                    <TextField
                      onChange={e => props.onChange(e.target.value)}
                      label="Nome"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name?.message}
                    />
                  )}
                  name="name"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  render={props => (
                    <TextField
                      onChange={e => props.onChange(e.target.value)}
                      label="Sobre"
                      multiline
                      variant="outlined"
                      fullWidth
                      error={!!errors.about?.message}
                    />
                  )}
                  name="about"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Fotos
                </Typography>
                <PhotosContainer>
                  {[1, 2].map(number => (
                    <div key={number}>
                      <figure>
                        <img src={ChildrenImage} alt="Children" />
                      </figure>
                      <button type="button">
                        <FiX size={20} />
                      </button>
                    </div>
                  ))}
                  <label htmlFor="image[]" className="add">
                    <input multiple type="file" id="image[]" accept="image/*" />
                    <FiPlus size={24} />
                  </label>
                </PhotosContainer>
              </Grid>
            </Grid>
          </Group>

          <Group>
            <Typography variant="h4" gutterBottom>
              <strong>Visitação</strong>
            </Typography>
            <DividerLine gutterY={16} />
            <div style={{ marginTop: 32 }} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  render={props => (
                    <TextField
                      onChange={e => props.onChange(e.target.value)}
                      label="Instruções"
                      variant="outlined"
                      fullWidth
                      multiline
                      error={!!errors.instructions?.message}
                    />
                  )}
                  name="instructions"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  render={props => (
                    <TextField
                      onChange={e => props.onChange(e.target.value)}
                      label="Horário das visitas"
                      variant="outlined"
                      fullWidth
                      error={!!errors.opening_hours?.message}
                    />
                  )}
                  name="opening_hours"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  render={props => (
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          color="primary"
                        />
                      }
                      label="Atende fim de semana?"
                    />
                  )}
                  name="open_on_weekends"
                  control={control}
                  defaultValue
                />
              </Grid>
            </Grid>
          </Group>

          <Group>
            <ButtonBase type="submit">Confirmar</ButtonBase>
          </Group>
        </form>
      </Container>
    </Layout>
  );
};

export default OrphanageNew;
