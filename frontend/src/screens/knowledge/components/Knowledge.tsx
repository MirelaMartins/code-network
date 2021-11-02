import React, { useState, useEffect } from 'react'
import { Image, Card, Col, Container, Row, Breadcrumb } from 'react-bootstrap'
import { ICourse, IJobOpening } from '../../../models'
import ApiService from '../../../services/Api'
import {BodyHome, ComponentGrid, ExGrid, InGrid} from './styled'

const KnowledgeComponent: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>()
  const [jobs, setJobs] = useState<IJobOpening[]>()

  useEffect(() => {
    async function initialize () {
      const courseData = await ApiService.getAllCourses()
      const jobsData = await ApiService.getAllJobs()
      setCourses(courseData)
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
                <Breadcrumb.Item active>Conhecimentos</Breadcrumb.Item>
              </Breadcrumb>
            <InGrid>
                <h1>Conhecimentos</h1>
                Comunicação
                
                
                    {courses && courses?.map(course =>
                    <>
                    <Row>
                    <ComponentGrid>
                    <Col>
                        Nome do curso: {course.name}
                    </Col>
                    <Col>
                        Descrição do curso: {course.description}
                    </Col>
                    <Col>
                        Duração do curso: {course.duration}
                    </Col>
                    </ComponentGrid>
                    </Row>
                    </>
                )}
                
                
                
            </InGrid>
        </ExGrid>
    </BodyHome>

</>
  )
}

export default KnowledgeComponent
