import { Document, Schema } from 'mongoose';
import { IModulo, ModuloSchema } from '@/model/Modulo';
import Tecnologia from '@/enum/users/Tecnologia';

export interface ICurso extends Document {
  _id: string,
  nome?: string
  descricao?: string
  duracao?: string[]
  tecnologias?: Tecnologia[]
  dataCriacao?: Date
  responsavel?: string
  numeroConcluintes?: number
  modulos?: IModulo[]
}

export const CursoSchema = new Schema({
  _id: { type: String, required: true },
  nome: { type: String },
  descricao: { type: String },
  duracao: [{ type: String }],
  tecnologias: { type: [String], enum: Tecnologia, required: true },
  dataCriacao: { type: Date },
  responsavel: { type: String },
  numeroConcluintes: { type: Number, default: 0 },
  modulos: [ModuloSchema],
}, { _id: false });
