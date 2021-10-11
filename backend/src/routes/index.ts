import { Router } from 'express';

import User from './User';
import Course from './Course';

const routes = Router();

routes.use('/user/', User);
routes.use('/course/', Course);

export default routes;
