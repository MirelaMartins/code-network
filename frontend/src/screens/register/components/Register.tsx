import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import ApiService from '../../../services/Api'
import { useHistory } from 'react-router-dom'
import { saveUserInfoOnStorage } from '../../../contexts/Auth'

const RegisterComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IUser>()
  const history = useHistory()

  const onSubmit = async (data: IUser) => {
    const resp = await ApiService.registerUser(data)
    saveUserInfoOnStorage(resp.data)
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

      <label htmlFor="name">nome</label>
      <input
        type="text"
        id="name"
        name="name"
        ref={register({ required: 'Digite seu nome' })}
      />
      {errors.name && <p>{errors.name?.message}</p>}
      <label htmlFor="password">senha</label>
      <input
        type="text"
        id="password"
        name="password"
        ref={register({ required: 'Digite sua senha' })}
      />
      {errors.password && <p>{errors.password?.message}</p>}

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        ref={register({ required: 'Digite seu email' })}
      />
      {errors.email && <p>{errors.email?.message}</p>}

      <label htmlFor="telephone">telefone</label>
      <input
        type="string"
        id="telephone"
        name="telephone"
        ref={register({ required: 'Digite seu telefone' })}
      />
      {errors.telephone && <p>{errors.telephone?.message}</p>}

      <button type="submit">Save</button>
    </form>
  )
}

export default RegisterComponent
