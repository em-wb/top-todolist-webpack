import renderAppUI from "./appUI";
import { renderTaskForm } from "./addNewTask";
import { renderListForm } from "./addNewList";
import { loadTasksFromStorage } from "./tasks";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  renderAppUI();
  loadTasksFromStorage(0);
  addNewEventLi();
});

function addNewEventLi() {
  document.getElementById("add-new-btn").addEventListener("click", () => {
    clearViewCtr();
    checkType();
  });
}

function checkType() {
  const allLists = document.getElementById("menuItem2");
  if (allLists.classList.contains("selected")) {
    return renderListForm();
  }
  renderTaskForm();
}

export default function clearViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  let i = 0;
  if (viewCtr.hasChildNodes) {
    while (viewCtr.firstChild) {
      viewCtr.removeChild(viewCtr.firstChild);
      i++;
    }
  }
}
