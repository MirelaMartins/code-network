import { Schema } from 'mongoose';
import { IQuestao, QuestaoSchema } from './Questao';
import { IVideo, VideoSchema } from './Video';

export interface IModulo {
  videos: IVideo[]
  nome: string
  prova: IQuestao[]
}

export const ModuloSchema = new Schema({
  videos: { type: [VideoSchema], required: true },
  nome: { type: String, required: true },
  prova: [{ type: QuestaoSchema, required: true }],
}, { id: false });
