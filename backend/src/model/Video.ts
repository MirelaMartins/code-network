import { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  _id: string
  nome: string
  descricao: string
  duracao: number
  url: string
}

export const VideoSchema = new Schema({
  _id: { type: String, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  duracao: { type: Number, required: true },
  url: { type: String, required: true },
}, { id: false });
