import { renderListName, renderTask } from "./listUI";
import renderList, { allListsName } from "./allListsUI";

let i = 0; //listID

export default function createList(title, description, color) {
  const listID = getListID();

  const list = {
    title: title,
    description: description,
    color: color,
    listID: listID,
  };
  addListToStorage(list);
  return list;
}
function getListID() {
  i++;
  return i;
}

export function addListToStorage(list) {
  const lists = JSON.parse(localStorage.getItem("lists")) || [];
  lists.push(list);
  const listData = JSON.stringify(lists);
  localStorage.setItem("lists", listData);
}

export function getListInfo(ID) {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  if (storedLists.length > 0) {
    storedLists.forEach((storedList) => {
      if (storedList.listID == ID) {
        renderListName(storedList.title, storedList.description);
      }
    });
  } else {
    const allTasks = createList(
      "All tasks",
      "All your tasks in one list",
      "blue"
    );
    renderListName(allTasks.title, allTasks.description);
  }
}

export function loadListsFromStorage() {
  allListsName();
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  let i = 0;
  storedLists.forEach((storedList) => {
    renderList(storedList, i);
    i++;
  });
}
