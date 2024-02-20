import { renderListName, renderTask } from "./listUI";
import { getListInfo } from "./list";
import { isToday } from "date-fns";
import { addTaskEventLis } from "./listUI";
import clearViewCtr from ".";
import { addTaskCtrs } from "./appUI";

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

export function loadTasksFromStorage(listIndex) {
  addTaskCtrs();
  console.log("listID", listIndex);
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // listIndex = listID.toString();
  if (listIndex == "today") {
    renderListName("Today", "All tasks due today");
    getTodaysTasks(tasks);
  } else if (tasks.length > 0) {
    getTasksForThisList(listIndex, tasks);
    getListInfo(listIndex);
  } else {
    getListInfo(listIndex);
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
