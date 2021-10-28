import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Course } from '../../../models/Course'
import { Job } from '../../../models/Job'
import ApiService from '../../../services/Api'

const HomeComponent: React.FC = () => {
  const [courses, setCourses] = useState<Course>()
  const [jobs, setJobs] = useState<Job>()
  const history = useHistory()

  const initialize = async () => {
    const respCourse = await ApiService.getAllCourses()
    const respJobs = await ApiService.getAllJobs()
    console.log(respCourse.data)
    setCourses(respCourse.data)
    setCourses(respJobs.data)
    setJobs(respJobs.data)
  }
  initialize()

  return (
    <>
      <h1>{courses}</h1>
      <h1>{courses?.description}</h1>
      <h1>{courses?.duration}</h1>
      <h1>{courses?.image}</h1>
      <h1>{courses?.name}</h1>
      <h1>{jobs?.description}</h1>
      <h1>{jobs?.payment}</h1>
      <h1>{jobs?.image}</h1>
      <h1>{jobs?.name}</h1>
      <button onClick={() => history.push('/register')}>Cadastre-se</button>
      <button onClick={() => history.push('/login')}>Acessar</button>
    </>
  )
}

export default HomeComponent
