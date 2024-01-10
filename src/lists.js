import renderAllLists from "./listsUI";
import { renderCoreApp } from "./tasksUI";

let listToRender = "";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
  renderAllLists();
}

function addTask(task) {
  if (task.assignedLists.some((list) => list === this)) {
    this.tasksArray.push(task);
  }
  listToRender = task.assignedLists.slice(-1);
  findListToRender(listToRender);
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
