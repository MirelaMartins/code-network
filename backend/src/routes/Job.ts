import { Router } from 'express';
import {
  deleteJob, retrieveJob, createJob, updateJob, getAllJobs,
} from '@/controllers/Job';

const routes = Router();

routes.get('/:id', retrieveJob);

routes.post('/create', createJob);

routes.put('/:id', updateJob);

routes.delete('/:id', deleteJob);

routes.get('/', getAllJobs);

export default routes;
