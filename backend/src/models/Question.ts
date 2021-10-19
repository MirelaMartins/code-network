import { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  statement: string
  correctAnswer: string
  answers: string[]
}

export const QuestionSchema = new Schema({
  statement: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  answers: [{ type: String, required: true }],
}, { id: false });
