import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/Auth'
import ErrorsStatusText from '../../../models/ErrorsStatusText'
import './Login.css'
import { Alert } from 'react-bootstrap'

const LoginComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Partial<IUser>>()
  const history = useHistory()
  const { Login } = useAuth()
  const [show, setShow] = useState(false)

  const onSubmit = async (data: Partial<IUser>) => {
    try {
      await Login(data as any)
      history.push('/video')
    } catch (error) {
      if (error.message === ErrorsStatusText.Unauthorized) {
        setShow(true)
      }
    }
  }

  return (
    <>
      <Alert show={show} variant='danger' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Falha no login</Alert.Heading>
        <p>Revise seus dados e tente novamente</p>
      </Alert>
      <div className="my-background-class">
        <div className="grid-container">
          <div className="login-area">
            <div className="login-logo">
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="_id"
                  name="_id"
                  placeholder="_id"
                  ref={register({ required: 'Digite seu cpf' })}
                />
                {errors._id && <p>{errors._id?.message}</p>}
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
              <button className="btn btn-info btn-lg btn-block" type="submit">Entrar</button>
            </form>
            <p className="small mb-5 pb-lg-2"><a className="text" onClick={() => history.push('/recover-password')}>Esqueceu a senha?</a></p>
            <p>Não possui uma conta? <a onClick={() => history.push('/register')} className="link-info">Cadastre-se</a></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoginComponent
