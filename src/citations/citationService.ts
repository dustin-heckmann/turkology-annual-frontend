import Citation from "./Citation";
import Pagination from "./Pagination";

interface Query {
  volume?: string;
  skip?: number;
  fullText?: string;
  keyword?: string;
}

interface ResultList {
  total: number;
  pagesTotal: number;
  currentPage: number;
  offset: number;
  result: Citation[];
}

export const getCitation = async (citationId: string): Promise<Citation> => {
  //return testCitations.find(citation => citation.id === citationId);
  const response = await fetch(`/api/citations/${citationId}`);
  if (!response.ok) throw new Error("Could not fetch citation");
  const body = await response.json();
  return body.result;
};

export async function findCitations(
  { volume, fullText, keyword }: Query,
  page: number = 0
): Promise<ResultList> {
  const queryString = new URLSearchParams({
    volume: volume || "",
    q: fullText || "",
    keyword: keyword || "",
    page: page.toString()
  }).toString();
  const response = await fetch(`/api/citations?${queryString}`);
  if (!response.ok) throw new Error("Could not fetch citations");
  return await response.json();
}
