import { renderListName } from "./listUI";
import renderList, { allListsView } from "./allListsUI";
import { addListEventLis } from "./allListsUI";

export default function createList(title, description, icon) {
  const list = {
    title: title,
    description: description,
    icon: icon,
  };
  addListToStorage(list);
  return list;
}

export function getStoredLists() {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  return storedLists;
}

export function addListToStorage(list) {
  const lists = getStoredLists();
  lists.push(list);
  const listData = JSON.stringify(lists);
  localStorage.setItem("lists", listData);
}

export function getListData(index) {
  const storedLists = getStoredLists();
  if (storedLists.length > 0) {
    const foundList = storedLists[index];
    if (foundList) {
      return foundList;
    }
    return null;
  }
}

export function getListInfo(ID) {
  const list = getListData(ID);
  if (list) {
    renderListName(list.title, list.description);
  } else {
    const allTasks = createList("All tasks", "View all your tasks", null);
    renderListName(allTasks.title, allTasks.description);
  }
}

export function loadListsFromStorage() {
  allListsView();
  const storedLists = getStoredLists();
  let i = 0;
  storedLists.forEach((storedList) => {
    renderList(storedList, i);
    i++;
  });
  addListEventLis();
}

export function deleteList(index) {
  const lists = getStoredLists();
  if (lists.length > 0) {
    lists.splice(index, 1);
    const listData = JSON.stringify(lists);
    localStorage.setItem("lists", listData);
  }
}
