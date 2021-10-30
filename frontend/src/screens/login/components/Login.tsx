import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/Auth'
import './Login.css'

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
      <div className="my-background-class">
        <div className="grid-container">
          <div className="login-area">
            <div className="login-logo">
                <img 
                  
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="E-mail"
                ref={register({ required: 'Digite seu email' })}
              />
              {errors.email && <p>{errors.email?.message}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  ref={register({ required: 'Digite sua senha' })}
                />
                {errors.password && <p>{errors.password?.message}</p>}
              </div>
              <button className="btn btn-info btn-lg btn-block" type="button">Entrar</button>
              </form>
              <p className="small mb-5 pb-lg-2"><a className="text" onClick={() => history.push('/recover-password')}>Esqueceu a senha?</a></p>
              <p>Não possui uma conta? <a onClick={() => history.push('/register')} className="link-info">Cadastre-se</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterComponent
