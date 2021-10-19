import { Request, Response } from 'express';

import {
  retrieveCourseService, deleteCourseService, createCourseService, updateCourseService,
} from '@/services/Course';

const retrieveCourse = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await retrieveCourseService(id);

  res.send(data);
};

const createCourse = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  const auth = await createCourseService(data);

  res.send(auth);
};

const updateCourse = async (req: Request, res: Response): Promise<void> => {
  const { data, idUser } = req.body;
  const { idCourse } = req.params;

  await updateCourseService(data, idUser, idCourse);

  res.end();
};

const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;

  await deleteCourseService(id);
  res.end();
};

export {
  retrieveCourse, deleteCourse, createCourse, updateCourse,
};
