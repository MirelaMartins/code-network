import Permission from '@/enums/Permission';
import Technology from '@/enums/Technology';
import mongoose, { Schema } from 'mongoose';
import { CourseSchema, ICourse } from './Course';
import { BankDataSchema, IBankData } from './BankData';
import { IProgress, ProgressSchema } from './Progress';
import { IJobOpening, JobOpeningSchema } from './JobOpening';

export interface IUser extends Document{
  _id: string
  name: string
  email: string
  password: string
  telephone: string
  address: string
  bankData: IBankData
  permission: Permission
  jobOpenings?: IJobOpening[]
  courses?: ICourse[]
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
  address: { type: String, required: true },
  bankData: BankDataSchema,
  permission: { type: String, enum: Permission, required: true },
  jobOpenings: [JobOpeningSchema],
  courses: [CourseSchema],
  technologies: { type: [String], enum: Technology },
  certificates: [{ type: String }],
  progress: [ProgressSchema],
}, { _id: false });

const User = mongoose.model<IUser>('users', UserSchema);

export default User;
