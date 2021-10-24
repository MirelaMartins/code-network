import { Request, Response } from 'express';

import {
  retrieveJobService, deleteJobService, createJobService, updateJobService, getAllJobsService,
} from '@/services/Job';

const retrieveJob = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await retrieveJobService(id);

  res.send(data);
};

const createJob = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  const auth = await createJobService(data);

  res.send(auth);
};

const updateJob = async (req: Request, res: Response): Promise<void> => {
  const { data, idUser } = req.body;
  const { idJob } = req.params;

  await updateJobService(data, idUser, idJob);

  res.end();
};

const deleteJob = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;

  await deleteJobService(id);
  res.end();
};

const getAllJobs = async (req: Request, res: Response): Promise<void> => {
  const data = await getAllJobsService();

  res.send(data);
};

export {
  retrieveJob, deleteJob, createJob, updateJob, getAllJobs,
};
