export const allProjects = [];

export default function createProject(title, description, colour) {
  const project = {
    title: title,
    description: description,
    colour: colour,
    todosArray: [],
    addToAllProjects: function () {
      allProjects.push(this);
    },
    addTodo: function (todo) {
      if (todo.assignedProjects.some((project) => project === this.title)) {
        this.todosArray.push(todo);
      }
    },
  };
  project.addToAllProjects();
  return project;
}
