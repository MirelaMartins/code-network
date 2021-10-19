import { Router } from 'express';

import User from './User';
import Course from './Course';
import Video from './Video';

const routes = Router();

routes.use('/user/', User);
routes.use('/course/', Course);
routes.use('/upload/', Video);

export default routes;
