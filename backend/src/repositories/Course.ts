import Course, { ICourse } from '@/models/Course';
import { LeanDocument } from 'mongoose';

const retrieveCourse = async (id: string): Promise<LeanDocument<ICourse>> => Course.findById(id).lean().exec();
const deleteCourse = async (id: string): Promise<LeanDocument<ICourse>> => Course.findByIdAndDelete(id).lean().exec();
const updateCourse = async (id: string, update: Record<string, any>): Promise<any> => Course
  . updateOne({ id }, update).lean().exec();
const createCourse = async (data: ICourse): Promise<ICourse> => Course.create(data);
const getAllCourses = async (): Promise<LeanDocument<ICourse>[]> => Course.find().lean().exec();

export {
  retrieveCourse, deleteCourse, createCourse, updateCourse, getAllCourses,
};
