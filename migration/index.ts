import mongoose from 'mongoose';
import 'dotenv/config';

import User from './models/User'
import Course from './models/Course'
import Permission from './enums/Permission';
import Technology from './enums/Technology';

const uri = process.env.MONGO_URI!

const populate = async ()  => {
    await mongoose.connect(uri)
    User.collection.drop()
    Course.collection.drop()
    await User.create({
        _id: '11111111111',
        name: 'Pedro',
        password: 'senha do Pedro',
        email: 'emailDoPedro@pedro.com',
        telephone: '11111111111',
        address: 'Rua Do Pedro',
        permission: Permission.student
    })
    await User.create({
        _id: '22222222222',
        name: 'Professor',
        password: 'senha do Professor',
        email: 'professor@professor.com',
        telephone: '22222222222',
        address: 'Rua Do Professor',
        bankData: {
            bank: 'Banco Do Professor',
            agency: 'Agencia Do Professor',
            account: 'Conta do Professor',
            digit: 'Digito do Professor',
            type: 'CC'
        },
        permission: Permission.teacher,
        coursesOwnership: ['curso01']
    })
    await Course.create({
        name: 'curso01',
        description: 'curso01',
        duration: '123 horas',
        technologies: [Technology.cassandra, Technology.python],
        creationDate: new Date(),
        numberOfGraduates: 12,
        modules: [{
            videos:  [
                {
                    _id: 'video01',
                    name: 'video01',
                    description: 'primeiro video do canal galerinha',
                    duration: 12331,
                    url: 'urldoprimeirovideo'
                }
            ],
            name: 'video01 do curso01',
            test: [{
                statement: 'Escolha uma alternativa aleatória',
                correctAnswer: 'a',
                answers: ['Correta', 'Talvez', 'Tente sua Sorte', 'Falsa']
            }]
            }]
    })
    await User.create({
        _id: '33333333333',
        name: 'Empresa',
        password: 'senha da Empresa',
        email: 'emailDoEmpresa@Empresa.com',
        telephone: '33333333333',
        address: 'Rua Do Empresa',
        bankData: {
            bank: 'Banco Do Empresa',
            agency: 'Agencia Do Empresa',
            account: 'Conta do Empresa',
            digit: 'Digito do Empresa',
            type: 'Salário'
        },
        permission: Permission.enterprises,
        jobOpenings: [{
            _id: 'vaga01',
            name: 'vaga01',
            description: 'vaga01',
            duration: new Date(),
            technologies: [Technology.cpp, Technology.mongodb],
            creationDate: new Date(),
            endDate: new Date( new Date().getTime()  + 1234567),
        }]
    })
    await User.create({
        _id: '44444444444',
        name: 'Joao',
        email: 'emailDoJoao@Joao.com',
        password: 'senha do joao',
        telephone: '44444444444',
        address: 'Rua Do Joao',
        bankData: {
            bank: 'Banco Do Joao',
            agency: 'Agencia Do Joao',
            account: 'Conta do Joao',
            digit: 'Digito do Joao',
            type: 'Salário'
        },
        permission: Permission.student,
        jobOpenings: [
              {  _id: 'vaga01'}
            ],
        courses: [
            { _id: 'curso01' }
        ]
    })
}

const main = async ()  => {
    try {
        await populate()
        console.log('Dados Inseridos com Sucesso')
    } catch(error) {
        console.log(error)
    }
}

void main()