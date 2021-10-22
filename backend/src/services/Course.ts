import { LeanDocument } from 'mongoose';

import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { ICourse } from '@/models/Course';
import {
  retrieveCourse, createCourse, deleteCourse, updateCourse, getAllCourses
} from '@/repositories/Course';
import Permission from '@/enums/Permission';
import { retrieveUserService } from './User';

const retrieveCourseService = async (id: string): Promise<LeanDocument<ICourse>> => {
  const course = await retrieveCourse(id);

  if (!course) throw new NotFound();
  return course;
};

const updateCourseService = async (data: Partial<ICourse>, idUser: string, idCourse: string): Promise<void> => {
  const user = await retrieveUserService(idUser);

  if (!user || user.permission !== Permission.teacher || !user.coursesOwnership.includes(idCourse)) throw new Unauthorized();

  await updateCourse(idCourse, data);
};

const createCourseService = async (data: ICourse): Promise<string> => {
  const Course = await createCourse(data);

  if (!Course) throw new NotCreated();

  return Course.id;
};

const deleteCourseService = async (id: string): Promise<LeanDocument<ICourse>> => {
  const Course = await deleteCourse(id);

  return Course;
};

const getAllCoursesService = async (): Promise<LeanDocument<ICourse>[]> => {
  const course = await getAllCourses();

  if (!course) throw new NotFound();
  return course;
};

export {
  retrieveCourseService, deleteCourseService, createCourseService, updateCourseService, getAllCoursesService,
};
