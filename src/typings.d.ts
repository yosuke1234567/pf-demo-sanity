interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo"
  name: string
  role: string
  heroImage: Image
  backgroundInfomation: string
  profilePic: Image
  address: string
  email: string
  phoneNumber: string
}

export interface Skill extends SanityBody {
  _type: "skill"
  title: string
  progress: number
  image: Image
}

export interface Technology extends SanityBody {
  _type: "skill"
  title: string
  progress: number
  image: Image
}

export interface Experience extends SanityBody {
  _type: "experience"
  company: string
  dateEnded: string
  dateStarted: string
  jobTitle: string
  isCurrentlyWorkingHere: boolean
  points: string[]
  technologies: Technology[]
}

export interface Project extends SanityBody {
  _type: "project"
  title: string
  image: Image
  summary: string
  technologies: Technology[]
  linkToBuild: string
}

export interface Social extends SanityBody {
  _type: "social"
  title: string
  url: string
}