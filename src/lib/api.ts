// lib/api.ts
export const fetchAPI = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data as T;
};
