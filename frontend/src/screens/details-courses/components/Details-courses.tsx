import React, { useState, useEffect } from 'react'
import { Col, Row, Breadcrumb, Button, Card } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router'
import { ICourse } from '../../../models'
import ApiService from '../../../services/Api'
import {BodyHome, ComponentGrid, ExGrid, InGrid} from './styled'

const DetailsComponent: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>()
  const history = useHistory()
  const location = useLocation()
  
  useEffect(() => {
    async function initialize () {
      const courseData = await ApiService.getCourse((location.state as any)?.id as unknown as any || '')
      setCourses(courseData)
    }
    initialize()
  }, [location])

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location); // result: 'some_value'
 }, [location as Record<string,any>]);
  return (
    <>
      
    <BodyHome>
        <ExGrid>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Conhecimentos</Breadcrumb.Item>
                <Breadcrumb.Item active>Cursos</Breadcrumb.Item>
              </Breadcrumb>
            <InGrid>
                    {courses && courses?.map(course =>
                    { return course._id == (location.state as any).id ?
                    <>
                    <h1>{course.name}</h1>
                      <ComponentGrid>
                      <Row>
                        <Col style={{color: '#7e70d7',display: 'block', width: 300 }}>
                          {course.description} 
                        </Col>
                        <Col className="imagem">
                          <Card>
                            <Card.Body>
                              <Card.Img src={`data:image/jpeg;base64,${course.image}`} ></Card.Img>
                              <Card.Title>{course.name}</Card.Title>
                              <Button type="button" className='favorite' onClick={() => history.push('/*')}>Favoritar</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ display: 'block', width: 300 }}>
                          <br/>
                          <b>O que você aprenderá:</b>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="details" style={{ display: 'block', width: 300 }}>
                          {course.details} 
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{display: 'block', width: 300 }}>
                          <Button type="button" className='access' onClick={() => history.push('/login')}>Acessar</Button>
                        </Col>
                      </Row>

                      </ComponentGrid>
                    </>
                : ('')}
                )}
            </InGrid>
        </ExGrid>
    </BodyHome>
</>
  )
}

export default DetailsComponent
