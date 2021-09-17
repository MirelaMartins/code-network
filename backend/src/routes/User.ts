import { Router } from 'express';
import { userDelete, userGet, userPost } from '@/controller/User';

const routes = Router();

routes.get('/', userGet);

routes.post('/', userPost);

routes.delete('/:id', userDelete);

export default routes;
