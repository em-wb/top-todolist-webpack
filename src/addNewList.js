import renderMainForm, {
  renderCloseBtn,
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";
import createList, { loadListsFromStorage, deleteList } from "./list";
import clearViewCtr from ".";
import { addListEventLis } from "./allListsUI";
import createElement from "./createElement";
// import Picker from "vanilla-picker";
// import "vanilla-picker/dist/vanilla-picker.csp.css";
import "emoji-picker-element";

let edited = false;
let editedIndex;

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  const closeBtn = renderCloseBtn(viewCtr);

  const iconBtn = createElement("button", "icon-btn", mainForm, "Add icon", [
    ["id", "icon-btn"],
  ]);
  const selectedEmoji = renderSelectedEmoji(mainForm);
  const emojiPicker = renderEmojiPicker(mainForm, selectedEmoji);
  const submitBtn = renderSubmit(mainForm);
  const deleteBtn = renderDelete(mainForm);
  iconBtnEL(iconBtn, emojiPicker);
  submitListEL(submitBtn);
  deleteListEL(deleteBtn);
  closeListEL(closeBtn);
}

function renderSelectedEmoji(mainForm) {
  createElement("label", "select-emoji", mainForm, "List Icon", [
    ["for", "selected-emoji"],
  ]);
  const selectedEmoji = createElement("input", "selected-emoji", mainForm, "", [
    ["id", "selected-emoji"],
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
      document.getElementById("selected-emoji").value
    );
    clearViewCtr();
    loadListsFromStorage();
    addListEventLis();
    edited = false;
    editedIndex = null;
  });
}
