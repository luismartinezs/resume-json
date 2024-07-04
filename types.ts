type DateStart = string
type DateEnd = string | 'Present'

type Resume = {
  fullName: string
  jobTitle: string
  profilePictureUrl?: string
  about: string
  mostAmazingDevelopment?: string
  preferredEnvironment?: Array<string>
  languages?: Array<string>
  citizenship?: string
  social?: {
    linkedin: string
    github: string
    x: string
    website: string
  }
  contact: {
    email?: string
    phone?: string
    location?: string
    skype?: string
  }
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
    skills: Array<string>
    link?: string
    issueDate: DateStart
    expirationDate?: DateEnd
  }>
  skills: Array<{
    star?: boolean
    name: string
    years?: number
  }>
  projects: Array<{
    name: string
    type: 'Personal' | 'Corporate'
    url?: string
    repositoryUrl?: string
    description: string
    skills?: Array<string>
  }>
}
