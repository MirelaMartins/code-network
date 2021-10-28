import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import { useHistory } from 'react-router-dom'
import ApiService from '../../../services/Api'

const RecoverPasswordComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Partial<IUser>>()
  const history = useHistory()

  const onSubmit = async (data: Partial<IUser & {passwordRepeat: string}>) => {
    if (data.password === data.passwordRepeat) { await ApiService.patchUser(data) }

    history.push('/')
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
        <label htmlFor="password">senha</label>
        <input
          type="password"
          id="passwordRepeat"
          name="passwordRepeat"
          ref={register({ required: 'Repita sua senha' })}
        />
        {errors.password && <p>{errors.password?.message}</p>}

        <button type="submit">Cadastrar nova senha</button>
      </form>
      <button onClick={() => history.push('/')}>voltar</button>
    </>

  )
}

export default RecoverPasswordComponent
