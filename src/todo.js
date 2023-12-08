export default function todo(defaultProject) {
  function createToDo(title, description, dueDate, defaultProject, priority) {
    return {
      title: title,
      description: description,
      dueDate: dueDate,
      project: defaultProject,
      priority: priority,
    };
  }

  const toDo1 = createToDo(
    "My first to do",
    "I need to do something",
    "01/03/2024",
    defaultProject,
    "high"
  );

  console.log(toDo1);
}
