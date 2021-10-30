import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Course } from '../../../models/Course'
import { Job } from '../../../models/Job'
import ApiService from '../../../services/Api'

const HomeComponent: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>()
  const [jobs, setJobs] = useState<Job>()
  const history = useHistory()

  useEffect(() => {
    async function initialize () {
      const { data } = await ApiService.getAllCourses()
      // const respJobs = await ApiService.getAllJobs()
      console.log(data)
      setCourses(data)
    // setJobs(respJobs.data)
    }
    initialize()
  }, [])

  return (
    <>
      <div>{JSON.stringify(courses)}</div>
      <br></br>
      <button type="button" className="btn btn-primary" onClick={() => history.push('/register')}>Cadastro</button>
      <button type="button" className="btn btn-success" onClick={() => history.push('/login')}>Login</button>
    </>
  )
}

export default HomeComponent
