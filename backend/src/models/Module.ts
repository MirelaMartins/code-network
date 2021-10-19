import { Schema } from 'mongoose';
import { IQuestion, QuestionSchema } from './Question';
import { IVideo, VideoSchema } from './Video';

export interface IModule {
  videos: IVideo[]
  name: string
  test: IQuestion[]
}

export const ModuleSchema = new Schema({
  videos: { type: [VideoSchema], required: true },
  name: { type: String, required: true },
  test: [{ type: QuestionSchema, required: true }],
}, { id: false });
