import { Router } from 'express';
import {
  deleteCourse, retrieveCourse, createCourse, updateCourse,
} from '@/controllers/Course';

const routes = Router();

routes.get('/:id', retrieveCourse);

routes.post('/create', createCourse);

routes.put('/:idCourse', updateCourse);

routes.delete('/:id', deleteCourse);

export default routes;
