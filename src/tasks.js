import { renderTask } from "./listUI";
import { getListTitleDesc } from "./lists";

export default function createTask(
  title,
  description,
  dueDate,
  priority,
  list,
  completed
) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedLists: Array.isArray(list) ? list : [list],
    completed: completed,
  };
  addTaskToStorage(task);
  return task;
}

function addTaskToStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  const taskData = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskData);
}

export function loadTasksFromStorage(listID) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  listID = listID.toString();
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      if (task.assignedLists.includes(listID)) {
        renderTask(task);
      }
    });
  }
  getListTitleDesc(listID);
}
