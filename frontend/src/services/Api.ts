import axios from 'axios'
import { IUser } from '../models/User'

export const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class ApiService {
  static registerUser = (data: IUser) => apiService.post('user/create', data)
  static getAllCourses = () => apiService.get('course/')
  static getAllJobs = () => apiService.get('jobs/')
  static patchUser = (data: Partial<IUser>) => apiService.patch('user/recover-password', data)

  static login = (data: Partial<IUser>) => apiService.post('user/login', data)
  static playVideo = () => apiService.post('upload/7fea670fd64912fa06dd42911ff4cc3e')
}

console.log(process.env.REACT_APP_API_URL)

export default ApiService
