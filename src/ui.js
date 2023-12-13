const iconList = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getContentEl() {
  const content = document.getElementById("content");
  return content;
}

function createElement(tag, classList, parent, text) {
  const newElement = document.createElement(tag);
  classList = Array.isArray(classList)
    ? newElement.classList.add(...classList)
    : newElement.classList.add(classList);
  newElement.textContent = text;
  parent.append(newElement);
  return newElement;
}

function getIconMenu(menuDiv) {
  iconList.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
  });
}

export function renderHeader() {
  const header = createElement("header", "header", content);
  const titleCtr = createElement("div", "titleCtr", header);
  const title = createElement("h1", "title", titleCtr, "All tasks");
  const projectDesc = createElement(
    "h2",
    "projectDesc",
    titleCtr,
    "All your tasks in one list"
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

export function renderproject() {}

export function something() {
  const coreAppCtr = createElement("div", "coreAppCtr", content);
  const todoCtr = createElement("div", "todoCtr", coreAppCtr);
  const completeCtr = createElement("div", "completeCtr", coreAppCtr);
}

export function rendertodo(todo) {}
