import { API_URL } from "@/constants";

export const httpGetClient = <T>(url: string, cache?: RequestCache) => {
  const completeURL = API_URL + url;
  return fetch(completeURL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache,
  }).then((res) => res.json()) as Promise<T>;
};

export const httpPostClient = <T, Y>(url: string, body: Y) => {
  const completeURL = API_URL + url;
  return fetch(completeURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }) as Promise<T>;
};
