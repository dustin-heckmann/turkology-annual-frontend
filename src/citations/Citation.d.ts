import { any } from 'prop-types'
import { Person } from './Person'

export default interface Citation {
  id: string
  volume: string
  number: number
  title?: string
  authors?: Person[]
  editors?: Person[]
  rawText: string
  location?: string
  datePublished?: { year?: number }
  date?: { start?: string; end?: string }
  series?: string
  numberOfVolumes?: string | number
  numberOfPages?: any
  material?: any[]
  amendments?: string[]
  type?: string
  reviews?: string[] = []
  keywords?: Keyword[]
  comments?: string[]
  publishedIn?: PublishedIn
}

interface Keyword {
  code: string
  raw: string
  nameDE: string
  nameEN: string
  super: Keyword | null
}
interface PublishedIn {
  journal?: string
  pageStart?: number
  pageEnd?: number
  yearStart?: number
  yearEnd?: number
  year?: number
  issue?: number
  volume?: number
  type: 'journal' | 'ta'
  number?: number
}
