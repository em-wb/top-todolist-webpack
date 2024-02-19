import createElement from "./createElement";
import createTask, { loadTasksFromStorage, deleteTask } from "./tasks";
import clearViewCtr from "./index.js";
import { addTaskCtrs } from "./appUI";
import { addTaskEventLis } from "./listUI";

export default function renderMainForm(title, ctr, toEdit) {
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

export function editedTaskLog(index) {
  taskIndex = index;
  edited = true;
}

export function getViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  return viewCtr;
}

export function renderCloseBtn(ctr) {
  const closeBtn = createElement(
    "button",
    ["close-btn", "fa-solid", "fa-xmark"],
    ctr,
    "",
    [["id", "close-btn"]]
  );
  return closeBtn;
}

export function renderSubmit(ctr) {
  const submitBtn = createElement("button", "submitBtn", ctr, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  return submitBtn;
}

export function renderDelete(ctr) {
  const deleteBtn = createElement("button", "deleteBtn", ctr, "Delete it", [
    ["id", "deleteBtn"],
  ]);
  return deleteBtn;
}

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
