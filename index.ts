import Usuario from "./model/Usuario";
import mongoose from 'mongoose'
import 'dotenv/config'
import { Permissao } from './enum/Permissao';
import { Tecnologia } from './enum/Tecnologia';


const uri = process.env.MONGO_URI!

const populate = async ()  => {
    await mongoose.connect(uri)
    await Usuario.collection.drop()
    await Usuario.create({
        _id: '11111111111',
        nome: 'Pedro',
        email: 'emailDoPedro@pedro.com',
        telefone: '11111111111',
        endereco: 'Rua Do Pedro',
        dadosBancarios: {
            banco: 'Banco Do Pedro',
            agencia: 'Agencia Do Pedro',
            conta: 'Conta do Pedro',
            digito: 'Digito do Pedro',
            tipo: 'Salário'
        },
        permissao: Permissao.aluno
    })

    await Usuario.create({
        _id: '22222222222',
        nome: 'Professor',
        email: 'professor@professor.com',
        telefone: '22222222222',
        endereco: 'Rua Do Professor',
        dadosBancarios: {
            banco: 'Banco Do Professor',
            agencia: 'Agencia Do Professor',
            conta: 'Conta do Professor',
            digito: 'Digito do Professor',
            tipo: 'CC'
        },
        permissao: Permissao.professor,
        cursos: {
            _id: 'curso01',
            nome: 'curso01',
            descricao: 'curso01',
            duracao: '123 horas',
            tecnologias: [Tecnologia.cassandra, Tecnologia.python],
            dataCriacao: new Date(),
            numeroConcluintes: 12,
            modulos: [{
                videos:  [
                    {
                        _id: 'video01',
                        nome: 'video01',
                        descricao: 'primeiro video do canal galerinha',
                        duracao: 12331,
                        url: 'urldoprimeirovideo'
                    }
                ],
                nome: 'video01 do curso01',
                prova: [{
                    enunciado: 'Escolha uma alternativa aleatória',
                    alternativaCorreta: 'a',
                    respostas: ['Correta', 'Talvez', 'Tente sua Sorte', 'Falsa']
                }]
                }]
        }
    })
    
    await Usuario.create({
        _id: '33333333333',
        nome: 'Empresa',
        email: 'emailDoEmpresa@Empresa.com',
        telefone: '33333333333',
        endereco: 'Rua Do Empresa',
        dadosBancarios: {
            banco: 'Banco Do Empresa',
            agencia: 'Agencia Do Empresa',
            conta: 'Conta do Empresa',
            digito: 'Digito do Empresa',
            tipo: 'Salário'
        },
        permissao: Permissao.empresa,
        vagas: [{
            _id: 'vaga01',
            nome: 'vaga01',
            descricao: 'vaga01',
            duracao: new Date(),
            tecnologias: [Tecnologia.cpp, Tecnologia.mongodb],
            dataCriacao: new Date(),
            dataTermino: new Date( new Date().getTime()  + 1234567),
        }]
    })
    
    
    await Usuario.create({
        _id: '44444444444',
        nome: 'Joao',
        email: 'emailDoJoao@Joao.com',
        telefone: '44444444444',
        endereco: 'Rua Do Joao',
        dadosBancarios: {
            banco: 'Banco Do Joao',
            agencia: 'Agencia Do Joao',
            conta: 'Conta do Joao',
            digito: 'Digito do Joao',
            tipo: 'Salário'
        },
        permissao: Permissao.aluno,
        vagas: [
              {  _id: 'vaga01'}
            ],
        cursos: [
            { _id: 'curso01' }
        ]
    })
}


try {
    (async () => await populate())
    console.log('Dados Inseridos com Sucesso')
} catch(error) {
    console.log(error)
}
