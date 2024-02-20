import clearViewCtr from ".";
import createElement from "./createElement";
import formatDueDates from "./date";
import { getTaskData, updateCompleteStatus } from "./tasks";
import { renderItemEdit, renderItemText, renderListColor } from "./appUI";
import { editedLog, renderTaskForm } from "./addNewTask";
import { addListEventLis } from "./allListsUI";

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

function renderTaskComplete(task, ctr, index) {
  const taskCompleteDiv = createElement("div", "task-complete-div", ctr);
  createElement(
    "small",
    "due-date",
    taskCompleteDiv,
    formatDueDates(task.dueDate, taskCompleteDiv)
  );
  createElement(
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
}

export function renderTask(task, index) {
  console.log(task);
  const todoCtr = document.getElementById("todo-ctr");
  const doneCtr = document.getElementById("done-ctr");
  const itemCtr = createElement(
    "div",
    "item-ctr",
    task.completed ? doneCtr : todoCtr,
    "",
    [["id", `item-ctr${index}`]]
  );
  const textDiv = renderItemText(task, itemCtr);
  const viewEditDiv = renderItemEdit(itemCtr, index);
  renderListColor(task, viewEditDiv);
  renderTaskComplete(task, itemCtr, index);
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
      editedLog(taskToEdit);
      clearViewCtr();
      renderTaskForm(taskToEdit);
    });
  });
}

function updateParent(index) {
  const itemCtr = document.getElementById(`item-ctr${index}`);
  let parentID = itemCtr.parentNode.id;
  parentID = parentID === "todo-ctr" ? "done-ctr" : "todo-ctr";
  const parent = document.getElementById(parentID);
  parent.appendChild(itemCtr);
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
