export default function todo() {
  function createToDo(title, description, dueDate, priority) {
    return {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
    };
  }

  const toDo1 = createToDo(
    "My first to do",
    "I need to do something",
    "01/03/2024",
    "high"
  );

  console.log(toDo1);
}
