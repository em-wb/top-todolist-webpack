import createElement from "./createElement";
import { allLists } from "./lists";
import createNewTaskDialog, { getTaskDialogELs } from "./taskDialog";
import formatDueDates from "./dates";
import renderMenuEvLis from "./menu";
import Complete from "./complete.png";
import { addCoreEventListeners, completeTaskEL } from "./coreELs";

const iconListFooter = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  let i = 1;
  iconListFooter.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv, "", [
      ["id", `menuItem${i}`],
    ]);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
    i++;
  });
}

export function renderHeader(list, allLists) {
  const header = createElement("header", "header", content);
  const titleCtr = createElement("div", "titleCtr", header);
  const title = createElement(
    "h1",
    "title",
    titleCtr,
    allLists ? "All Lists" : list.title
  );
  const listDesc = createElement(
    "h2",
    "listDesc",
    titleCtr,
    allLists ? "" : list.description
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

function renderTaskItems(tasksCtr, doneCtr, list) {
  let i = 0;
  list.tasksArray.forEach((task) => {
    const taskItem = createElement(
      "div",
      "taskItem",
      task.completed ? doneCtr : tasksCtr,
      "",
      [["data-index-number", i]]
    );
    const taskInfoDiv = createElement("div", "taskInfoDiv", taskItem);
    const editDiv = createElement("div", "editDiv", taskItem, "");
    const changeListDiv = createElement("div", "changeListDiv", taskItem);
    const taskCompleteDiv = createElement("div", "taskCompleteDiv", taskItem);
    const taskTitle = createElement("h4", "taskTitle", taskInfoDiv, task.title);
    createElement("p", "taskDesc", taskInfoDiv, task.description);
    const editTask = createElement(
      "div",
      ["view-edit", "fa-solid", "fa-eye"],
      editDiv,
      "",
      [["data-index-number", i]]
    );
    const listAssignment = createElement(
      "div",
      "listAssignment",
      changeListDiv,
      ""
    );
    const listName = task.assignedLists.slice(-1);
    let fullList;
    allLists.forEach((list) => {
      if (listName == list.title) {
        fullList = list;
      }
    });
    listAssignment.style.backgroundColor = fullList.colour;
    createElement("small", "dueDate", taskCompleteDiv, task.dueDate);
    createElement(
      "button",
      [
        "completeBtn",
        "fa-solid",
        "fa-check",
        task.completed ? "doneBtn" : "todoBtn",
      ],
      taskCompleteDiv,
      "",
      [["data-index-number", i]]
    );

    renderPriorityStatus(taskTitle, task);
    createElement("hr", "break", taskItem);
    i++;
  });
  if (!tasksCtr.hasChildNodes()) {
    const noTasksCtr = createElement("div", "no-tasks-ctr", tasksCtr);
    const noTasksImg = createElement("img", "no-tasks-img", noTasksCtr);
    createElement("p", "no-tasks-text", noTasksCtr, "You're up to date!");
    noTasksImg.src = Complete;
  }
  if (doneCtr.childNodes.length === 1) {
    createElement(
      "p",
      "nothing-complete",
      doneCtr,
      "Complete a task to see it here..."
    );
    createElement("hr", "break", doneCtr);
  }
}

export function clearContents() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function renderCoreAppCtr() {
  const coreAppCtr = createElement("div", "coreAppCtr", content, "", [
    ["id", "coreAppCtr"],
  ]);

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
  return { tasksCtr, doneCtr };
}

function renderProfileInfo() {
  renderBanner();
  const profileCtr = createElement("div", "profile-ctr", content);
  createElement("h1", "user-name", profileCtr, "Vivi90");
  createElement(
    "i",
    ["profile-pic", "fa-solid", "fa-person-burst"],
    profileCtr
  );
}

export function renderProfile() {
  clearContents();
  renderProfileInfo();
  renderFooter();
  renderMenuEvLis();
}

export function renderBanner() {
  const banner = createElement("div", "banner", content);
  createElement("h3", "logo", banner, "Absolistly");
  const bannerProfile = createElement("div", "banner-profile", banner);
  createElement("H2", "user-name", bannerProfile, "Hello, Vivi90");
  createElement(
    "i",
    ["profile-pic", "fa-solid", "fa-person-burst"],
    bannerProfile
  );
}

export function renderCoreApp(list) {
  clearContents();
  if (list) {
    const { tasksCtr, doneCtr } = renderCoreAppCtr();
    renderBanner();
    renderHeader(list);
    renderTaskItems(tasksCtr, doneCtr, list);
    createNewTaskDialog();
    renderFooter();
    getTaskDialogELs();
    formatDueDates();
    renderMenuEvLis();
    completeTaskEL(list);
    addCoreEventListeners();
  }
}
