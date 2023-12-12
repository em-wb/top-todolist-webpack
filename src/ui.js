function getContentEl() {
  const content = document.getElementById("content");
  return content;
}

function createElement(tag, className, parent) {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  parent.append(newElement);
  return newElement;
}

export function renderCoreUI() {
  const header = createElement("header", "header", content);
  console.log("hello");
}

export function rendersproject() {}

export function renderTodo() {}
