import clearViewCtr from ".";
import createElement from "./createElement";
import { loadTasksFromStorage } from "./tasks";
import { loadListsFromStorage } from "./list";
import loadProfileFromStorage, {
  loadAvatarFromStorage,
  loadNameFromStorage,
  getAvatar,
  getName,
} from "./profile";

export default function renderAppUI() {
  renderHeader();
  renderNav();
  renderViewCtr();
  addNewBtn();
  addMenuEventLis();
}

const iconListNav = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  let i = 0;
  iconListNav.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv, "", [
      ["id", `menuItem${i}`],
      ["data-index-number", `${i}`],
    ]);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
    i++;
  });
  document.getElementById("menuItem0").classList.add("selected");
}

export function renderNav() {
  const nav = createElement("footer", null, content);
  const menuDiv = createElement("div", "menuDiv", nav);
  getIconMenu(menuDiv);
  createElement("h3", "logo", nav, "Absolistly");
}

export function renderHeader() {
  const header = createElement("header", "header", content);
  const logoCtr = createElement("div", "logo-ctr", header);
  createElement("h3", "logo", logoCtr, "Absolistly");
  const headerProfile = createElement("div", "header-profile", header);
  let userName = loadNameFromStorage();
  let avatar = loadAvatarFromStorage();
  userName = getName(userName);
  avatar = getAvatar(avatar);
  createElement("p", "user-name-header", headerProfile, `Hello, ${userName}.`);
  createElement("img", "avatar-header", headerProfile, "", [["src", avatar]]);
}

export function renderViewCtr() {
  const viewCtr = createElement("div", "view-ctr", content, "", [
    ["id", "view-ctr"],
  ]);
}

export function addTaskCtrs() {
  const viewCtr = document.getElementById("view-ctr");
  const todoDoneCtr = createElement("div", "todo-done-ctr", viewCtr);
  createElement("div", "todo-ctr", todoDoneCtr, "", [["id", "todo-ctr"]]);
  const doneCtr = createElement("div", "done-ctr", todoDoneCtr, "", [
    ["id", "done-ctr"],
  ]);
  createElement("h2", "done-title", doneCtr, "Done");
}

function addNewBtn() {
  createElement("button", ["add-new-btn", "fa-solid", "fa-plus"], content, "", [
    ["id", "add-new-btn"],
  ]);
}

export function renderItemText(item, ctr) {
  const textDiv = createElement("div", "text-div", ctr);
  createElement("h2", "task-title", textDiv, item.title);
  createElement("p", "task-desc", textDiv, item.description);
  return textDiv;
}

export function renderItemEdit(ctr, index) {
  const openEditDiv = createElement("div", "open-edit-div", ctr, "", [
    ["id", `open-edit-div${index}`],
  ]);
  const editBtn = createElement(
    "button",
    ["open-edit", "button"],
    openEditDiv,
    "",
    [["data-index-number", index]]
  );
  createElement(
    "i",
    ["editList", "view-edit", "fa-solid", "fa-pen-to-square"],

    editBtn,
    "",
    [["title", "Edit & Delete"]]
  );
  return editBtn;
}

function removePastSelected(menuItems) {
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("selected");
  });
}

function markAsSelected(menuItem) {
  menuItem.classList.add("selected");
}

function addMenuEventLis() {
  const menuItems = document.querySelectorAll(".menuItemDiv");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      removePastSelected(menuItems);
      markAsSelected(menuItem);
      openThisPage(menuItem.dataset.indexNumber);
    });
  });
}

function openThisPage(index) {
  clearViewCtr();
  if (index == 0) {
    loadTasksFromStorage(index);
  }
  if (index == 1) {
    loadTasksFromStorage("today");
  }
  if (index == 2) {
    loadListsFromStorage();
  } else if (index == 3) {
    loadProfileFromStorage();
  }
}
