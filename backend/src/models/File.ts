import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
  _id: string
}

export const FileSchema = new Schema({
  _id: { type: String, required: true },
}, { _id: false });

const File = mongoose.model<IFile>('files.files', FileSchema);

export default File;
