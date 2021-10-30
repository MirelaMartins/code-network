import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import ApiService from '../../../services/Api'
import { useHistory } from 'react-router-dom'
import { saveUserInfoOnStorage } from '../../../contexts/Auth'
import './Register.css'

const RegisterComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IUser>()
  const history = useHistory()

  const onSubmit = async (data: IUser) => {
    const resp = await ApiService.registerUser(data)
    saveUserInfoOnStorage(resp.data)
    history.push('/video')
  }

  return (
    <div className="form-register">
      <p><h2>Favor preencher os dados abaixo:</h2></p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="id">CPF</label>
        <input
          type="number"
          className="form-control"
          id="_id"
          name="_id"
          ref={register({ required: 'Digite seu CPF' })}
        />
        {errors._id && <p>{errors._id?.message}</p>}

        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          ref={register({ required: 'Digite seu nome' })}
        />
        {errors.name && <p>{errors.name?.message}</p>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={register({ required: 'Digite sua senha' })}
        />
        {errors.password && <p>{errors.password?.message}</p>}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          ref={register({ required: 'Digite seu email' })}
        />
        {errors.email && <p>{errors.email?.message}</p>}

        <label htmlFor="telephone">Telefone</label>
        <input
          type="phone"
          className="form-control"
          id="telephone"
          name="telephone"
          ref={register({ required: 'Digite seu telefone' })}
        />
        {errors.telephone && <p>{errors.telephone?.message}</p>}
        <p/>
        <button className="btn btn-primary mb-3" type="submit">Finalizar Cadastro</button>
        </form>
        <button className="btn btn-danger mb-3" onClick={() => history.push('/login')}>Voltar</button>
    </div>
  )
}

export default RegisterComponent
