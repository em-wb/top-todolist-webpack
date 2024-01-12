import {
  clearContents,
  renderFooter,
  renderHeader,
  renderThisListEL,
} from "./tasksUI";
import renderMenuEvLis from "./menu";
import createElement from "./createElement";
import { allLists } from "./lists";
import createNewListDialog, {
  getListDialogELs,
  openDialogForThisList,
} from "./listDialog";

function renderListItems(listCtr) {
  let i = 0;
  allLists.forEach((list) => {
    const listItem = createElement("div", "list-item", listCtr);
    const textCtr = createElement("div", "text-ctr", listItem);
    createElement("h4", "listTitle", textCtr, list.title);
    createElement("p", "list-desc", textCtr, list.description);
    const listBtnsCtr = createElement("div", "list-btns-ctr", listItem);
    const editList = createElement(
      "div",
      ["editList", "view-edit", "fa-solid", "fa-eye"],
      listBtnsCtr,
      "",
      [
        ["data-index-number", i],
        ["id", `editList${i}`],
      ]
    );

    const listColor = createElement(
      "div",
      ["list-colour", list.colour, "listAssignment"],
      listBtnsCtr
    );
    listColor.style.backgroundColor = list.colour;
    createElement("hr", "break", listCtr);
    i++;
  });
  document.getElementById("editList0").classList.remove("editList", "fa-eye");
}

function editThisListEL() {
  const editLists = document.querySelectorAll(".editList");
  editLists.forEach((editList) => {
    editList.addEventListener("click", () => {
      const itemIndex = editList.getAttribute("data-index-number");
      console.log("itemind", itemIndex);
      const listToOpen = allLists[itemIndex];
      console.log("open", listToOpen, itemIndex);
      openDialogForThisList(listToOpen, itemIndex);
    });
  });
}

function renderListAppCtr() {
  const listCtr = createElement("div", "list-ctr", content, "");
  createElement(
    "button",
    ["addNewListBtn", "fa-solid", "fa-plus"],
    content,
    "",
    [["id", "addNewListBtn"]]
  );

  return { listCtr };
}

export default function renderAllLists() {
  clearContents();

  const { listCtr } = renderListAppCtr();
  renderHeader("", true);
  createNewListDialog();
  renderListItems(listCtr);
  renderFooter();
  getListDialogELs();
  renderMenuEvLis();
  editThisListEL();
  renderThisListEL();
}
