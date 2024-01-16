import { loadListsFromStorage } from "./lists";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  loadListsFromStorage();
});
