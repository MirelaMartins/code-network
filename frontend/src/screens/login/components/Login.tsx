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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="id">email</label>
        <input
          type="text"
          id="email"
          name="email"
          ref={register({ required: 'Digite seu email' })}
        />
        {errors.email && <p>{errors.email?.message}</p>}

        <label htmlFor="password">senha</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={register({ required: 'Digite sua senha' })}
        />
        {errors.password && <p>{errors.password?.message}</p>}

        <button type="submit">Entrar</button>
      </form>

      <button onClick={() => history.push('/register')}>cadastre-se</button>
      <button onClick={() => history.push('/recover-password')}>Esqueceu a senha?</button>
    </>

  )
}

export default RegisterComponent
