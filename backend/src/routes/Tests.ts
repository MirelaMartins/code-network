import { Router } from 'express';
import {
  deleteTests, retrieveTests, createTests, updateTests, getAllTests,
} from '@/controllers/Tests';

const routes = Router();

routes.get('/:id', retrieveTests);

routes.post('/create', createTests);

routes.put('/:idTests', updateTests);

routes.delete('/:id', deleteTests);

routes.get('/', getAllTests);

export default routes;
