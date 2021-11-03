import { Request, Response } from 'express';

import { getAllTechnologiesService } from '@/services/Technology';


const getAllTechnologies = async (req: Request, res: Response): Promise<void> => {
  const data = await getAllTechnologiesService();

  res.send(data);
};

export { getAllTechnologies };
