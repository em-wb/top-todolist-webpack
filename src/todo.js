export default function createTodo(
  title,
  description,
  dueDate,
  priority,
  projects,
  completed
) {
  const todo = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedProjects: projects,
    completed: completed,
  };

  return todo;
}
