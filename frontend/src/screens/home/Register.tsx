import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

interface IUsuario {
  _id: string
  nome: string
  email: string
  telefone: string
  endereco: string
  dadosBancarios: {
    banco: string,
    agencia: string,
    conta: string,
    digito: string,
    tipo: string
  }
  permissao: number
}
const RegisterComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<IUsuario>()

  const onSubmit = async (data: IUsuario) => {
    const dadosBancarios = {
      banco: 'banco',
      agencia: 'banco',
      conta: 'banco',
      digito: 'banco',
      tipo: 'banco'
    }
    const permissao = 0
    const resp = await axios.post('http://localhost:4000/api/user', { data: { ...data, dadosBancarios, permissao } }, { headers: { 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*' } })
    console.log(resp)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="_id">Name</label>
        <input
          type="text"
          id="_id"
          name="_id"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="nome">Name</label>
        <input
          type="text"
          id="nome"
          name="nome"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="telefone">telefone</label>
        <input
          type="string"
          id="telefone"
          name="telefone"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="endereco">endereco</label>
        <input
          type="string"
          id="endereco"
          name="endereco"
          ref={register({ required: true })}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default RegisterComponent
