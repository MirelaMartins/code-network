import { Router } from 'express';
import {
  deleteUser, retrieveUser, createUser, userLogin,
} from '@/controllers/User';

const routes = Router();

routes.get('/:id', retrieveUser);

routes.post('/create', createUser);

routes.post('/login', userLogin);

routes.delete('/delete', deleteUser);

export default routes;
