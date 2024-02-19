import clearViewCtr from ".";
import { renderItemEdit, renderItemText } from "./appUI";
import createElement from "./createElement";

export default function renderList(list, i) {
  const listsCtr = document.getElementById("lists-ctr");
  const listItem = createElement("div", "list-item", listsCtr, "", [
    ["data-index-number", `${i}`],
  ]);
  const textCtr = renderItemText(list, listItem);
  const viewEditDiv = renderItemEdit(listItem, i);
}

function addListOfListsCtr(viewCtr) {
  createElement("div", "lists-ctr", viewCtr, "", [["id", "lists-ctr"]]);
}

export function allListsName() {
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
