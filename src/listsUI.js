import {
  clearContents,
  renderFooter,
  renderHeader,
  renderThisListEL,
} from "./tasksUI";
import renderMenuEvLis from "./menu";
import createElement from "./createElement";
import { allLists } from "./lists";
import createNewListDialog, { getListDialogELs } from "./listDialog";

function renderListItems(listCtr) {
  allLists.forEach((list) => {
    const listItem = createElement("div", "list-item", listCtr);
    const textCtr = createElement("div", "text-ctr", listItem);
    createElement("h4", "listTitle", textCtr, list.title);
    createElement("p", "list-desc", textCtr, list.description);
    const listColor = createElement(
      "div",
      ["list-colour", list.colour, "listAssignment"],
      listItem
    );
    listColor.style.backgroundColor = list.colour;
    createElement("hr", "break", listCtr);
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
  console.log("renderlists");
  // renderThisListEL();
}
