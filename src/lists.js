import { renderListName, renderTask } from "./listUI";

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

// export function loadListsFromStorage() {
//   const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
//   storedLists.forEach((storedList) => {
//     const newList = createList(
//       storedList.title,
//       storedList.description,
//       storedList.colour,
//       storedList.listID
//     );
//   });
//   if (newList) {
//     renderList(newList);
//   }
// }
