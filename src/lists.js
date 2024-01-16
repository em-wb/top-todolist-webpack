import renderAllLists from "./listsUI";
import { renderCoreApp } from "./coreUI";
import createTask from "./tasks";

let listToRender = "";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
  renderAllLists();
  saveListToStorage();
}

function addTask(task) {
  if (task.assignedLists.some((list) => list === this.title)) {
    this.tasksArray.push(task);
    listToRender = this;
    console.log("listnew", this);
  }
  renderCoreApp(listToRender);
  saveListToStorage();
}

export function removeTask(taskToDelete, itemIndex) {
  const listTitleToRender = taskToDelete.assignedLists[1]
    ? taskToDelete.assignedLists[1]
    : taskToDelete.assignedLists[0];
  if (allLists.some((list) => list === listTitleToRender)) {
    listToRender = list;
  }
  allLists[0].tasksArray.splice(itemIndex, 1);
  renderCoreApp(listToRender);
}

export function removeList(listToDelete, itemIndex) {
  allLists.splice(itemIndex, 1);
  saveListToStorage();
  renderAllLists();
}

export function saveListToStorage() {
  const allData = JSON.stringify(allLists);
  const taskData = JSON.stringify(allLists[0].tasksArray);
  localStorage.setItem("lists", allData);
  localStorage.setItem("tasks", taskData);
}

function getDefaultList() {
  console.log("a");
  const listAll = createList("All tasks", "All your tasks in one list", "blue");
  console.log("b");
  const task1 = createTask(
    "My first to do",
    "I need to do something",
    "2023-11-13",
    true,
    allLists[0].title,
    false
  );

  const task2 = createTask(
    "My second to do",
    "I need to do something",
    "2023-12-20",
    false,
    allLists[0].title,
    true
  );

  const task3 = createTask(
    "Task 3",
    null,
    "2023-12-18",
    false,
    allLists[0].title,
    false
  );

  allLists.forEach((list) => {
    list.addTask(task1);
    list.addTask(task2);
    list.addTask(task3);
  });
  console.log("c");
  renderCoreApp(listAll);
  console.log("d");
  document.getElementById("menuItem1").classList.add("selected");
}

export function loadListsFromStorage() {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  allLists.length = 0;
  console.log(allLists, "alllists");
  console.log("x");
  storedLists.forEach((storedList) => {
    const newList = createList(
      storedList.title,
      storedList.description,
      storedList.colour
    );
    newList.tasksArray = storedList.tasksArray;
  });
  console.log("f", allLists);
  allLists.length > 0 ? renderAllLists(allLists[0]) : getDefaultList();
  saveListToStorage();
  console.log("e");
}

export default function createList(title, description, colour) {
  const list = {
    title: title,
    description: description,
    colour: colour,
    tasksArray: [],
    addToAllListsArray: addToAllListsArray,
    addTask: addTask,
    removeTask: removeTask,
  };

  list.addToAllListsArray();

  return list;
}
