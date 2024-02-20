import renderMainForm, {
  renderCloseBtn,
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import createList, { loadListsFromStorage, deleteList } from "./list";
import clearViewCtr from ".";
import { addListEventLis } from "./allListsUI";

let edited = false;
let editedIndex;

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  const closeBtn = renderCloseBtn(viewCtr);
  const submitBtn = renderSubmit(mainForm);
  const deleteBtn = renderDelete(mainForm);
  submitListEL(submitBtn);
  deleteListEL(deleteBtn);
  closeListEL(closeBtn);
}

export function editedListLog(index) {
  editedIndex = index;
  edited = true;
}

function deleteListEL(deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (edited) {
      deleteList(editedIndex);
    }
    clearViewCtr();
    loadListsFromStorage();
    addListEventLis();
    edited = false;
    editedIndex = null;
  });
}

function closeListEL(closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    clearViewCtr();
    loadListsFromStorage();
    edited = false;
    editedIndex = null;
  });
}

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
    addListEventLis();
    edited = false;
    editedIndex = null;
  });
}
