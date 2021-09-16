import mongoose, { Document , Schema } from "mongoose";
import { Tecnologia } from "../enum/Tecnologia";

export interface IVaga extends Document {
    _id: string,
    nome?: string
    descricao?: string
    duracao?: Date
    tecnologias?: Tecnologia[]
    dataCriacao?: Date
    dataTermino?: Date
    requerimento?: string[]
    candidatos?: string[]
}


export const VagaSchema = new Schema({
    _id: {type: String, required: true},
    nome: {type: String},
    descricao: {type: String},
    duracao: {type: Date},
    tecnologias: {type: [String], enum: Tecnologia,  required: true},
    dataCriacao: {type: Date},
    dataTermino: {type: Date},
    requerimento: [{type: String}],
    candidatos: [{type: String}],
}, {_id: false})


