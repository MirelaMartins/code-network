import { Schema } from 'mongoose';

export interface IBankData {
  bank: string
  agency: string
  account: string
  digit: string
  type: string
}

export const BankDataSchema = new Schema({
  bank: { type: String, required: true },
  agency: { type: String, required: true },
  account: { type: String, required: true },
  digit: { type: String, required: true },
  type: { type: String, required: true },
}, { _id: false });
