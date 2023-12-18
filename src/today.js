import createList, { allLists } from "./lists";
import { isToday } from "date-fns";
import { renderCoreApp } from "./ui";

export default function renderToday() {
  document.getElementById("menuItem2").addEventListener("click", () => {
    console.log("rendertoday");
    const todaysList = createList("Today", "All tasks due today", "");

    allLists[0].tasksArray.forEach((task) => {
      if (isToday(task.dueDate)) {
        console.log("1all", allLists);
        task.assignedLists.push(todaysList.title);
        todaysList.addTask(task);
        console.log("todaylistaddtask", todaysList);
      }
    });
    renderCoreApp(todaysList);
    allLists.splice(-1, 1);
    console.log(allLists);
  });
}
