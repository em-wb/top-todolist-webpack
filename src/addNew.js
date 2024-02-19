import createElement from "./createElement";
import createTask, { loadTasksFromStorage, deleteTask } from "./tasks";
import clearViewCtr from "./index.js";
import { addTaskCtrs } from "./appUI";
import { addTaskEventLis } from "./listUI";

let edited = false;
let taskIndex;

export function editedTaskLog(index) {
  taskIndex = index;
  edited = true;
}

function getViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  return viewCtr;
}

function renderCloseBtn(ctr) {
  const closeBtn = createElement(
    "button",
    ["closeBtn", "fa-solid", "fa-xmark"],
    ctr,
    "",
    [["id", "close-btn"]]
  );
}

function renderMainForm(title, ctr, toEdit) {
  const form = createElement("form", "form", ctr);
  createElement("h1", null, form, title);
  createElement("label", null, form, "Title", [["for", "inputTitle"]]),
    createElement("input", "input", form, "", [
      ["id", "inputTitle"],
      ["type", "text"],
      ["required", ""],
      [
        "placeholder",
        (title = "Task" ? "Do the grocery shop" : "House renovation"),
      ],
      ["maxlength", "50"],
      ["value", toEdit ? toEdit.title : ""],
    ]);
  createElement("label", null, form, "Description (optional)", [
    ["for", "inputDesc"],
  ]),
    createElement("textarea", "input", form, toEdit ? toEdit.description : "", [
      ["id", "inputDesc"],
      ["rows", "2"],
      [
        "placeholder",
        (title = "Task"
          ? "Eggs, milk, cereal, bread, bananas"
          : "Tasks for project kick-off"),
      ],
      ["maxlength", "250"],
    ]);

  return form;
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

function renderSubmitDelete(ctr) {
  const submitBtn = createElement("button", "submitBtn", ctr, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  const deleteTaskBtn = createElement("button", "deleteBtn", ctr, "Delete it", [
    ["id", "deleteTaskBtn"],
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

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  renderCloseBtn(viewCtr);
  renderSubmitDelete(mainForm);
}

export function renderTaskForm(taskToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm(editOrNew, "Task", viewCtr);
  renderCloseBtn(viewCtr);
  renderFormDate(mainForm, taskToEdit);
  renderPriorityStatus(mainForm, toEdit);
  renderDropDown(mainForm);
  renderSubmitDelete(mainForm); //SEPARATE
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
    addTaskEventLis();
    edited = false;
    taskIndex = null;
  });
}
