import { Orphanage } from '../models/Orphanage';
import imageView, { ImageData } from './image.view';

type OrphanageData = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: ImageData[];
};

export default {
  render(orphanage: Orphanage): OrphanageData {
    return {
      ...orphanage,
      images: imageView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]): OrphanageData[] {
    return orphanages.map(this.render);
  },
};
