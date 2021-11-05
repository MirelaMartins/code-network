import mongoose, { Schema, Document } from 'mongoose';

import { IModule, ModuleSchema } from '@/models/Module';
import Technology from '@/enums/Technology';

export interface ITests extends Document {
  name?: string
  description?: string
  duration?: string
  technologies?: Technology[]
  creationDate?: Date
  numberOfGraduates?: number
  modules?: IModule[]
}

export const TestsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  duration: [{ type: String }],
  technologies: { type: [String], enum: Technology, required: true },
  creationDate: { type: Date },
  numberOfGraduates: { type: Number, default: 0 },
  modules: [ModuleSchema],
});

const Tests = mongoose.model<ITests>('tests', TestsSchema);

export default Tests;