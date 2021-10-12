import { Router } from 'express';
import { retrieveVideo, uploadVideo } from '@/controllers/Video';

const routes = Router();

routes.get('/:id', retrieveVideo);

routes.post('/', uploadVideo);

export default routes;
