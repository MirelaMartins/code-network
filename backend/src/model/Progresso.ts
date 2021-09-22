import { Schema } from 'mongoose';

export type EtapaModulo = [string, number];

export interface IProgresso {
  idCurso: string
  etapaModulo: EtapaModulo
}

export const ProgressoSchema = new Schema({
  idCurso: { type: String, required: true },
  etapaModulo: { type: Array, required: true },
}, { _id: false });
