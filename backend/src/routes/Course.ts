import { Router } from 'express';
import {
  deleteCourse, retrieveCourse, createCourse, updateCourse, getAllCourses,
} from '@/controllers/Course';

const routes = Router();

routes.get('/:id', retrieveCourse);

routes.post('/create', createCourse);

routes.put('/:idCourse', updateCourse);

routes.delete('/:id', deleteCourse);

routes.get('/', getAllCourses);

export default routes;
