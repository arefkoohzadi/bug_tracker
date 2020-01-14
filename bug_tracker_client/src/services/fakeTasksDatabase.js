// import * as prioritiesAPI from "./fakePriorityService";

// export const getTime = () => {
//   var date = new Date();
//   return date.toLocaleString();
// };

// const tasks = [
//   {
//     _id: "5b21ca3eeb7f6fbccd471815",
//     title: "Terminator",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471818", name: "Low" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471825", name: "Completed" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471816",
//     title: "Die Hard",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471814", name: "Medium" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471817",
//     title: "Get Out",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471820", name: "High" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471819",
//     title: "Trip to Italy",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471818", name: "Low" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181a",
//     title: "Airplane",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471818", name: "Low" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181b",
//     title: "Wedding Crashers",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471820", name: "High" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471825", name: "Completed" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181e",
//     title: "Gone Girl",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471818", name: "Low" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181f",
//     title: "The Sixth Sense",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471818", name: "Low" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" }
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471821",
//     title: "The Avengers",
//     owner: "Mazyar",
//     priority: { _id: "5b21ca3eeb7f6fbccd471822", name: "Very High" },
//     date: getTime(),
//     status: { _id: "5b21ca3eeb7f6fbccd471825", name: "Completed" }
//   }
// ];

// export function saveTask(task) {
//   let taskInDb = tasks.find(m => m._id === task._id) || {};
//   taskInDb.title = task.title;
//   taskInDb.priority = prioritiesAPI.priorities.find(
//     g => g._id === task.priorityId
//   );
//   taskInDb.owner = task.owner;
//   taskInDb.date = getTime();
//   taskInDb.status = { _id: "5b21ca3eeb7f6fbccd471823", name: "Pending" };

//   if (!taskInDb._id) {
//     taskInDb._id = Date.now().toString();
//     tasks.push(taskInDb);
//   }

//   return taskInDb;
// }

// export function getTasks() {
//   return tasks;
// }

// export function getTask(id) {
//   return tasks.find(m => m._id === id);
// }
