import { renderListName, renderTask } from "./listUI";
import { getListInfo } from "./list";
import { isToday } from "date-fns";
import { addTaskEventLis } from "./listUI";

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
  if (listID == "today") {
    getTodaysTasks(tasks);
    renderListName("Today", "All tasks due today");
  }
  if (tasks.length > 0) {
    getTasksForThisList(listID, tasks);
    getListInfo(listID);
  } else {
    getListInfo();
  }
  addTaskEventLis();
}

function getTodaysTasks(tasks) {
  let i = 0;
  tasks.forEach((task) => {
    if (isToday(task.dueDate)) {
      renderTask(task, i);
      i++;
    }
  });
}

function getTasksForThisList(listID, tasks) {
  let i = 0;
  tasks.forEach((task) => {
    if (task.assignedLists.includes(listID)) {
      renderTask(task, i);
      i++;
    }
  });
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
