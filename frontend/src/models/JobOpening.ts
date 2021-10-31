import Technology from '../enums/Technology'

export interface IJobOpening extends Document {
  _id: string
  name?: string
  description?: string
  duration?: Date
  payment?: string
  image?: string
  technologies?: Technology[]
  creationDate?: Date
  endDate?: Date
  requirements?: string[]
  applicants?: string[]
  jobsOwnership?: string[]
}
