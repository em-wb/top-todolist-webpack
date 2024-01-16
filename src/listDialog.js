import createElement from "./createElement";
import createList, { removeList } from "./lists";
import Picker from "vanilla-picker";
import "vanilla-picker/dist/vanilla-picker.csp.css";
import renderAllLists from "./listsUI";

let newList = true;
let editedList = null;
let listIndex = null;
let listColor = null;

const listDialogElements = [
  {
    elements: [
      ["h1", null, null, "New List", [["id", "listDialogH1"]]],
      [
        "button",
        ["closeBtn", "fa-solid", "fa-xmark"],
        null,
        "",
        [["id", "closeListDialog"]],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Title"],
      [
        "input",
        "input",
        null,
        "",
        [
          ["id", "inputListTitle"],
          ["type", "text"],
          ["required", ""],
          ["placeholder", "Home Improvements"],
          ["maxlength", "50"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["label", "listColor", null, "List Colour"],
      [
        "div",
        "colorPickerContainer",
        null,
        "Color",
        [["id", "colorPickerContainer"]],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Description (optional)"],
      [
        "textarea",
        "input",
        null,
        "",
        [
          ["id", "inputListDesc"],
          ["rows", "2"],
          ["placeholder", "DIY tasks for our new house"],
          ["maxlength", "250"],
        ],
      ],
    ],
  },

  {
    elements: [
      [
        "button",
        "submitBtn",
        null,
        "List it",
        [
          ["id", "submitListBtn"],
          ["type", "submit"],
        ],
      ],
      ["button", "deleteBtn", null, "Delete it", [["id", "deleteListBtn"]]],
    ],
  },
];

export default function createNewListDialog() {
  const listDialog = createElement("dialog", "listDialog", content, "", [
    ["id", "listDialog"],
  ]);
  const newListForm = createElement("form", "newListForm", listDialog, "", [
    ["id", "newListForm"],
  ]);
  for (let i = 0; i < 5; i++) {
    const listDialogDiv = createElement("div", "dialogDivs", newListForm, "", [
      ["id", `listDialogDiv${i}`],
    ]);
    if (listDialogElements[i]) {
      listDialogElements[i].elements.forEach((elementArray) => {
        elementArray[2] = listDialogDiv;
        createElement(...elementArray);
      });
    }
  }
  const colorPickerContainer = document.getElementById("colorPickerContainer");
  let picker = new Picker({
    parent: colorPickerContainer,
    color: "gold",
    onChange: function (color) {
      listColor = color.rgbString;
      colorPickerContainer.style.backgroundColor = listColor;
      colorPickerContainer.style.color = listColor;
    },
  });
}

export function openDialogForThisList(listToOpen, listItemIndex) {
  if (listToOpen) {
    const newListForm = document.getElementById("newListForm");
    const listDialog = document.getElementById("listDialog");
    (newListForm.elements["inputListTitle"].value = listToOpen.title),
      (newListForm.elements["inputListDesc"].value = listToOpen.description);
    newList = false;
    editedList = listToOpen;
    listIndex = listItemIndex;
    listDialog.showModal();
  }
}

export function getListDialogELs() {
  const listDialog = document.getElementById("listDialog");
  const closeListDialog = document.getElementById("closeListDialog");
  const newListForm = document.getElementById("newListForm");
  const submitListBtn = document.getElementById("submitListBtn");
  const deleteListBtn = document.getElementById("deleteListBtn");

  document.getElementById("addNewListBtn").addEventListener("click", (e) => {
    e.preventDefault();
    listDialog.showModal();
  });

  closeListDialog.addEventListener("click", (e) => {
    newListForm.reset();
    listDialog.close();
  });

  submitListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedList) {
      removeList(editedList, listIndex);
    }

    createList(
      newListForm.elements["inputListTitle"].value,
      newListForm.elements["inputListDesc"].value,
      listColor
    );

    newListForm.reset();
    renderAllLists();
    listDialog.close();
  });

  deleteListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedList) {
      removeList(editedList, listIndex);
    }
    newListForm.reset();
    listDialog.close();
  });
}
