import clearViewCtr from ".";
import createElement from "./createElement";
import { loadTasksFromStorage } from "./tasks";
import { loadListsFromStorage } from "./list";

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
  let i = 1;
  iconListNav.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv, "", [
      ["id", `menuItem${i}`],
      ["data-index-number", `${i}`],
    ]);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
    i++;
  });
}

export function renderNav() {
  const nav = createElement("footer", null, content);
  const menuDiv = createElement("div", "menuDiv", nav);
  getIconMenu(menuDiv);
  createElement("h3", "logo", nav, "Absolistly");
}

export function renderHeader() {
  const header = createElement("header", "header", content);
  createElement("h3", "logo", header, "Absolistly");
  const headerProfile = createElement("div", "header-profile", header);
  createElement(
    "i",
    ["profile-pic", "fa-solid", "fa-person-burst"],
    headerProfile
  );
}

export function renderViewCtr() {
  const viewCtr = createElement("div", "view-ctr", content, "", [
    ["id", "view-ctr"],
  ]);
  addTaskCtrs();
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
  const openEditDiv = createElement("div", "open-edit-div", ctr);
  const editBtn = createElement("button", "open-edit", openEditDiv, "", [
    ["data-index-number", index],
  ]);
  createElement(
    "i",
    ["editList", "view-edit", "fa-solid", "fa-pen-to-square"],

    editBtn,
    "",
    [["title", "Edit & Delete"]]
  );
  return openEditDiv;
}

export function renderListColor(item, ctr) {
  const listColor = createElement("div", "list-color", ctr);
  listColor.style.backgroundColor = item.color;
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
  console.log(index, "here");
  clearViewCtr();
  addTaskCtrs();
  if (index == 1) {
    loadTasksFromStorage(index);
  }
  if (index == 2) {
    loadTasksFromStorage("today");
  }
  if (index == 3) {
    loadListsFromStorage();
  } else if (index == 4) {
    loadProfileFromStorage();
  }
}
