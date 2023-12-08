export default function project() {
  function createProject(title, description, dueDate, colour) {
    return {
      title: title,
      description: description,
      dueDate: dueDate,
      colour: colour,
    };
  }

  const project1 = createProject(
    "project one",
    "my first project",
    "01/05/2024",
    "blue"
  );

  console.log(project1);
}
