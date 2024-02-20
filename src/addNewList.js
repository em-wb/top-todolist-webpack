import renderMainForm, {
  renderCloseBtn,
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import { editedLog } from "./addNewTask";
import createList, { loadListsFromStorage } from "./list";
import clearViewCtr from ".";

let edited = false;
let editedIndex;

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  renderCloseBtn(viewCtr);
  const submitBtn = renderSubmit(mainForm);
  const deleteBtn = renderDelete(mainForm);
  submitListEL(submitBtn);
}

// function deleteTaskEL(deleteTaskBtn) {
//   deleteTaskBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (edited) {
//       deleteTask(taskIndex);
//     }
//     clearViewCtr();
//     addTaskCtrs();
//     loadTasksFromStorage(1); //currentlist
//     addTaskEventLis();
//     edited = false;
//     taskIndex = null;
//   });
// }

// function closeFormEL(closeBtn) {
//   closeBtn.addEventListener("click", (e) => {
//     clearViewCtr();
//     addTaskCtrs();
//     loadTasksFromStorage(1); //currentlist
//     addTaskEventLis();
//     edited = false;
//     taskIndex = null;
//   });
// }

function submitListEL(submitListBtn) {
  submitListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      deleteList(editedIndex);
    }
    createList(
      document.getElementById("inputTitle").value,
      document.getElementById("inputDesc").value,
      "blue" //add colour chart
    );
    clearViewCtr();
    loadListsFromStorage();
    addListELs();
    edited = false;
    editedIndex = null;
  });
}
