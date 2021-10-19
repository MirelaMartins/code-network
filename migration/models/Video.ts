import { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  _id: string
  name: string
  description: string
  duration: number
  url: string
}

export const VideoSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  url: { type: String, required: true },
}, { id: false });
