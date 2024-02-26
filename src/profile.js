import createProfileUI from "./profileUI";

export default function loadProfileFromStorage() {
  const name = JSON.parse(localStorage.getItem("name")) || [];
  const avatar = JSON.parse(localStorage.getItem("avatar")) || [];
  createProfileUI(name, avatar);
}

export function saveNameToStorage(name) {
  const storeName = JSON.stringify(name);
  localStorage.setItem("name", storeName);
}

export function saveAvatarToStorage(avatar) {
  const storeAvatar = JSON.stringify(avatar);
  localStorage.setItem("avatar", storeAvatar);
}
