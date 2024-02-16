import createElement from "./createElement";

export default function renderAppUI() {
  renderHeader();
  renderNav();
  renderViewCtr();
  addNewBtn();
}

const iconListNav = [
  { classes: ["fa-solid", "fa-list"], text: "All tasks" },
  { classes: ["fa-solid", "fa-star"], text: "Today" },
  { classes: ["fa-solid", "fa-folder-tree"], text: "All Lists" },
  { classes: ["fa-solid", "fa-user"], text: "Profile" },
];

function getIconMenu(menuDiv) {
  let i = 1;
  iconListNav.forEach((icon) => {
    const menuItemDiv = createElement("div", "menuItemDiv", menuDiv, "", [
      ["id", `menuItem${i}`],
    ]);
    createElement("i", icon.classes, menuItemDiv);
    createElement("small", "menuText", menuItemDiv, icon.text);
    i++;
  });
}

export function renderNav() {
  const nav = createElement("footer", null, content);
  const menuDiv = createElement("div", "menuDiv", nav);
  getIconMenu(menuDiv);
  createElement("h3", "logo", nav, "Absolistly");
}

export function renderHeader() {
  const header = createElement("header", "header", content);
  createElement("h3", "logo", header, "Absolistly");
  const headerProfile = createElement("div", "header-profile", header);
  createElement(
    "i",
    ["profile-pic", "fa-solid", "fa-person-burst"],
    headerProfile
  );
}

export function renderViewCtr() {
  const viewCtr = createElement("div", "view-ctr", content, "", [
    ["id", "view-ctr"],
  ]);
  const todoDoneCtr = createElement("div", "todo-done-ctr", viewCtr);
  createElement("div", "todo-ctr", todoDoneCtr, "", [["id", "todo-ctr"]]);
  const doneCtr = createElement("div", "done-ctr", todoDoneCtr, "", [
    ["id", "done-ctr"],
  ]);
  createElement("h2", "done-title", doneCtr, "Done");
}

function addNewBtn() {
  const addNewBtn = createElement(
    "button",
    ["add-new-btn", "fa-solid", "fa-plus"],
    content,
    "",
    [["id", "add-new-btn"]]
  );
}
