import createList, { allLists } from "./lists";
import createTask from "./tasks";
import { renderFooter, renderAppCtr, renderCoreApp } from "./ui";
import createElement from "./createElement";
import { getTaskDialogELs } from "./taskDialog";
import renderToday from "./menu";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const listAll = createList("All tasks", "All your tasks in one list", "blue");

  const task1 = createTask(
    "My first to do",
    "I need to do something",
    "2023-11-13",
    true,
    listAll.title,
    false
  );

  const task2 = createTask(
    "My second to do",
    "I need to do something",
    "2023-12-20",
    false,
    listAll.title,
    true
  );

  const task3 = createTask(
    "Task 3",
    null,
    "2023-12-18",
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

  //move this

  console.log("task", task1, task2, task3);
  console.log("all", listAll);
  console.log("allLists", allLists);
});
