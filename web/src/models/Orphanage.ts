import { Image } from './Image';

export interface Orphanage {
  id: number;
  name: string;
  lat: number;
  lng: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Image[];
}
