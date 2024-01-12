import createList, {
  allLists,
  loadListsFromStorage,
  saveListToStorage,
} from "./lists";
import createTask from "./tasks";
import { renderCoreApp } from "./tasksUI";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  loadListsFromStorage();
});
