import createList, { allLists } from "./lists";
import { isToday } from "date-fns";
import { renderCoreApp, renderAllLists, renderProfile } from "./tasksUI";

export default function renderMenuEvLis() {
  document.getElementById("menuItem2").addEventListener("click", () => {
    const todaysList = createList("Today", "All tasks due today", "");

    allLists[0].tasksArray.forEach((task) => {
      if (isToday(task.dueDate)) {
        task.assignedLists.push(todaysList.title);
        todaysList.addTask(task);
      }
    });
    renderCoreApp(todaysList);
    document.getElementById("menuItem2").classList.add("selected");
    allLists.splice(-1, 1);
  });

  document.getElementById("menuItem1").addEventListener("click", () => {
    renderCoreApp(allLists[0]);
    document.getElementById("menuItem1").classList.add("selected");
  });

  document.getElementById("menuItem3").addEventListener("click", () => {
    renderAllLists();
    document.getElementById("menuItem3").classList.add("selected");
  });

  document.getElementById("menuItem4").addEventListener("click", () => {
    renderProfile();
    document.getElementById("menuItem4").classList.add("selected");
  });
}
