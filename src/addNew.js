import createElement from "./createElement";

export default function renderMainForm(title, ctr, toEdit) {
  const addNew = createElement("div", "add-new", ctr, "", [["id", "add-new"]]);
  createElement("h1", "h1-new", addNew, title);
  const form = createElement("form", "form", addNew);
  const closeCtr = renderCloseBtn(form);
  const titleCtr = createElement("div", "form-ctr", form);
  const descCtr = createElement("div", "form-ctr", form);
  createElement("label", null, titleCtr, "Title", [["for", "inputTitle"]]),
    createElement("input", "input", titleCtr, "", [
      ["id", "inputTitle"],
      ["type", "text"],
      ["required", ""],
      [
        "placeholder",
        (title = "Task" ? "Do the grocery shop" : "House renovation"),
      ],
      ["maxlength", "50"],
      ["value", toEdit ? toEdit.title : ""],
    ]);
  createElement("label", null, descCtr, "Description (optional)", [
    ["for", "inputDesc"],
  ]),
    createElement(
      "textarea",
      "input",
      descCtr,
      toEdit ? toEdit.description : "",
      [
        ["id", "inputDesc"],
        ["rows", "2"],
        [
          "placeholder",
          (title = "Task"
            ? "Eggs, milk, cereal, bread, bananas"
            : "Tasks for project kick-off"),
        ],
        ["maxlength", "250"],
      ]
    );

  return form;
}

export function getViewCtr() {
  const viewCtr = document.getElementById("view-ctr");
  return viewCtr;
}

export function renderCloseBtn(ctr) {
  const closeBtnCtr = createElement("div", "close-ctr", ctr);
  const closeBtn = createElement(
    "button",
    ["close-btn", "fa-solid", "fa-xmark"],
    closeBtnCtr,
    "",
    [["id", "close-btn"]]
  );
  return closeBtn;
}

export function renderSubmit(ctr) {
  const submitBtn = createElement("button", "submitBtn", ctr, "List it", [
    ["id", "submitTaskBtn"],
    ["type", "submit"],
  ]);
  return submitBtn;
}

export function renderDelete(ctr) {
  const deleteBtn = createElement("button", "deleteBtn", ctr, "Delete it", [
    ["id", "deleteBtn"],
  ]);
  return deleteBtn;
}
