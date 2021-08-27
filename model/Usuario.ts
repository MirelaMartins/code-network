import mongoose, { Schema } from 'mongoose';
import { Permissao } from '../enum/Permissao';
import { Tecnologia } from '../enum/Tecnologia';
import { CursoSchema, ICurso } from './Curso';
import { DadosBancariosSchema, IDadosBancarios } from './DadosBancarios';
import { IProgresso, ProgressoSchema } from './Progresso';
import { IVaga, VagaSchema } from './Vaga';

interface IUsuario extends Document{
    _id: string
    nome: string
    email: string
    telefone: string
    endereco: string
    dadosBancarios: IDadosBancarios
    permissao: Permissao
    vagas?: IVaga[]
    cursos?: ICurso[]
    tecnologias?: Tecnologia[]
    certificados?: string[]
    progresso?: IProgresso[]
}

const UsuarioSchema = new Schema({
    _id: {type: String, required: true},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    endereco: {type: String, required: true},
    dadosBancarios:  DadosBancariosSchema,
    permissao: {type: String, enum: Permissao, required: true},
    vagas: [VagaSchema],
    cursos: [CursoSchema],
    tecnologias: {type: [String], enum: Tecnologia},
    certificados: [{type: String}],
    progresso: [ProgressoSchema],
}, {_id: false})

const Usuario =  mongoose.model<IUsuario>('usuarios', UsuarioSchema)

export default Usuario
