import http from "./httpService";
import { apiUrl } from "../config.json";

export function getStatus() {
  return http.get(apiUrl + "/statusList");
}
