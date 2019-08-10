import Citation from "./Citation";

interface Query {
  volume?: string;
  skip?: number;
  fullText?: string;
  keyword?: string;
}

interface ResultList {
  total: number;
  pagination?: {
    start_index: number;
    previous: string;
    next: string;
    total: number;
    pages: any;
  };
  result: Citation[];
}

export const getCitation = async (citationId: string): Promise<Citation> => {
  //return testCitations.find(citation => citation.id === citationId);
  const response = await fetch(`/api/citations/${citationId}`);
  if (!response.ok) throw new Error("Could not fetch citation");
  const body = await response.json();
  return body.result;
};

export async function findCitations({
  volume,
  fullText,
  keyword
}: Query): Promise<ResultList> {
  //   return { total: testCitations.length, result: testCitations };
  const queryString = new URLSearchParams({
    volume: volume || "",
    q: fullText || "",
    keyword: keyword || ""
  }).toString();
  const response = await fetch(`/api/citations?${queryString}`);
  if (!response.ok) throw new Error("Could not fetch citations");
  return await response.json();
}
