import { Document, Schema } from 'mongoose';
import Technology from '@/enums/Technology';

export interface IJobOpening extends Document {
  _id: string
  name?: string
  description?: string
  duration?: Date
  technologies?: Technology[]
  creationDate?: Date
  endDate?: Date
  requirements?: string[]
  applicants?: string[]
}

export const JobOpeningSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String },
  description: { type: String },
  duration: { type: Date },
  technologies: { type: [String], enum: Technology, required: true },
  creationDate: { type: Date },
  endDate: { type: Date },
  requirements: [{ type: String }],
  applicants: [{ type: String }],
}, { _id: false });
