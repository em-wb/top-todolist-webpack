import createProfileUI from "./profileUI";
import { AvatarGenerator } from "random-avatar-generator";

export default function loadProfileFromStorage() {
  const name = loadNameFromStorage();
  const avatar = loadAvatarFromStorage();
  createProfileUI(name, avatar);
}

export function loadAvatarFromStorage() {
  const avatar = JSON.parse(localStorage.getItem("avatar")) || [];
  return avatar;
}

export function loadNameFromStorage() {
  const name = JSON.parse(localStorage.getItem("name")) || [];
  return name;
}

export function saveNameToStorage(name) {
  const storeName = JSON.stringify(name);
  localStorage.setItem("name", storeName);
}

export function saveAvatarToStorage(avatar) {
  const storeAvatar = JSON.stringify(avatar);
  localStorage.setItem("avatar", storeAvatar);
}

export function getAvatar(avatar) {
  if (avatar.length > 0) {
    return avatar;
  }
  const generator = new AvatarGenerator();
  const defaultAvatar = generator.generateRandomAvatar("avatar");
  saveAvatarToStorage(defaultAvatar);
  return defaultAvatar;
}

export function getName(name) {
  if (name.length > 0) {
    return name;
  }
  name = "NewUser";
  saveNameToStorage(name);
  return name;
}
