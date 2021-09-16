import { Router } from 'express';
import { userGet } from '@/controller/User';

const routes = Router();

routes.get('/', userGet);

export default routes;
