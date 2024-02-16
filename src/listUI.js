import createElement from "./createElement";

export function renderListName(listTitle, listDesc) {
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = createElement("div", "heading-ctr", viewCtr);
  const h1 = createElement("h1", "h1", headingCtr, listTitle);
  const desc = createElement("p", "desc", headingCtr, listDesc);
}

// function getTasks(task) {
//   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   storedTasks.forEach((storedTask) => {
//     if (storedTask.assignedLists === listID) {
//       renderTask(storedTask);
//     }
//   });
// }

function renderPriorityStatus(status, textDiv) {
  if (status) {
    textDiv.classList.add("priority");
  }
}

export function renderTask(task) {
  const viewCtr = document.getElementById("view-ctr");
  const taskCtr = createElement("div", "task-ctr", viewCtr);
  const textDiv = createElement("div", "text-div", taskCtr);
  createElement("h2", "task-title", textDiv, task.title);
  createElement("p", "task-desc", textDiv, task.description);
  const openEditDiv = createElement("div", "open-edit-div", taskCtr);
  createElement(
    "div",
    ["editList", "view-edit", "fa-solid", "fa-eye"],
    openEditDiv
  );
  createElement("p", "open-edit", openEditDiv, "View / Edit");
  const listColor = createElement("div", "list-color", openEditDiv);
  listColor.style.backgroundColor = task.color;
  const taskCompleteDiv = createElement("div", "task-complete-div", taskCtr);
  createElement("small", "dueDate", taskCompleteDiv, task.dueDate);
  createElement(
    "button",
    [
      "completeBtn",
      "fa-solid",
      "fa-check",
      task.completed ? "doneBtn" : "todoBtn",
    ],
    taskCompleteDiv,
    ""
  );
  renderPriorityStatus(task.priority, textDiv);
}
