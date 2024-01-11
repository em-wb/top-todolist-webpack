import createList, {
  allLists,
  loadListsFromStorage,
  saveListToStorage,
} from "./lists";
import createTask from "./tasks";
import { renderCoreApp } from "./tasksUI";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  // const storedLists = JSON.parse(localStorage.getItem("list")) || "";
  // if (storedLists === "") {
  //   const listAll = createList(
  //     "All tasks",
  //     "All your tasks in one list",
  //     "blue"
  //   );

  //   const task1 = createTask(
  //     "My first to do",
  //     "I need to do something",
  //     "2023-11-13",
  //     true,
  //     allLists[0],
  //     false
  //   );

  //   const task2 = createTask(
  //     "My second to do",
  //     "I need to do something",
  //     "2023-12-20",
  //     false,
  //     allLists[0],
  //     true
  //   );

  //   const task3 = createTask(
  //     "Task 3",
  //     null,
  //     "2023-12-18",
  //     false,
  //     allLists[0],
  //     false
  //   );

  //   allLists.forEach((list) => {
  //     list.addTask(task1);
  //     list.addTask(task2);
  //     list.addTask(task3);
  //   });

  //   renderCoreApp(listAll);

  //   document.getElementById("menuItem1").classList.add("selected");
  // }

  loadListsFromStorage();
});
