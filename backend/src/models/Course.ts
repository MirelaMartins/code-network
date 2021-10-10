import { Document, Schema } from 'mongoose';
import { IModule, ModuleSchema } from '@/models/Module';
import Technology from '@/enums/Technology';

export interface ICourse extends Document {
  _id: string,
  name?: string
  description?: string
  duration?: string[]
  technologies?: Technology[]
  creationDate?: Date
  responsible?: string
  numberOfGraduates?: number
  modules?: IModule[]
}

export const CourseSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String },
  description: { type: String },
  duration: [{ type: String }],
  technologies: { type: [String], enum: Technology, required: true },
  creationDate: { type: Date },
  responsible: { type: String },
  numberOfGraduates: { type: Number, default: 0 },
  modules: [ModuleSchema],
}, { _id: false });
