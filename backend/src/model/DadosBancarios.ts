import { Schema } from 'mongoose';

export interface IDadosBancarios {
  banco: string,
  agencia: string
  conta: string
  digito: string
  tipo: string
}

export const DadosBancariosSchema = new Schema({
  banco: { type: String, required: true },
  agencia: { type: String, required: true },
  conta: { type: String, required: true },
  digito: { type: String, required: true },
  tipo: { type: String, required: true },
}, { _id: false });
