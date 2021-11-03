import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../../models/User'
import ApiService from '../../../services/Api'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/Auth'
import './Register.css'
import { Button, Container, Form, InputGroup, Alert } from 'react-bootstrap'

const RegisterComponent: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IUser>()
  const [showError, setShowError] = useState<boolean>(false)
  const { Login } = useAuth()
  const history = useHistory()

  const onSubmit = async (data: IUser) => {
    try {
      await ApiService.registerUser(data)
      Login({ _id: data._id, password: data.password })
      history.push('/video')
    } catch (e) {
      setShowError(true)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <InputGroup className="mb-3">
          <InputGroup.Text id="_id" >CPF</InputGroup.Text>
          <Form.Control
            placeholder= {errors._id?.message as string || 'Digite somente os números do seu CPF'}
            aria-label="_id"
            name="_id"
            aria-describedby="_id"
            ref={register({ required: 'CPF não pode ser vazio!' })}
            isInvalid={!!errors._id}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="name" >Nome</InputGroup.Text>
          <Form.Control
            placeholder= {errors.name?.message as string || 'Nome completo'}
            aria-label="name"
            name="name"
            aria-describedby="name"
            ref={register({ required: 'Nome não pode ser vazio!' })}
            isInvalid={!!errors.name}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="telephone">Telefone</InputGroup.Text>
          <Form.Control
            placeholder= {errors.telephone?.message as string || 'Digite somente os números do seu telefone'}
            aria-label="telephone"
            name="telephone"
            aria-describedby="telephone"
            ref={register({ required: 'Telefone não pode ser vazio!' })}
            isInvalid={!!errors.telephone}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="email">Email</InputGroup.Text>
          <Form.Control
            placeholder= {errors.email?.message as string || 'Digite seu email'}
            aria-label="email"
            name="email"
            aria-describedby="email"
            ref={register({ required: 'Email não pode ser vazio!' })}
            isInvalid={!!errors.email}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="password">Senha</InputGroup.Text>
          <Form.Control
            placeholder={errors.password?.message as string || 'Digite sua senha'}
            aria-label="password"
            name="password"
            aria-describedby="password"
            ref={register({ required: 'Senha não pode ser vazia!' })}
            isInvalid={!!errors.password}
          />
        </InputGroup>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      {showError &&
      <Alert variant='danger'>
        <Alert.Heading>Não foi possível realizar o cadastro!</Alert.Heading>
        <p>revise seus dados e tente novamente</p>
        <Button onClick={() => setShowError(false)} variant="danger">Ok</Button>
      </Alert>
      }

    </Container>
  )
}

export default RegisterComponent
