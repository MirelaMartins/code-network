import axios, { AxiosError, AxiosResponse } from 'axios'
import { IUser, ICourse, IJobOpening } from '../models'
import { ITests } from '../models/Tests'

export const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

apiService.interceptors.response.use((resp: AxiosResponse) => resp.data, (err: AxiosError) => { throw new Error(err.response?.statusText) })
class ApiService {
  static registerUser = (data: IUser) => apiService.post('user/create', data)
  static getAllCourses = ():Promise<ICourse[]> => apiService.get('course/')
  static getCourse = (id:string):Promise<ICourse[]> => apiService.get(`course?id=${id}`)
  static getAllJobs = (): Promise<IJobOpening[]> => apiService.get('job/')
  static getAllTests = (): Promise<ITests[]> => apiService.get('tests/')
  static patchUser = (data: Partial<IUser>) => apiService.patch('user/recover-password', data)
  static login = async (data: Partial<IUser>): Promise<string> => await apiService.post('user/login', data)
  static playVideo = () => apiService.post('upload/7fea670fd64912fa06dd42911ff4cc3e')
}

console.log(process.env.REACT_APP_API_URL)

export default ApiService
