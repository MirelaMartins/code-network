import { LeanDocument } from 'mongoose';

import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { IJobOpening} from '@/models/JobOpening';
import {
  retrieveJob, createJob, deleteJob, updateJob, getAllJobs
} from '@/repositories/Job';
import Permission from '@/enums/Permission';
import { retrieveUserService } from './User';

const retrieveJobService = async (id: string): Promise<LeanDocument<IJobOpening>> => {
  const job = await retrieveJob(id);

  if (!job) throw new NotFound();
  return job;
};

const updateJobService = async (data: Partial<IJobOpening>, idUser: string, idJob: string): Promise<void> => {
  const user = await retrieveUserService(idUser);
  const job = await retrieveJobService(idJob);

  if (!user || user.permission !== Permission.enterprises || !job.jobsOwnership.includes(idJob)) throw new Unauthorized();

  await updateJob(idJob, data);
};

const createJobService = async (data: IJobOpening): Promise<string> => {
  const job = await createJob(data);

  if (!job) throw new NotCreated();

  return job.id;
};

const deleteJobService = async (id: string): Promise<LeanDocument<IJobOpening>> => {
  const job = await deleteJob(id);

  return job;
};

const getAllJobsService = async (): Promise<LeanDocument<IJobOpening>[]> => {
  const job = await getAllJobs();

  if (!job) throw new NotFound();
  return job;
};

export {
  retrieveJobService, deleteJobService, createJobService, updateJobService, getAllJobsService,
};
