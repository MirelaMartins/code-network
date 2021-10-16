import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
  _id: string
  length: number
  chunkSize: number
  filename: string
  metadata: {
    mimetype: string
  }
}

export const MetaDataSchema = new Schema({
  mimetype: { type: String, required: true },
}, { _id: false });

export const FileSchema = new Schema({
  _id: { type: String, required: true },
  length: { type: Number, required: true },
  chunkSize: { type: Number, required: true },
  filename: { type: String, required: true },
  metadata: MetaDataSchema,
}, { _id: false });

const File = mongoose.model<IFile>('fs.files', FileSchema);

export default File;
