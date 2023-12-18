import createList, { allLists } from "./lists";
import { isToday } from "date-fns";
import { renderCoreApp } from "./ui";

export default function renderToday() {
  document.getElementById("menuItem2").addEventListener("click", () => {
    const todaysList = createList("Today", "All tasks due today", "");

    allLists[0].tasksArray.forEach((task) => {
      if (isToday(task.dueDate)) {
        task.assignedLists.push(todaysList.title);
        todaysList.addTask(task);
      }
    });
    renderCoreApp(todaysList);
    allLists.splice(-1, 1);
  });
}

export function renderAllTasks() {
  document.getElementById("menuItem1").addEventListener("click", () => {
    renderCoreApp(allLists[0]);
  });
}
