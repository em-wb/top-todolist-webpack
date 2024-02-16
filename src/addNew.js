import createElement from "./createElement";
import createTask, { loadTasksFromStorage, deleteTask } from "./tasks";
import clearViewCtr from "./index.js";
import { addTaskCtrs } from "./appUI";
import { addTaskEls } from "./listUI";

let edited = false;
let taskIndex;

export function editedTaskLog(index) {
  taskIndex = index;
  edited = true;
}

export function renderTaskForm(taskToEdit) {
  const viewCtr = document.getElementById("view-ctr");
  const form = createElement("form", "form", viewCtr);
  createElement("h1", null, form, "Task");
  const closeBtn = createElement(
    "button",
    ["closeBtn", "fa-solid", "fa-xmark"],
    form,
    "",
    [["id", "close-btn"]]
  );
  createElement("label", null, form, "Title", [["for", "inputTaskTitle"]]),
    createElement("input", "input", form, "", [
      ["id", "inputTaskTitle"],
      ["type", "text"],
      ["required", ""],
      ["placeholder", "Do the grocery shop"],
      ["maxlength", "50"],
      ["value", taskToEdit ? taskToEdit.title : ""],
    ]);
  createElement("label", null, form, "Description (optional)", [
    ["for", "inputTaskDesc"],
  ]),
    createElement(
      "textarea",
      "input",
      form,
      taskToEdit ? taskToEdit.description : "",
      [
        ["id", "inputTaskDesc"],
        ["rows", "2"],
        ["placeholder", "Eggs, milk, cereal, bread, bananas"],
        ["maxlength", "250"],
      ]
    );
  createElement("label", "textInput", form, "Due Date", [
    ["for", "inputTaskDate"],
  ]);
  createElement("input", "input", form, "", [
    ["id", "inputTaskDate"],
    ["type", "date"],
    ["required", ""],
    ["value", taskToEdit ? taskToEdit.dueDate : ""],
  ]);
  createElement("p", null, form, "Priority");
  createElement("input", "highPriority", form, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
    ["checked", taskToEdit ? taskToEdit.priority : false],
  ]);
  createElement("label", null, form, "High", [["for", "highPriorityTask"]]);
  createElement("label", null, form, "List(s)", [["for", "dropdownList"]]);
  const select = createElement("select", null, form, "", [
    ["id", "dropdownList"],
    ["list", "listOfLists"],
  ]);
  createElement("option", null, select, "All tasks", [
    ["value", "All tasks"],
    ["data-index-number", "1"],
    ["disabled"],
    ["selected"],
  ]);
  const submitBtn = createElement("button", "submitBtn", form, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  const deleteTaskBtn = createElement(
    "button",
    "deleteBtn",
    form,
    "Delete it",
    [["id", "deleteTaskBtn"]]
  );
  // listsArray = parseListsFromStorage();

  // if (listsArray >= 1) {
  //   listsArray.forEach((list) => {
  //     if (list.title !== "All tasks") {
  //       createElement("option", "listOptions", dropdown, "", [
  //         ["value", list.title],
  //         ["id", list.listID],
  //       ]);
  //     }
  //   });
  // } else {

  // }
  submitTaskEL(submitBtn);
  closeFormEL(closeBtn);
  deleteTaskEL(deleteTaskBtn);
}

// function parseListsFromStorage() {
//   const listString = JSON.parse(localStorage.getItem("lists")) || [];
//   let listsArray = [];
//   if (listString) {
//     listString.forEach((list) => {
//       const newList = createList(
//         list.title,
//         list.description,
//         list.color,
//         list.listID
//       );
//       listsArray.push(newList);
//     });
//   }
//   return listsArray;
// }

function deleteTaskEL(deleteTaskBtn) {
  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      removeTask(taskIndex);
    }
    clearViewCtr();
    // renderTaskList(currentList); add
  });
}

function closeFormEL(closeForm) {
  closeForm.addEventListener("click", (e) => {
    loadTasksFromStorage(1); //currentlist
  });
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

function submitTaskEL(submitTaskBtn) {
  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      deleteTask(taskIndex);
    }
    const dropDown = document.getElementById("dropdownList");
    const selectedIndex = dropDown.selectedIndex;
    const chosenIndex = dropDown.options[selectedIndex].dataset.indexNumber;
    const assignedLists = getAssignedLists(chosenIndex);
    createTask(
      document.getElementById("inputTaskTitle").value,
      document.getElementById("inputTaskDesc").value,
      document.getElementById("inputTaskDate").value,
      document.getElementById("highPriorityTask").checked,
      assignedLists,
      false
    );
    clearViewCtr();
    addTaskCtrs();

    console.log("chose", chosenIndex);
    loadTasksFromStorage(chosenIndex);
    addTaskEls();
    edited = false;
    taskIndex = null;
  });
}
