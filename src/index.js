import createList, { allLists } from "./lists";
import createTask from "./tasks";
import { renderHeader, renderFooter, renderList } from "./ui";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const allTasks = createList(
    "All Tasks",
    "All your tasks in one list",
    "blue"
  );

  renderFooter();
  renderHeader(allTasks);

  const task1 = createTask(
    "My first to do",
    "I need to do something",
    "01/03/2024",
    "high",
    [allTasks.title],
    false
  );

  allLists.forEach((list) => {
    list.addTask(task1);
  });

  console.log("task", task1);
  console.log("all", allTasks);
  console.log("allLists", allLists);
});
