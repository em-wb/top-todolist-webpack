import createElement from "./createElement";
import { allLists, removeTask } from "./lists";
import createTask from "./tasks";
import { renderCoreApp } from "./ui";

let newTask = true;
let editedTask = null;
let taskIndex = null;
const taskDialogElements = [
  {
    elements: [
      ["h1", null, null, "New Task", [["id", "taskDialogH1"]]],
      [
        "button",
        ["closeBtn", "fa-solid", "fa-xmark"],
        null,
        "",
        [["id", "closeTaskDialog"]],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Title"],
      [
        "input",
        "input",
        null,
        "",
        [
          ["id", "inputTaskTitle"],
          ["type", "text"],
          ["required", ""],
          ["placeholder", "Do the grocery shop"],
          ["maxlength", "50"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["label", null, null, "Description (optional)"],
      [
        "textarea",
        "input",
        null,
        "",
        [
          ["id", "inputTaskDesc"],
          ["rows", "2"],
          ["placeholder", "Eggs, milk, cereal, bread, bananas"],
          ["maxlength", "250"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["label", "textInput", null, "Due Date (optional)"],
      [
        "input",
        "input",
        null,
        "",
        [
          ["id", "inputTaskDate"],
          ["type", "date"],
        ],
      ],
    ],
  },
  {
    elements: [
      ["p", null, null, "Priority"],

      [
        "input",
        "highPriority",
        null,
        "",
        [
          ["id", "highPriorityTask"],
          ["type", "checkbox"],
        ],
      ],
      ["label", null, null, "High", [["for", "highPriorityTask"]]],
    ],
  },
  {
    elements: [
      ["label", null, null, "List (optional)"],
      [
        "input",
        null,
        null,
        "",
        [
          ["id", "dropdownList"],
          ["list", "listOfLists"],
        ],
      ],
      ["datalist", null, null, "", [, ["id", "listOfLists"]]],
    ],
  },
  {
    elements: [
      [
        "button",
        "submitBtn",
        null,
        "List it",
        [
          ["id", "submitTaskBtn"],
          ["type", "submit"],
        ],
      ],
      ["button", "deleteBtn", null, "Delete it", [["id", "deleteTaskBtn"]]],
    ],
  },
];

export default function createNewTaskDialog() {
  const dialog = createElement("dialog", "taskDialog", content, "", [
    ["id", "taskDialog"],
  ]);
  const newTaskForm = createElement("form", "newTaskForm", dialog, "", [
    ["id", "newTaskForm"],
  ]);
  for (let i = 0; i < 7; i++) {
    const taskDialogDiv = createElement("div", "dialogDivs", newTaskForm, "", [
      ["id", `taskDialogDiv${i}`],
    ]);
    if (taskDialogElements[i]) {
      taskDialogElements[i].elements.forEach((elementArray) => {
        elementArray[2] = taskDialogDiv;
        createElement(...elementArray);
      });
    }
  }
  //PLACEHOLDER... TO LOOP THROUGH LISTS LATER
  const dropdown = document.getElementById("listOfLists");
  createElement("option", null, dropdown, "", [["value", "All tasks"]]);
}

export function openDialogForThisTask(taskToOpen, itemIndex) {
  if (taskToOpen) {
    const newTaskForm = document.getElementById("newTaskForm");
    const taskDialog = document.getElementById("taskDialog");
    (newTaskForm.elements["inputTaskTitle"].value = taskToOpen.title),
      (newTaskForm.elements["inputTaskDesc"].value = taskToOpen.description);
    newTaskForm.elements["inputTaskDate"].value = taskToOpen.dueDate;
    newTaskForm.elements["highPriorityTask"].checked = taskToOpen.priority;
    newTaskForm.elements["dropdownList"].value = taskToOpen.assignedLists[0];
    newTask = false;
    editedTask = taskToOpen;
    taskIndex = itemIndex;
    taskDialog.showModal();
  }
}

// function removeTask(editedTask) {
//   editedTask.assignedLists = [];
//   editedTask = null;
// }

export function getTaskDialogELs() {
  const taskDialog = document.getElementById("taskDialog");
  const closeTaskDialog = document.getElementById("closeTaskDialog");
  const newTaskForm = document.getElementById("newTaskForm");
  const submitTaskBtn = document.getElementById("submitTaskBtn");
  const deleteTaskBtn = document.getElementById("deleteTaskBtn");

  document.getElementById("addNewBtn").addEventListener("click", (e) => {
    e.preventDefault();
    taskDialog.showModal();
  });

  closeTaskDialog.addEventListener("click", (e) => {
    newTaskForm.reset();
    taskDialog.close();
  });

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedTask) {
      console.log("submit editd");
      removeTask(editedTask, taskIndex);
    }
    const newTask = createTask(
      newTaskForm.elements["inputTaskTitle"].value,
      newTaskForm.elements["inputTaskDesc"].value,
      newTaskForm.elements["inputTaskDate"].value,
      newTaskForm.elements["highPriorityTask"].checked,
      newTaskForm.elements["dropdownList"].value,
      false
    );

    allLists.forEach((list) => {
      console.log(list);
      list.addTask(newTask);
    });

    newTaskForm.reset();
    taskDialog.close();
  });

  deleteTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("edited task?", editedTask);
    if (editedTask) {
      removeTask(editedTask, taskIndex);
      console.log("delete btn");
    }
    newTaskForm.reset();
    taskDialog.close();
  });
}
