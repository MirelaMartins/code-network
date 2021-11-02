import React, { useState, useEffect } from 'react'
import { Image, Card, Col, Container, Row } from 'react-bootstrap'
import { ICourse, IJobOpening } from '../../../models'
import ApiService from '../../../services/Api'
import {ImageDiv} from './styled'

const HomeComponent: React.FC = () => {
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
      <ImageDiv>
      <Image src={require('../../../commons/images/CODE_NETWORK_logo.png')} />
      </ImageDiv>
    <Container>
      <h1>Cursos</h1>
      <Row>
        {courses && courses?.map(course =>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Img src={`data:image/jpeg;base64,${course.image}`} ></Card.Img>
                {/* <Card.Link href="#">{course.}</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
    )}
      </Row>
      <br></br>

      <h1>Vagas</h1>
      <Row>
        {jobs && jobs?.map(job =>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{job.name}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Card.Img src={`data:image/jpeg;base64,${job.image}`} ></Card.Img>
                {/* <Card.Link href="#">{course.}</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
    )}
      </Row>
    </Container>
    </>
  )
}

export default HomeComponent
