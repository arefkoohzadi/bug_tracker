import http from "./httpService";

export function getPriorities() {
  return http.get("http://localhost:3900/api/priorities");
}
