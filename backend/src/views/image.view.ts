import { Image } from '../models/Image';

export type ImageData = {
  id: number;
  url: string;
};

export default {
  render({ id, path }: Image): ImageData {
    return {
      id,
      url: `${process.env.APP_URL}/${path}`,
    };
  },

  renderMany(images: Image[]): ImageData[] {
    return images.map(this.render);
  },
};
