import renderMainForm, {
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import createList, { loadListsFromStorage, deleteList } from "./list";
import clearViewCtr from ".";
import { addListEventLis } from "./allListsUI";
import createElement from "./createElement";
import "emoji-picker-element";

let edited = false;
let editedIndex;

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  const iconCtr = createElement("div", "choose-icon-ctr", mainForm);
  const iconBtn = createElement("button", "icon-btn", iconCtr, "Add icon", [
    ["id", "icon-btn"],
  ]);
  const selectedEmoji = renderSelectedEmoji(iconCtr);
  const emojiPicker = renderEmojiPicker(mainForm, selectedEmoji);
  const buttonCtr = createElement("div", "button-ctr", mainForm);
  const submitBtn = renderSubmit(buttonCtr);
  const deleteBtn = renderDelete(buttonCtr);
  iconBtnEL(iconBtn, emojiPicker);
  submitListEL(submitBtn);
  deleteListEL(deleteBtn);
  closeListEL();
}

function renderSelectedEmoji(mainForm) {
  // createElement("label", "select-emoji", mainForm, "List Icon", [
  //   ["for", "selected-emoji"],
  // ]);
  const selectedEmoji = createElement("input", "selected-emoji", mainForm, "", [
    ["id", "selected-emoji"],
    ["title", "View List"],
  ]);

  return selectedEmoji;
}

function renderEmojiPicker(mainForm, selectedEmoji) {
  const emojiPicker = createElement(
    "emoji-picker",
    ["emoji-picker", "hidden"],
    mainForm
  );
  emojiPicker.addEventListener("emoji-click", (e) => {
    selectedEmoji.value = e.detail.unicode;
    emojiPicker.classList.toggle("hidden");
  });
  return emojiPicker;
}

export function editedListLog(index) {
  editedIndex = index;
  edited = true;
}

function iconBtnEL(iconBtn, emojiPicker) {
  iconBtn.addEventListener("click", (e) => {
    e.preventDefault();
    emojiPicker.classList.toggle("hidden");
  });
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

function closeListEL() {
  document.getElementById("close-btn").addEventListener("click", (e) => {
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
      document.getElementById("selected-emoji").value
    );
    clearViewCtr();
    loadListsFromStorage();
    addListEventLis();
    edited = false;
    editedIndex = null;
  });
}
