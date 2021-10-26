import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/Auth'

const RegisterComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Partial<IUser>>()
  const history = useHistory()
  const { Login } = useAuth()

  const onSubmit = async (data: Partial<IUser>) => {
    await Login(data as any)
    history.push('/video')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="id">cpf</label>
      <input
        type="text"
        id="_id"
        name="_id"
        ref={register({ required: 'Digite seu CPF' })}
      />
      {errors._id && <p>{errors._id?.message}</p>}

      <label htmlFor="password">senha</label>
      <input
        type="password"
        id="password"
        name="password"
        ref={register({ required: 'Digite sua senha' })}
      />
      {errors.password && <p>{errors.password?.message}</p>}

      <button type="submit">Password</button>
    </form>
  )
}

export default RegisterComponent
