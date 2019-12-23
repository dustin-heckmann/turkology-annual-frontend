import Citation from './Citation'

interface Query {
  volume?: string
  number?: string
  skip?: number
  fullText?: string
  keyword?: string
}

export interface ResultList {
  total: number
  pagesTotal: number
  currentPage: number
  result: Citation[]
  offset: number
}

export const getCitation = async (citationId: string): Promise<Citation> => {
  // return testCitations.find(citation => citation.id === citationId);
  const response = await fetch(`/api/citations/${citationId}`)
  if (!response.ok) throw new Error('Could not fetch citation')
  const body = await response.json()
  return body.result
}

export async function findCitations(
  { volume, number, fullText, keyword }: Query,
  page: number = 0
): Promise<ResultList> {
  const queryString = new URLSearchParams({
    volume: volume ?? '',
    number: number ?? '',
    q: fullText || '',
    keyword: keyword || '',
    page: page.toString()
  }).toString()
  const response = await fetch(`/api/citations?${queryString}`)
  if (!response.ok) throw new Error('Could not fetch citations')
  return await response.json()
}
