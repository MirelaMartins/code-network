import React, { useState, useEffect } from 'react'
import { Col, Row, Breadcrumb, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { IJobOpening } from '../../../models'
import ApiService from '../../../services/Api'
import {BodyHome, ComponentGrid, ExGrid, InGrid} from './styled'

const EnterpriseComponent: React.FC = () => {
  const [jobs, setJobs] = useState<IJobOpening[]>()
  const history = useHistory()
  
  useEffect(() => {
    async function initialize () {
      const jobsData = await ApiService.getAllJobs()
      setJobs(jobsData)
    }
    initialize()
  }, [])

  return (
    <>
      
    <BodyHome>
        <ExGrid>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Empresas</Breadcrumb.Item>
              </Breadcrumb>
            <InGrid>
                <h1>Empresas</h1>
                    {jobs && jobs?.map(jobs =>
                    <>
                      <ComponentGrid>
                      <Row>
                        <Col style={{ display: 'block', width: 300 }}>
                            <b>{jobs.name}</b>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ display: 'block', width: 300 }}>
                          <b>Descrição resumida:</b>
                        </Col>
                        <Col style={{ display: 'block', width: 300 }}>
                        <b>Data de postagem:</b>
                        </Col>
                        <Col style={{ display: 'block', width: 300 }}>
                        <b>Ações para esta vaga</b>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ display: 'block', width: 300 }}>
                          {jobs.description}
                        </Col>
                        <Col style={{ display: 'block', width: 300 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>{jobs.creationDate}
                        </Col>
                        <Col style={{ display: 'block', width: 300 }}>
                        <Button type="button" className='access' onClick={() => history.push('/login')}>Acessar</Button>
                        <Button type="button" className='visualize' onClick={() => history.push('/*')}>Visualizar</Button>
                        </Col>
                      </Row>

                        </ComponentGrid>
                    </>
                )}
            </InGrid>
        </ExGrid>
    </BodyHome>
</>
  )
}

export default EnterpriseComponent
