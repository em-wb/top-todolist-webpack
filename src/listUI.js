import clearViewCtr from ".";
import createElement from "./createElement";
import formatDueDates from "./date";
import { getTaskData, updateCompleteStatus } from "./tasks";
import { editedTaskLog, renderTaskForm } from "./addNew";

export function renderListName(title, description) {
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = createElement("div", "heading-ctr", viewCtr);
  const h1 = createElement("h1", "h1", headingCtr, title);
  const desc = createElement("p", "desc", headingCtr, description);
}

function renderPriorityStatus(status, textDiv) {
  if (status) {
    textDiv.classList.add("priority");
  }
}

export function renderTask(task, index) {
  console.log(task);
  const todoCtr = document.getElementById("todo-ctr");
  const doneCtr = document.getElementById("done-ctr");
  const taskCtr = createElement(
    "div",
    "task-ctr",
    task.completed ? doneCtr : todoCtr,
    "",
    [["id", `task-ctr${index}`]]
  );
  console.log(taskCtr);
  const textDiv = createElement("div", "text-div", taskCtr);
  createElement("h2", "task-title", textDiv, task.title);
  createElement("p", "task-desc", textDiv, task.description);
  const openEditDiv = createElement("div", "open-edit-div", taskCtr);
  const editBtn = createElement("button", "open-edit", openEditDiv, "", [
    ["data-index-number", index],
  ]);
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
  const completeBtn = createElement(
    "button",
    [
      "complete-btn",
      "fa-solid",
      "fa-check",
      task.completed ? "doneBtn" : "todoBtn",
      "button",
    ],
    taskCompleteDiv,
    "",
    [["data-index-number", index]]
  );
  renderPriorityStatus(task.priority, textDiv);
}

export function addTaskEventLis() {
  editTaskEL();
  completeTaskEL();
}

function editTaskEL() {
  const editBtns = document.querySelectorAll(".open-edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const taskToEdit = getTaskData(editBtn.dataset.indexNumber);
      editedTaskLog(taskToEdit);
      clearViewCtr();
      renderTaskForm(taskToEdit);
    });
  });
}

function updateParent(index) {
  const taskCtr = document.getElementById(`task-ctr${index}`);
  let parentID = taskCtr.parentNode.id;
  parentID = parentID === "todo-ctr" ? "done-ctr" : "todo-ctr";
  const parent = document.getElementById(parentID);
  parent.appendChild(taskCtr);
}

function completeTaskEL() {
  const completeBtns = document.querySelectorAll(".complete-btn");
  completeBtns.forEach((completeBtn) => {
    completeBtn.addEventListener("click", () => {
      const index = completeBtn.dataset.indexNumber;
      const taskToEdit = getTaskData(index);
      updateParent(index);
      updateCompleteStatus(index);
    });
  });
}
