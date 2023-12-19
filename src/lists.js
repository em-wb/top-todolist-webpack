import { renderCoreApp } from "./ui";

let listToRender = "All tasks";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
}

function addTask(task) {
  console.log("task in addtask", task.assignedLists);
  if (task.assignedLists.some((list) => list === this.title)) {
    this.tasksArray.push(task);
  }
  listToRender = task.assignedLists[0];
  findListToRender(listToRender);
}

export function removeTask(taskToDelete, itemIndex) {
  console.log("HEY", itemIndex, taskToDelete);
  listToRender = taskToDelete.assignedLists[0]; //PLACEHOLDER
  allLists[0].tasksArray.splice(itemIndex, 1);
  findListToRender(listToRender);
}

function findListToRender(listToRender) {
  allLists.forEach((list) => {
    if (list.title === listToRender) renderCoreApp(list);
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
