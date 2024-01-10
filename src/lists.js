import renderAllLists from "./listsUI";
import { renderCoreApp } from "./tasksUI";

let listToRender = "";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
  renderAllLists();
  console.log("add to");
}

function addTask(task) {
  console.log("task in addtask", task.assignedLists);
  if (task.assignedLists.some((list) => list === this)) {
    this.tasksArray.push(task);
  }
  listToRender = task.assignedLists.slice(-1);
  console.log("list to render", listToRender);
  findListToRender(listToRender);
}

export function removeTask(taskToDelete, itemIndex) {
  console.log("HEY", itemIndex, taskToDelete);
  listToRender = taskToDelete.assignedLists[0]; //PLACEHOLDER
  allLists[0].tasksArray.splice(itemIndex, 1);
  console.log(allLists[0]);
  renderCoreApp(listToRender);
}

function findListToRender(listToRender) {
  allLists.forEach((list) => {
    if (list === listToRender[0]) {
      renderCoreApp(list);
      console.log("rendering", list);
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
