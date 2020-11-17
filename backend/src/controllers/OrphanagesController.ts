import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import orphanageView from '../views/orphanage.view';
import { Orphanage } from '../models/Orphanage';

export default {
  async index(
    request: Request,
    response: Response,
  ): Promise<Response<Orphanage[]>> {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  async show(
    request: Request,
    response: Response,
  ): Promise<Response<Orphanage>> {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(
    request: Request,
    response: Response,
  ): Promise<Response<Orphanage>> {
    const {
      name,
      lat,
      lng,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => ({
      path: image.filename,
    }));

    const payload = {
      name,
      lat,
      lng,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lat: Yup.number().required(),
      lng: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      )
        .required()
        .min(1),
    });

    await schema.validate(payload, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(payload);

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
