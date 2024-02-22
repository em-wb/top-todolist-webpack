import clearViewCtr from ".";
import createElement from "./createElement";
import formatDueDates from "./date";
import {
  getTaskData,
  loadTasksFromStorage,
  updateCompleteStatus,
} from "./tasks";
import { renderItemEdit, renderItemText } from "./appUI";
import { editedLog, renderTaskForm } from "./addNewTask";
import { addListEventLis } from "./allListsUI";
import { getListData } from "./list";
import Complete from "./complete.png";

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

function renderListIcon(task, ctr) {
  let iconDiv;
  if (task.assignedLists.length > 1) {
    const listIndex = task.assignedLists.slice(1, 2);
    const list = getListData(listIndex);
    if (list.icon) {
      const iconCtr = createElement("div", "icon-div", ctr);
      const listBtn = createElement(
        "button",
        "list-icon-btn",
        iconCtr,
        list.icon,
        [
          ["id", "list-icon"],
          ["title", "View List"],
        ]
      );
      openListEL(listBtn, listIndex);
    }
  }
  return iconDiv;
}

function renderDueDate(task, ctr, index) {
  const taskDueDiv = createElement("div", "task-due-div", ctr);
  createElement(
    "small",
    "due-date",
    taskDueDiv,
    formatDueDates(task.dueDate, taskDueDiv)
  );
  return taskDueDiv;
}

function renderTaskComplete(task, ctr, index) {
  const taskCompleteDiv = createElement("div", "task-complete-div", ctr);
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
  renderDueDate(task, textDiv, index);
  const viewEditDiv = renderItemEdit(itemCtr, index);
  renderListIcon(task, itemCtr);
  renderTaskComplete(task, itemCtr, index);
  renderPriorityStatus(task.priority, textDiv);
}

export function checkIfEmpty() {
  const todoCtr = document.getElementById("todo-ctr");
  const doneCtr = document.getElementById("done-ctr");
  if (!todoCtr.hasChildNodes()) {
    const noTasksCtr = createElement("div", "no-tasks-ctr", todoCtr, "", [
      ["id", "no-tasks-ctr"],
    ]);
    const noTasksImg = createElement("img", "no-tasks-img", noTasksCtr);
    createElement("p", "no-tasks-text", noTasksCtr, "You're up to date!");
    noTasksImg.src = Complete;
  }
  if (todoCtr.childNodes.length > 1) {
    const empty = document.getElementById("no-tasks-ctr");
    if (empty) {
      empty.remove();
    }
  }
  if (doneCtr.childNodes.length === 1) {
    createElement(
      "p",
      ["nothing-complete", "no-tasks-text"],
      doneCtr,
      "Complete a task to see it here...",
      [["id", "nothing-complete"]]
    );
  }
  if (doneCtr.childNodes.length > 2) {
    const empty = document.getElementById("nothing-complete");
    if (empty) {
      empty.remove();
    }
  }
}

export function addTaskEventLis() {
  editTaskEL();
  completeTaskEL();
}

function openListEL(listBtn, listIndex) {
  listBtn.addEventListener("click", (e) => {
    clearViewCtr();
    loadTasksFromStorage(listIndex);
  });
}

function editTaskEL() {
  const editBtns = document.querySelectorAll(".open-edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      const index = editBtn.dataset.indexNumber;
      const taskToEdit = getTaskData(index);
      editedLog(index);
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
      checkIfEmpty();
    });
  });
}
