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
  const ellipsis = createElement(
    "i",
    ["fa-solid", "fa-ellipsis-vertical"],
    header
  );
}

const iconList = [
  { classes: ["fa-regular", "fa-list"], text: "All tasks" },
  { classes: ["fa-regular", "fa-star"], text: "Today" },
  { classes: ["fa-regular", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-regular", "fa-user"], text: "Profile" },
];

function getIconMenu(iconsDiv) {
  iconList.forEach((icon) => {
    createElement("i", icon.classes, iconsDiv);
    createElement("small", "menuText", iconsDiv, icon.text);
  });
}

export function renderFooter() {
  const footer = createElement("footer", null, content);
  const iconsDiv = createElement("div", "iconsDiv", footer);
  const logo = createElement("h3", "logo", footer, "Absolistly");
  getIconMenu(iconsDiv);
}

export function rendersproject() {}

export function renderTodo() {}
