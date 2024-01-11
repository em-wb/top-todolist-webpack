import createElement from "./createElement";
import createList, { allLists, removeTask } from "./lists";
import createNewTaskDialog, {
  getTaskDialogELs,
  openDialogForThisTask,
} from "./taskDialog";
import formatDueDates from "./dates";
import renderToday, { renderAllTasks } from "./menu";
import renderMenuEvLis from "./menu";

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

function renderTaskItems(tasksCtr, doneCtr, list) {
  let i = 0;
  list.tasksArray.forEach((task) => {
    const taskItem = createElement(
      "div",
      "taskItem",
      task.completed ? doneCtr : tasksCtr,
      ""
    );
    const taskInfoDiv = createElement("div", "taskInfoDiv", taskItem);
    const editDiv = createElement("div", "editDiv", taskItem, "");
    const changeListDiv = createElement("div", "changeListDiv", taskItem);
    const taskCompleteDiv = createElement("div", "taskCompleteDiv", taskItem);
    const taskTitle = createElement("h4", "taskTitle", taskInfoDiv, task.title);
    createElement("p", "taskDesc", taskInfoDiv, task.description);
    const editTask = createElement(
      "div",
      ["editTask", "fa-solid", "fa-eye"],
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
    const listColour = task.assignedLists.slice(-1);
    listAssignment.style.backgroundColor = listColour[0].colour;
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
}

function editThisTaskEL() {
  const editTasks = document.querySelectorAll(".editTask");
  editTasks.forEach((editTask) => {
    editTask.addEventListener("click", () => {
      const itemIndex = editTask.getAttribute("data-index-number");
      const taskToOpen = allLists[0].tasksArray[itemIndex];
      openDialogForThisTask(taskToOpen, itemIndex);
    });
  });
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

export function renderThisListEL() {
  const listColours = document.querySelectorAll(".listAssignment");
  listColours.forEach((listColour) => {
    listColour.addEventListener("click", () => {
      allLists.forEach((list) => {
        if (listColour.style.backgroundColor === list.colour)
          renderCoreApp(list);
      });
    });
  });
}

function completeTaskEL(list) {
  const completeTask = document.querySelectorAll(".completeBtn");
  completeTask.forEach((completeTaskBtn) => {
    completeTaskBtn.addEventListener("click", () => {
      const taskToComplete = completeTaskBtn.getAttribute("data-index-number");
      allLists.forEach((list) => {
        list.tasksArray[taskToComplete].completed =
          !allLists[0].tasksArray[taskToComplete].completed;
      });
      renderCoreApp(list);
    });
  });
}

export function renderCoreApp(list) {
  clearContents();
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  console.log(storedLists);
  let listToOpen = null;
  storedLists.forEach((storedList) => {
    console.log(storedList, list);
    if (list === storedList) {
      listToOpen = JSON.parse(localStorage.getItem(storedList));
    }
    console.log(listToOpen);
  });
  if (list) {
    const { tasksCtr, doneCtr } = renderCoreAppCtr();
    renderHeader(list);
    renderTaskItems(tasksCtr, doneCtr, list);
    createNewTaskDialog();
    renderFooter();
    getTaskDialogELs();
    editThisTaskEL();
    formatDueDates();
    renderMenuEvLis();
    renderThisListEL();
    completeTaskEL(list);
  }
}
