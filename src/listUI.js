import createElement from "./createElement";
import formatDueDates from "./date";

export function renderListName(list) {
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = createElement("div", "heading-ctr", viewCtr);
  const h1 = createElement("h1", "h1", headingCtr, list.title);
  const desc = createElement("p", "desc", headingCtr, list.description);
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
  const editBtn = createElement("button", "open-edit", openEditDiv);
  createElement(
    "i",
    ["editList", "view-edit", "fa-solid", "fa-pen-to-square"],

    editBtn,
    "",
    [["title", "Edit & Delete"]]
  );

  const listColor = createElement("div", "list-color", openEditDiv);
  listColor.style.backgroundColor = task.color;
  const taskCompleteDiv = createElement("div", "task-complete-div", taskCtr);
  createElement(
    "small",
    "due-date",
    taskCompleteDiv,
    formatDueDates(task.dueDate, taskCompleteDiv)
  );
  createElement(
    "button",
    [
      "completeBtn",
      "fa-solid",
      "fa-check",
      task.completed ? "doneBtn" : "todoBtn",
      "button",
    ],
    taskCompleteDiv,
    ""
  );
  renderPriorityStatus(task.priority, textDiv);
}
