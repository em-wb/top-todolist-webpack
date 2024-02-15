let i = 0;

export default function createList(title, description, colour) {
  const list = {
    title: title,
    description: description,
    colour: colour,
    listID: getListID,
  };
  saveListToStorage(list);
}

function getListID() {
  i++;
  return i;
}

export function saveListToStorage(list) {
  localStorage.setItem("lists", list);
}

export function loadListsFromStorage() {
  const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
  storedLists.forEach((storedList) => {
    const newList = createList(
      storedList.title,
      storedList.description,
      storedList.colour,
      storedList.listID
    );
  });
  renderAllLists();
}
