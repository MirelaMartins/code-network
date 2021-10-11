import Permission from '@/enums/Permission';
import Technology from '@/enums/Technology';
import mongoose, { Schema, Document } from 'mongoose';
import { BankDataSchema, IBankData } from './BankData';
import { IProgress, ProgressSchema } from './Progress';
import { IJobOpening, JobOpeningSchema } from './JobOpening';

export interface IUser extends Document {
  _id: string
  name: string
  password: string
  email: string
  telephone: string
  address?: string
  bankData?: IBankData
  permission: Permission
  jobOpenings?: IJobOpening[]
  coursesOwnership?: string[]
  technologies?: Technology[]
  certificates?: string[]
  progress?: IProgress[]
}

const UserSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  address: { type: String },
  bankData: BankDataSchema,
  permission: { type: Number, enum: Permission, required: true },
  jobOpenings: [JobOpeningSchema],
  coursesOwnership: [{ type: String, required: true }],
  technologies: { type: [String], enum: Technology },
  certificates: [{ type: String }],
  progress: [ProgressSchema],
}, { _id: false });

const User = mongoose.model<IUser>('users', UserSchema);

export default User;
