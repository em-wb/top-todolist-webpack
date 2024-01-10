import createList, { allLists } from "./lists";
import { isToday } from "date-fns";
import { renderCoreApp, renderProfile } from "./tasksUI";
import renderAllLists from "./listsUI";

export default function renderMenuEvLis() {
  const todayBtn = document.getElementById("menuItem2");
  todayBtn.addEventListener("click", () => {
    const todaysList = createList("Today", "All tasks due today", "gold");
    console.log("todays list", todaysList);
    allLists[0].tasksArray.forEach((task) => {
      if (isToday(task.dueDate)) {
        task.assignedLists.push(todaysList);
        todaysList.addTask(task);
      }
    });

    renderCoreApp(todaysList);
    todayBtn.classList.add("selected");
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
