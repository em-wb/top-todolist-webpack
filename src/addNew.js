import createElement from "./createElement";
import renderTaskList from "./listUI";
import createList from "./lists";
import createTask from "./tasks";

export function clearViewCtr(viewCtr) {
  if (viewCtr.hasChildNodes) {
    while (viewCtr.firstChild) {
      viewCtr.removeChild(viewCtr.firstChild);
    }
  }
}

export function renderTaskForm(viewCtr) {
  const form = createElement("form", "form", viewCtr);
  createElement("h1", null, form);
  createElement("button", ["closeBtn", "fa-solid", "fa-xmark"], form, "", [
    ["id", "close-btn"],
  ]);
  createElement("label", null, form, "Title"),
    createElement("input", "input", form, "", [
      ["id", "inputTaskTitle"],
      ["type", "text"],
      ["required", ""],
      ["placeholder", "Do the grocery shop"],
      ["maxlength", "50"],
    ]);
  createElement("label", null, form, "Description (optional)"),
    createElement("textarea", "input", form, "", [
      ["id", "inputTaskDesc"],
      ["rows", "2"],
      ["placeholder", "Eggs, milk, cereal, bread, bananas"],
      ["maxlength", "250"],
    ]);
  createElement("label", "textInput", form, "Due Date");
  createElement("input", "input", form, "", [
    ["id", "inputTaskDate"],
    ["type", "date"],
    ["required", ""],
  ]);
  createElement("p", null, form, "Priority");
  createElement("input", "highPriority", form, "", [
    ["id", "highPriorityTask"],
    ["type", "checkbox"],
  ]);
  createElement("label", null, form, "High", [["for", "highPriorityTask"]]);
  createElement("label", null, form, "List (optional)");
  createElement("input", null, form, "", [
    ["id", "dropdownList"],
    ["list", "listOfLists"],
  ]);
  const datalist = createElement("datalist", null, form, "", [
    ,
    ["id", "listOfLists"],
  ]);
  createElement("option", null, datalist, "", [["value", "1"]]);
  createElement("button", "submitBtn", form, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  createElement("button", "deleteBtn", form, "Delete it", [
    ["id", "deleteTaskBtn"],
  ]);
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
  addFormEventListeners();
}

function parseListsFromStorage() {
  const listString = JSON.parse(localStorage.getItem("lists")) || [];
  let listsArray = [];
  if (listString) {
    listString.forEach((list) => {
      const newList = createList(
        list.title,
        list.description,
        list.color,
        list.listID
      );
      listsArray.push(newList);
    });
  }
  return listsArray;
}

function addFormEventListeners() {
  const closeForm = document.getElementById("close-btn");
  const newTaskForm = document.getElementById("form");
  const submitTaskBtn = document.getElementById("submitTaskBtn");
  const deleteTaskBtn = document.getElementById("deleteTaskBtn");
  submitTaskEL(submitTaskBtn);
  closeForm.addEventListener("click", (e) => {
    newTaskForm.reset();
    //render list
  });

  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedTask) {
      removeTask(editedTask, taskIndex);
    }
    newTaskForm.reset();
    clearViewCtr();
    // renderTaskList(currentList); add
  });
}

function submitTaskEL(submitTaskBtn) {
  submitTaskBtn.addEventListener("click", (e) => {
    console.log("hey");
    e.preventDefault();
    const newTaskForm = document.getElementById("form");
    //if edited
    let chosenList = document.getElementById("dropdownList").value;
    let assignedLists;
    if (!chosenList === 1) {
      assignedLists = [1, chosenList];
    } else {
      assignedLists = chosenList;
    }
    const newTask = createTask(
      document.getElementById("inputTaskTitle").value,
      document.getElementById("inputTaskDesc").value,
      document.getElementById("inputTaskDate").value,
      document.getElementById("highPriorityTask").checked,
      assignedLists,
      false
    );
    console.log(newTask, "new");
    // resetForm(newTaskForm);

    clearViewCtr();
    renderTaskList(chosenList);
  });
}

function resetForm(newTaskForm) {
  newTaskForm.reset();
}
