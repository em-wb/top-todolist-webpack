import renderAppUI from "./appUI";
import { loadListsFromStorage } from "./lists";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  renderAppUI();
  loadListsFromStorage();
});
