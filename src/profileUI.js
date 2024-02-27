import createElement from "./createElement";
import { getViewCtr } from "./addNew";
import {
  saveNameToStorage,
  saveAvatarToStorage,
  getName,
  getAvatar,
} from "./profile";

export default function createProfileUI(name, avatar) {
  const viewCtr = getViewCtr();
  const profileCtr = createElement("div", "profile-ctr", viewCtr);
  const avatarCtr = createElement("div", "avatar-ctr", profileCtr);
  const avatarImg = avatarUI(avatar, avatarCtr);
  const nameCtr = createElement("div", "profile-name-ctr", profileCtr);
  const currentName = getName(name);
  const profileName = createElement("p", "profile-name", nameCtr, currentName);
  const buttonCtr = createElement("div", "button-ctr", profileCtr);
  const editName = createElement(
    "button",
    "edit-name-btn",
    buttonCtr,
    "Edit name"
  );
  const editAvatar = createElement(
    "button",
    "avatar-btn",
    buttonCtr,
    "Random avatar"
  );
  editNameEL(editName, profileName);
  randomAvatarEL(avatarImg, editAvatar);
}

function avatarUI(avatar, avatarCtr) {
  const currentAvatar = getAvatar(avatar);
  const avatarImg = createElement("img", "avatar", avatarCtr, "", [
    ["src", currentAvatar],
  ]);
  return avatarImg;
}

function randomAvatarEL(img, btn) {
  btn.addEventListener("click", () => {
    const generator = new AvatarGenerator();
    const avatar = generator.generateRandomAvatar();
    saveAvatarToStorage(avatar);
    img.setAttribute("src", avatar);
  });
}

function editNameEL(editName, profileName) {
  editName.addEventListener("click", () => {
    const name = prompt("Enter profile name");
    profileName.textContent = name;
    saveNameToStorage(name);
  });
}
