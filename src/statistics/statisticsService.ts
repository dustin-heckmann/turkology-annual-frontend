export interface Statistics {
  completeness: Record<string, Completeness>;
}

export interface Completeness {
  actual: number;
  expected: number;
  missing: number[];
}

export const fetchStatistics = async (): Promise<Statistics> => {
  const response = await fetch(`/api/statistics`);
  if (!response.ok) throw new Error("Could not fetch statistics");
  const body = await response.json();
  return body;
};
