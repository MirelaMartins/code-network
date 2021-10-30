import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import { useHistory } from 'react-router-dom'
import ApiService from '../../../services/Api'
import './RecoverPassword.css'

const RecoverPasswordComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Partial<IUser>>()
  const history = useHistory()

  const onSubmit = async (data: Partial<IUser & {passwordRepeat: string}>) => {
    if (data.password === data.passwordRepeat) { await ApiService.patchUser(data) }

    history.push('/')
  }

  return (
    <>
      <div className="form-recovery">
        <form className="form-floating" onSubmit={handleSubmit(onSubmit)}>
          <p><h2>Favor preencher os dados abaixo:</h2></p>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email@provedor.com"
            ref={register({ required: 'Digite seu email' })}
          />

          {errors.email && <p>{errors.email?.message}</p>}

          <label htmlFor="password">Nova senha</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            ref={register({ required: 'Digite sua senha' })}
          />

          {errors.password && <p>{errors.password?.message}</p>}

          <label htmlFor="passwordRepeat">Confirmar nova senha</label>
          <input
            type="password"
            className="form-control"
            id="passwordRepeat"
            name="passwordRepeat"
            ref={register({ required: 'Repita sua senha' })}
          />
          {errors.password && <p>{errors.password?.message}</p>}

          <p></p>
          <button type="submit" className="btn btn-primary mb-3">Cadastrar nova senha</button>
        </form>
        <button className="btn btn-danger mb-3" onClick={() => history.push('/login')}>Voltar</button>
      </div>
    </>

  )
}

export default RecoverPasswordComponent
