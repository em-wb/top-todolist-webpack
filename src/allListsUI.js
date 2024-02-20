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
  const viewEditBtn = renderItemEdit(listItem, i);
  const deleteBtn = renderItemDelete(listItem, i);
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

//  const listItem = createElement("div", "list-item", listCtr, "", [
//       ["data-index-number", i],
//     ]);
//     const textCtr = createElement("div", "text-ctr", listItem);
//     createElement("h4", "listTitle", textCtr, list.title);
//     createElement("p", "list-desc", textCtr, list.description);
//     const listBtnsCtr = createElement("div", "list-btns-ctr", listItem);
//     const editList = createElement(
//       "div",
//       ["editList", "view-edit", "fa-solid", "fa-eye"],
//       listBtnsCtr,
//       "",
//       [
//         ["data-index-number", i],
//         ["id", `editList${i}`],
//       ]
//     );

//     const listColor = createElement(
//       "div",
//       ["list-colour", list.colour, "listAssignment"],
//       listBtnsCtr
//     );
//     listColor.style.backgroundColor = list.colour;
//     createElement("hr", "break", listCtr);
//     i++;
//   });
//   document.getElementById("editList0").classList.remove("editList", "fa-eye");
// }

// function renderListAppCtr() {
//   const listCtr = createElement("div", "list-ctr", content, "");
//   createElement(
//     "button",
//     ["addNewListBtn", "fa-solid", "fa-plus"],
//     content,
//     "",
//     [["id", "addNewListBtn"]]
//   );

//   return { listCtr };
// }
