import clearViewCtr from ".";
import { renderItemEdit, renderItemText } from "./appUI";
import createElement from "./createElement";
import { editedListLog } from "./addNewList";
import { getListData } from "./list";
import { renderListForm } from "./addNewList";
import { deleteList, loadListsFromStorage } from "./list";
import { loadTasksFromStorage } from "./tasks";

export default function renderList(list, i) {
  const listsCtr = document.getElementById("lists-ctr");
  const listItem = createElement(
    "div",
    ["list-item", "item-ctr"],
    listsCtr,
    "",
    [["data-index-number", `${i}`]]
  );
  const textCtr = renderItemText(list, listItem);
  const icon = renderListIcon(list, listItem);
  if (i !== 0) {
    const viewEditBtn = renderItemEdit(listItem, i);
    const deleteBtn = renderItemDelete(listItem, i);
  }
}

function renderListIcon(list, ctr) {
  const iconDiv = createElement("div", "icon-div", ctr);
  const listIcon = list.icon
    ? createElement("button", "list-icon-btn", iconDiv, list.icon, [
        ["id", "list-icon"],
      ])
    : null;
  return iconDiv;
}

function addListOfListsCtr(viewCtr) {
  createElement("div", "lists-ctr", viewCtr, "", [["id", "lists-ctr"]]);
}

export function allListsView() {
  clearViewCtr();
  const viewCtr = document.getElementById("view-ctr");
  const headingCtr = createElement("div", "heading-ctr", viewCtr);
  const h1 = createElement("h1", "h1", headingCtr, "All Lists");
  const desc = createElement(
    "p",
    "desc",
    headingCtr,
    "View and edit all lists"
  );
  addListOfListsCtr(viewCtr);
}

function renderItemDelete(ctr, index) {
  const deleteDiv = createElement("div", "delete-div", ctr);
  const deleteBtn = createElement(
    "button",
    ["delete-list", "button"],
    deleteDiv,
    "",
    [["data-index-number", index]]
  );
  createElement(
    "i",
    ["delete-list-icon", "fa-solid", "fa-trash"],

    deleteBtn,
    "",
    [["title", "Delete list"]]
  );
  return deleteBtn;
}

export function addListEventLis() {
  editListEL();
  deleteListEL();
  openListEL();
}

function editListEL() {
  const editBtns = document.querySelectorAll(".open-edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const index = editBtn.dataset.indexNumber;
      const listToEdit = getListData(index);
      editedListLog(index);
      clearViewCtr();
      renderListForm(listToEdit);
    });
  });
}

function deleteListEL() {
  const deleteBtns = document.querySelectorAll(".delete-list");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      const index = deleteBtn.dataset.indexNumber;
      deleteList(index);
      clearViewCtr();
      loadListsFromStorage();
    });
  });
}

function openListEL() {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((listItem) => {
    listItem.addEventListener("click", (e) => {
      const tagName = e.target.tagName;
      if (tagName !== "I") {
        const index = listItem.dataset.indexNumber;
        clearViewCtr();
        loadTasksFromStorage(index);
      }
    });
  });
}
