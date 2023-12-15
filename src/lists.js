import { renderCoreApp } from "./ui";

export const allLists = [];

function addToAllListsArray() {
  allLists.push(this);
}

function addTask(task) {
  console.log("task in addtask", task.assignedLists);
  if (task.assignedLists.some((list) => list === this.title)) {
    this.tasksArray.push(task);
  }
  const findListToRender = task.assignedLists[0];
  allLists.forEach((list) => {
    if (list.title === findListToRender) renderCoreApp(list);
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
  };

  list.addToAllListsArray();

  return list;
}
