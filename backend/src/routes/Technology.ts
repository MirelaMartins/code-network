import { Router } from 'express';
import { getAllTechnologies} from '@/controllers/Technology';

const routes = Router();

routes.get('/', getAllTechnologies);

export default routes;
