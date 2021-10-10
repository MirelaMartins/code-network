import { Schema } from 'mongoose';

export type ModuleStep = [string, number];

export interface IProgress {
  idCourse: string
  moduleStep: ModuleStep
}

export const ProgressSchema = new Schema({
  idCourse: { type: String, required: true },
  moduleStep: { type: Array, required: true },
}, { _id: false });
