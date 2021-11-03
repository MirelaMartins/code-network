import { LeanDocument } from 'mongoose';

import NotFound from '@/errors/NotFound';
import Technology from '@/enums/Technology';
import { getAllTechnologies } from '@/repositories/Technology';


const getAllTechnologiesService = async (): Promise<LeanDocument<Technology>[]> => {
  const Technology = await getAllTechnologies();

  if (!Technology) throw new NotFound();
  return Technology;
};

export {
  getAllTechnologiesService,
};
