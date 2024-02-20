import clearViewCtr from ".";
import { renderItemEdit, renderItemText } from "./appUI";
import createElement from "./createElement";
import { editedListLog } from "./addNewList";
import { getListData } from "./list";
import { renderListForm } from "./addNewList";
import { deleteList, loadListsFromStorage } from "./list";
import { loadTasksFromStorage } from "./tasks";

export default function renderList(list, i) {
  console.log("i", i);
  const listsCtr = document.getElementById("lists-ctr");
  const listItem = createElement("div", "list-item", listsCtr, "", [
    ["data-index-number", `${i}`],
  ]);
  const textCtr = renderItemText(list, listItem);
  const iconBtn = list.icon
    ? createElement("button", "list-icon-button", listItem, list.icon, [
        ["id", "list-icon-button"],
      ])
    : null;
  const viewEditBtn = renderItemEdit(listItem, i);
  const deleteBtn = renderItemDelete(listItem, i);
  console.log(list.icon, list.title);
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
    "View and edit all task lists"
  );
  addListOfListsCtr(viewCtr);
}

function renderItemDelete(ctr, index) {
  const openEditDiv = document.getElementById(`open-edit-div${index}`);
  const deleteBtn = createElement(
    "button",
    ["delete-list", "button"],
    openEditDiv,
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
      const listToEdit = getListData(editBtn.dataset.indexNumber);
      console.log(listToEdit, "listtoedit");
      editedListLog(listToEdit);
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
      console.log("ind", index);
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
      console.log(tagName, "tagname");
      if (tagName !== "BUTTON" && tagName !== "I") {
        console.log(tagName, "tagname");
        const index = listItem.dataset.indexNumber;
        clearViewCtr();
        loadTasksFromStorage(index);
      }
    });
  });
}
