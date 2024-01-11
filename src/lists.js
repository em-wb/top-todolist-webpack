import renderAllLists from "./listsUI";
import { renderCoreApp } from "./tasksUI";

let listToRender = "";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
  renderAllLists();
  saveListToStorage();
}

function addTask(task) {
  if (task.assignedLists.some((list) => list === this)) {
    this.tasksArray.push(task);
  }
  listToRender = task.assignedLists.slice(-1);
  findListToRender(listToRender);
  saveListToStorage();
}

export function removeTask(taskToDelete, itemIndex) {
  listToRender = taskToDelete.assignedLists[1]
    ? taskToDelete.assignedLists[1]
    : taskToDelete.assignedLists[0];
  allLists[0].tasksArray.splice(itemIndex, 1);
  renderCoreApp(listToRender);
}

function findListToRender(listToRender) {
  allLists.forEach((list) => {
    if (list === listToRender[0]) {
      renderCoreApp(list);
    }
  });
}

function stringifyWithCircular(obj) {
  const seen = new WeakSet();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular Reference]";
      }
      seen.add(value);
    }
    return value;
  });
}

export function saveListToStorage() {
  const serializedData = stringifyWithCircular(allLists);
  console.log("sd", serializedData);
  localStorage.setItem("lists", serializedData);
}

export function loadListsFromStorage() {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  allLists.length = 0;
  storedLists.forEach((storedList) => {
    const newList = createList(
      storedList.title,
      storedList.description,
      storedList.colour
    );
    newList.tasksArray = storedList.tasksArray;
    renderCoreApp(allLists[0]);
  });
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
  saveListToStorage();

  return list;
}
