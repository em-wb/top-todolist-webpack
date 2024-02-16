import { renderTask } from "./listUI";
import { getListInfo } from "./lists";

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
    addTaskToStorage: addTaskToStorage,
  };
  task.addTaskToStorage();
  return task;
}

function addTaskToStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(this);
  const taskData = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskData);
}

function toggleComplete(task) {
  task.completed = !task.completed;
}

export function loadTasksFromStorage(listID) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  listID = listID.toString();
  console.log(tasks, "listID", listID);
  if (tasks.length > 0) {
    let i = 0;
    tasks.forEach((task) => {
      if (task.assignedLists.includes(listID)) {
        console.log(task, "task", i);
        renderTask(task, i);
        i++;
      }
    });
  }
  getListInfo(listID);
}

export function getTaskData(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    return tasks[index];
  }
}

export function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    tasks.splice(index, 1);
    const taskData = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskData);
  }
}

export function updateCompleteStatus(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    toggleComplete(tasks[index]);
    console.log(tasks[index].completed);
    const taskData = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskData);
  }
}
