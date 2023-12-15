import createList, { allLists } from "./lists";
import createTask from "./tasks";
import { renderHeader, renderFooter, renderCoreApp } from "./ui";
import { getTaskDialogELs } from "./taskDialog";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const listAll = createList("All tasks", "All your tasks in one list", "blue");

  const task1 = createTask(
    "My first to do",
    "I need to do something",
    "01 Mar 24",
    true,
    listAll.title,
    false
  );

  const task2 = createTask(
    "My second to do",
    "I need to do something",
    "01 Jan 24",
    false,
    listAll.title,
    true
  );

  const task3 = createTask(
    "Task 3",
    null,
    "19 Dec 23",
    false,
    "All tasks",
    false
  );

  allLists.forEach((list) => {
    list.addTask(task1);
    list.addTask(task2);
    list.addTask(task3);
  });

  renderCoreApp(listAll);
  renderHeader(listAll);
  renderFooter();
  getTaskDialogELs();

  console.log("task", task1, task2, task3);
  console.log("all", listAll);
  console.log("allLists", allLists);
});

// function addToAllTasks() {
//   list.tasksArray.forEach((task) => {
//     allLists.forEach((list) => {
//       list.addTask(task);
//     });
//   });
// }
