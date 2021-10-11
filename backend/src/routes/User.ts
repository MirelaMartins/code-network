import { Router } from 'express';

import {
  deleteUser, retrieveUser, createUser, userLogin,
} from '@/controllers/User';
import validateUserData from '@/validators/user';

const routes = Router();

routes.get('/:id', retrieveUser);

routes.post('/create', validateUserData, createUser);

routes.post('/login', userLogin);

routes.delete('/delete', deleteUser);

export default routes;
