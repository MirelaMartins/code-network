import mongoose, { Document , Schema } from "mongoose";


export interface IQuestao extends Document {
    enunciado: string
    alternativaCorreta: string
    respostas: string[]
}


export const QuestaoSchema = new Schema({
    enunciado: {type: String, required: true},
    alternativaCorreta: {type: String, required: true},
    respostas: [{type: String, required: true}],
}, {id: false})
