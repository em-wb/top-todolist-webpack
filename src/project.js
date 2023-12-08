export default function project() {
  function createProject(title, description, colour) {
    return {
      title: title,
      description: description,
      colour: colour,
    };
  }

  const defaultProject = createProject(
    "Main Project",
    "All todo lists from all projects",
    "blue"
  );

  console.log(defaultProject);
  return { defaultProject: defaultProject };
}
