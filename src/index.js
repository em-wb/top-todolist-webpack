import renderAppUI from "./appUI";
import { renderTaskForm, renderListForm } from "./addNew";
import { loadTasksFromStorage } from "./tasks";
import { addTaskEventLis } from "./listUI";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  renderAppUI();
  loadTasksFromStorage(1);
  addNewEventLi();
});

function addNewEventLi() {
  document.getElementById("add-new-btn").addEventListener("click", () => {
    clearViewCtr();
    checkType();
  });
}

function checkType() {
  const allLists = document.getElementById("menuItem3");
  if (allLists.classList.contains("selected")) {
    renderListForm();
  } else renderTaskForm();
}

export default function clearViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  if (viewCtr.hasChildNodes) {
    while (viewCtr.firstChild) {
      viewCtr.removeChild(viewCtr.firstChild);
    }
  }
}
