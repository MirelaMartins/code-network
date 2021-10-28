import { Router } from 'express';

import User from './User';
import Course from './Course';
import Video from './Video';
import Job from './Job';

const routes = Router();

routes.use('/user', User);
routes.use('/course', Course);
routes.use('/upload', Video);
routes.use('/job', Job);

export default routes;
