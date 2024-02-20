import renderMainForm, {
  renderCloseBtn,
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import createElement from "./createElement";
import createTask, { deleteTask } from "./tasks";
import clearViewCtr from ".";
import { addTaskCtrs } from "./appUI";
import { loadTasksFromStorage } from "./tasks";
import { addTaskEventLis } from "./listUI";

let edited = false;
let editedIndex;

export function editedLog(index) {
  editedIndex = index;
  edited = true;
}

function renderFormDate(ctr, toEdit) {
  createElement("label", "textInput", ctr, "Due Date", [
    ["for", "inputTaskDate"],
  ]);
  createElement("input", "input", ctr, "", [
    ["id", "inputTaskDate"],
    ["type", "date"],
    ["required", ""],
    ["value", toEdit ? toEdit.dueDate : ""],
  ]);
}

function renderPriorityStatus(ctr, toEdit) {
  createElement("p", null, ctr, "Priority");
  createElement("input", "highPriority", ctr, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
    ["checked", toEdit ? toEdit.priority : false],
  ]);
  createElement("label", null, ctr, "High", [["for", "highPriorityTask"]]);
}

function renderDropDown(ctr) {
  createElement("label", null, ctr, "List(s)", [["for", "dropdownList"]]);
  const select = createElement("select", null, ctr, "", [
    ["id", "dropdownList"],
    ["list", "listOfLists"],
  ]);
  createElement("option", null, select, "All tasks", [
    ["value", "All tasks"],
    ["data-index-number", "1"],
    ["disabled"],
    ["selected"],
  ]);
}

export function renderTaskForm(taskToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("Task", viewCtr, taskToEdit);
  const closeBtn = renderCloseBtn(viewCtr);
  renderFormDate(mainForm, taskToEdit);
  renderPriorityStatus(mainForm, taskToEdit);
  renderDropDown(mainForm);
  const submitBtn = renderSubmit(mainForm);
  const deleteBtn = renderDelete(mainForm);
  submitTaskEL(submitBtn);
  closeFormEL(closeBtn);
  deleteTaskEL(deleteBtn);
}

function getAssignedLists(chosenIndex) {
  let assignedLists;
  if (chosenIndex === "1") {
    assignedLists = chosenIndex;
  } else {
    assignedLists = [1, chosenIndex];
  }
  return assignedLists;
}

function deleteTaskEL(deleteTaskBtn) {
  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      deleteTask(editedIndex);
    }
    clearViewCtr();

    loadTasksFromStorage(1); //currentlist
    addTaskEventLis();
    edited = false;
    editedIndex = null;
  });
}

function closeFormEL(closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    clearViewCtr();
    loadTasksFromStorage(1); //currentlist
    addTaskEventLis();
    edited = false;
    editedIndex = null;
  });
}

function submitTaskEL(submitTaskBtn) {
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      deleteTask(editedIndex);
    }
    const dropDown = document.getElementById("dropdownList");
    const selectedIndex = dropDown.selectedIndex;
    const chosenIndex = dropDown.options[selectedIndex].dataset.indexNumber;
    const assignedLists = getAssignedLists(chosenIndex);
    createTask(
      document.getElementById("inputTitle").value,
      document.getElementById("inputDesc").value,
      document.getElementById("inputTaskDate").value,
      document.getElementById("highPriorityTask").checked,
      assignedLists,
      false
    );
    clearViewCtr();

    console.log("chose", chosenIndex);
    loadTasksFromStorage(chosenIndex);
    addTaskEventLis();
    edited = false;
    editedIndex = null;
  });
}
