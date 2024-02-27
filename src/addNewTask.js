import renderMainForm, {
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import createElement from "./createElement";
import createTask, { deleteTask } from "./tasks";
import clearViewCtr from ".";
import { loadTasksFromStorage } from "./tasks";
import { addTaskEventLis } from "./listUI";
import { getStoredLists } from "./list";

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
  createElement("label", null, ctr, "High priority", [
    ["for", "highPriorityTask"],
  ]);
  console.log("toedit", toEdit);
  const priorityInput = createElement("input", "highPriority", ctr, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
  ]);
  if (toEdit && toEdit.priority === true) {
    priorityInput.setAttribute("checked", true);
  }
}

function renderDropDown(ctr) {
  createElement("label", null, ctr, "List(s)", [["for", "dropdownList"]]);
  const select = createElement("select", "input", ctr, "", [
    ["id", "dropdownList"],
    ["list", "listOfLists"],
  ]);
  createElement("option", null, select, "All tasks", [
    ["value", "All tasks"],
    ["data-index-number", 0],
    ["disabled"],
    ["selected"],
  ]);
  const listArray = getListOptions();
  renderListOptions(select, listArray);
}

function getListOptions() {
  const listArray = getStoredLists();
  listArray.splice(0, 1);
  return listArray;
}

function renderListOptions(select, listArray) {
  let i = 1;
  listArray.forEach((list) => {
    createElement("option", null, select, list.title, [
      ["value", list.title],
      ["data-index-number", i],
    ]);
    i++;
  });
}

export function renderTaskForm(taskToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("Task", viewCtr, taskToEdit);
  const dateCtr = createElement("div", "form-ctr", mainForm);
  const priorityCtr = createElement("div", "priority-ctr", mainForm);
  const listCtr = createElement("div", "form-ctr", mainForm);
  renderFormDate(dateCtr, taskToEdit);
  renderPriorityStatus(priorityCtr, taskToEdit);
  renderDropDown(listCtr);
  const buttonCtr = createElement("div", "button-ctr", mainForm);
  const submitBtn = renderSubmit(buttonCtr);
  const deleteBtn = renderDelete(buttonCtr);
  submitTaskEL(submitBtn);
  closeFormEL();
  deleteTaskEL(deleteBtn);
}

function getAssignedLists(chosenIndex) {
  let assignedLists;
  if (chosenIndex === 0) {
    assignedLists = chosenIndex;
  } else {
    assignedLists = [0, chosenIndex];
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

    loadTasksFromStorage(0);
    // addTaskEventLis();
    edited = false;
    editedIndex = null;
  });
}

function closeFormEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
    clearViewCtr();
    loadTasksFromStorage(0);
    // addTaskEventLis();
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
    // addTaskEventLis();
    loadTasksFromStorage(chosenIndex);
    edited = false;
    editedIndex = null;
  });
}
