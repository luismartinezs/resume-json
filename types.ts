type DateStart = string
type DateEnd = string | 'Present'

type Resume = {
  fullName: string
  about: string
  mostAmazingDevelopment: string
  preferredEnvironment: Array<string>
  education: Array<{
    degree: string
    field: string
    institution: string
    location: string
    dateStart: DateStart
    dateEnd: string
  }>
  workExperience: Array<{
    position: string
    company: string
    dateStart: DateStart
    dateEnd: DateEnd
    responsibilities: Array<string>
    skills: Array<string>
    industries?: Array<string>
  }>
  certifications: Array<{
    name: string
    issuer: string
    dateStart: DateStart
    dateEnd: DateEnd
  }>
  skills: Array<{
    name: string
    yearsOfExperience: number
  }>
  projects: Array<{
    name: string
    type: 'Personal' | 'Corporate'
    url?: string
    description: string
    skills?: Array<string>
  }>
}
