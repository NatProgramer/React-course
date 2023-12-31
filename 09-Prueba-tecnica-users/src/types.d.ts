declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export enum sortBy {
  NONE = 'none',
  COUNTRY = 'country',
  FIRST = 'first',
  LAST = 'last'
}

interface Location {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

interface Name {
  title: string
  first: string
  last: string
}

interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface Dob {
  date: string
  age: number
}

interface Registered {
  date: string
  age: number
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface User {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: Picture
  nat: string
}
