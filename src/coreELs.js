import { openDialogForThisList } from "./listDialog";
import { openDialogForThisTask } from "./taskDialog";
import { renderCoreApp } from "./tasksUI";
import { allLists } from "./lists";

export function addCoreEventListeners() {
  console.log("i'm being activated");
  //render list
  document.addEventListener("click", (e) => {
    if (e.target.matches(".list-item")) {
      console.log("i'm being activate EL");
      const itemIndex = e.target.getAttribute("data-index-number");
      console.log("itemind", itemIndex);
      const listToOpen = allLists[itemIndex];
      console.log("open", listToOpen, itemIndex);
      if (itemIndex != 0) {
        openDialogForThisList(listToOpen, itemIndex);
      }
    }
  });

  //open task dialog
  const editTasks = document.querySelectorAll(".view-edit");
  console.log("this is on", editTasks);
  editTasks.forEach((editTask) => {
    editTask.addEventListener("click", () => {
      console.log("hiiiii");
      const itemIndex = editTask.getAttribute("data-index-number");
      console.log(itemIndex);
      const taskToOpen = allLists[0].tasksArray[itemIndex];
      openDialogForThisTask(taskToOpen, itemIndex);
    });
  });

  //open list
  const listIcons = document.querySelectorAll(".listAssignment");
  listIcons.forEach((listIcon) => {
    listIcon.addEventListener("click", () => {
      allLists.forEach((list) => {
        const listIconColour = listIcon.style.backgroundColor
          .toString()
          .replaceAll(" ", "");
        if (listIconColour === list.colour) {
          renderCoreApp(list);
        }
      });
    });
  });
}

export function completeTaskEL(list) {
  console.log("hello2");
  const completeTask = document.querySelectorAll(".completeBtn");
  completeTask.forEach((completeTaskBtn) => {
    console.log("hello3");
    completeTaskBtn.addEventListener("click", () => {
      console.log("tick");
      const taskToComplete = completeTaskBtn.getAttribute("data-index-number");
      console.log(taskToComplete);
      list.tasksArray[taskToComplete].completed =
        !list.tasksArray[taskToComplete].completed;
      // allLists.forEach((list) => {
      //   console.log(list);
      //   console.log("here", list.tasksArray[taskToComplete]);
      //   list.tasksArray[taskToComplete].completed =
      //     !list.tasksArray[taskToComplete].completed;
      // });
      renderCoreApp(list);
    });
  });
}
