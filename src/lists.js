export const allLists = [];

function addToAllLists() {
  allLists.push(this);
}

function addTask(task) {
  if (task.assignedLists.some((list) => list === this.title)) {
    this.tasksArray.push(task);
  }
}

export default function createList(title, description, colour) {
  const list = {
    title: title,
    description: description,
    colour: colour,
    tasksArray: [],
    addToAllLists: addToAllLists,
    addTask: addTask,
  };

  list.addToAllLists();

  return list;
}
