import { Router } from 'express';
import {
  userDelete, userGet, userPost, userLogin,
} from '@/controllers/User';

const routes = Router();

routes.get('/:id', userGet);

routes.post('/create', userPost);

routes.post('/login', userLogin);

routes.delete('/:id', userDelete);

export default routes;
