import createElement from "./createElement";
import createNewTaskDialog from "./taskDialog";

const iconListFooter = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  iconListFooter.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
  });
}

export function renderHeader(list) {
  const header = createElement("header", "header", content);
  const titleCtr = createElement("div", "titleCtr", header);
  const title = createElement("h1", "title", titleCtr, list.title);
  const listDesc = createElement("h2", "listDesc", titleCtr, list.description);
  const ellipsisDiv = createElement("div", "ellipsisDiv", header);
  const ellipsis = createElement(
    "i",
    ["fa-solid", "fa-ellipsis-vertical"],
    ellipsisDiv
  );
}

export function renderFooter() {
  const footer = createElement("footer", null, content);
  const menuDiv = createElement("div", "menuDiv", footer);
  getIconMenu(menuDiv);
  const logo = createElement("h3", "logo", footer, "Absolistly");
}

function renderPriorityStatus(taskTitle, task) {
  if (task.priority === true) taskTitle.classList.add("priority");
}

function renderCurrentTaskItems(tasksCtr, list) {
  list.tasksArray.forEach((task) => {
    if (!task.completed) {
      const taskItem = createElement("div", "taskItem", tasksCtr);
      const taskInfoDiv = createElement("div", "taskInfoDiv", taskItem);
      const listInfoDiv = createElement("div", "listInfoDiv", taskItem);
      const taskCompleteDiv = createElement("div", "taskCompleteDiv", taskItem);
      const taskTitle = createElement(
        "h4",
        "taskTitle",
        taskInfoDiv,
        task.title
      );
      createElement("p", "taskDesc", taskInfoDiv, task.description);
      createElement("div", "listAssignment", listInfoDiv);
      createElement("small", "dueDate", taskCompleteDiv, task.dueDate);
      createElement(
        "button",
        ["completeBtn", "fa-solid", "fa-check"],
        taskCompleteDiv
      );
      createElement("hr", "break", tasksCtr);
      renderPriorityStatus(taskTitle, task);
    }
  });
}

function renderCompletedTaskItems(doneCtr, list) {
  list.tasksArray.forEach((task) => {
    if (task.completed) {
      const doneItem = createElement("div", "doneItem", doneCtr);
      createElement("h5", "done", doneItem, task.title);
      createElement("small", "done", doneItem, task.dueDate);
      createElement("div", ["listAssignment", "done"], doneItem);
      createElement(
        "button",
        ["completeBtn", "fa-solid", "fa-check", "done"],
        doneItem
      );
      createElement("hr", "break", doneCtr);
    }
  });
}

export function renderCoreApp(list) {
  console.log("render core");
  const coreAppCtr = createElement("div", "coreAppCtr", content);
  const addNewBtn = createElement(
    "button",
    ["addNewBtn", "fa-solid", "fa-plus"],
    content,
    "",
    [["id", "addNewBtn"]]
  );
  const tasksCtr = createElement("div", "tasksCtr", coreAppCtr);
  const doneCtr = createElement("div", "doneCtr", coreAppCtr);
  createElement("h4", "doneheader", doneCtr, "Done");
  renderCompletedTaskItems(doneCtr, list);
  renderCurrentTaskItems(tasksCtr, list);
  createNewTaskDialog();
}
