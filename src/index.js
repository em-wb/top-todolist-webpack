import createProject, { allProjects } from "./project";
import createTodo from "./todo";
import { renderCoreUI } from "./ui";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const defaultProject = createProject(
    "All Projects",
    "Description of my project",
    "blue"
  );

  const todo1 = createTodo(
    "My first to do",
    "I need to do something",
    "01/03/2024",
    "high",
    [defaultProject.title],
    false
  );

  allProjects.forEach((project) => {
    project.addTodo(todo1);
  });

  console.log("todo", todo1);
  console.log("default", defaultProject);
  console.log("allprojects", allProjects);

  renderCoreUI();
});
