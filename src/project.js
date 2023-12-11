export const allProjects = [];

function addToAllProjects() {
  allProjects.push(this);
}

function addTodo(todo) {
  if (todo.assignedProjects.some((project) => project === this.title)) {
    this.todosArray.push(todo);
  }
}

export default function createProject(title, description, colour) {
  const project = {
    title: title,
    description: description,
    colour: colour,
    todosArray: [],
    addToAllProjects: addToAllProjects,
    addTodo: addTodo,
  };

  project.addToAllProjects();
  return project;
}
