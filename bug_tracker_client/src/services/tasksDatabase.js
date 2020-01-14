import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/bugs";

function taskUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getTask(taskId) {
  return http.get(taskUrl(taskId));
}
export function getTasks() {
  return http.get(apiEndPoint);
}

export function saveTask(task) {
  if (task._id) {
    const body = { ...task };
    delete body._id;
    return http.put(taskUrl(task._id), body);
  }
  return http.post(apiEndPoint, task);
}

export function deleteTask(taskId) {
  return http.delete(taskUrl(taskId));
}
