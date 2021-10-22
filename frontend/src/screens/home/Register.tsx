import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

interface IUser {
  _id: string
  name: string
  email: string
  password: string
  telephone: string
  address: string
  bankData: {
    bank: string,
    agency: string,
    account: string,
    digit: string,
    type: string
  }
  permission: number
}
const RegisterComponent: React.FC = () => {
  const { register, handleSubmit } = useForm<IUser>()

  const onSubmit = async (data: IUser) => {
    const permission = 0
    const resp = await axios.post('http://localhost:4000/api/user/create', { ...data, permission }, { headers: { 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*' } })
    console.log(resp)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="_id">Document</label>
        <input
          type="text"
          id="_id"
          name="_id"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="name">password</label>
        <input
          type="text"
          id="password"
          name="password"
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
        <label htmlFor="telephone">Telefone</label>
        <input
          type="string"
          id="telephone"
          name="telephone"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="address">endereco</label>
        <input
          type="string"
          id="address"
          name="address"
          ref={register({ required: true })}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default RegisterComponent
