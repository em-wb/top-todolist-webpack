import createElement from "./createElement";

export default function renderTaskList(list) {
  const h1 = document.getElementsByTagName("h1");
  h1.innerText = list.title;
  getTasks(list.listID);
}

function getTasks(listID) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((storedTask) => {
    if (storedTask.assignedLists === listID) {
      renderTask(storedTask);
    }
  });
}

function renderPriorityStatus(status) {}

function renderTask(task) {
  const viewCtr = document.getElementById("view-ctr");
  const taskCtr = createElement("div", "task-ctr", viewCtr);
  const textDiv = createElement("div", "text-div", taskCtr);
  createElement("h2", "task-title", textDiv, task.title);
  createElement("p", "task-desc", textDiv, task.description);
  const openEditDiv = createElement("div", "open-edit-div", taskCtr);
  createElement(
    "div",
    ["editList", "view-edit", "fa-solid", "fa-eye"],
    openEditDiv
  );
  createElement("p", "open-edit", openEditDiv, "View / Edit");
  const listColor = createElement("div", "list-color", openEditDiv);
  listColor.style.backgroundColor = task.color;
  const taskCompleteDiv = createElement("div", "task-complete-div", taskCtr);
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
    ""
  );
  renderPriorityStatus(task.priority);
}
