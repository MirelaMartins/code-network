import { Router } from 'express';
import multer from 'multer';
import { retrieveVideo, uploadVideo } from '@/controllers/Video';

const upload = multer({ dest: 'uploads/' });
const routes = Router();

routes.get('/:filename', retrieveVideo);

routes.post('/', upload.single('filename'), uploadVideo);

export default routes;
