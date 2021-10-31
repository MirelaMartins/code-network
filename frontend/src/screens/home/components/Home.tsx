import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ICourse, IJobOpening } from '../../../models'
import ApiService from '../../../services/Api'

const HomeComponent: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>()
  const [jobs, setJobs] = useState<IJobOpening[]>()
  const history = useHistory()

  useEffect(() => {
    async function initialize () {
      const courseData = await ApiService.getAllCourses()
      const jobsData = await ApiService.getAllJobs()
      console.log(courseData)
      setCourses(courseData)
      setJobs(jobsData)
    }
    initialize()
  }, [])

  return (
    <>
      <Row>
        {courses && courses?.map(course =>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Img>{course.image}</Card.Img>
                {/* <Card.Link href="#">{course.}</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
    )}
      </Row>
      <br></br>

      <Row>
        {jobs && jobs?.map(job =>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{job.name}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Card.Img>{job.image}</Card.Img>
                {/* <Card.Link href="#">{course.}</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
    )}
      </Row>
      <br></br>
      <button type="button" className="btn btn-primary" onClick={() => history.push('/register')}>Cadastro</button>
      <button type="button" className="btn btn-success" onClick={() => history.push('/login')}>Login</button>
    </>
  )
}

export default HomeComponent
