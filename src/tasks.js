export default function createTask(
  title,
  description,
  dueDate,
  priority,
  completed,
  additionalList
) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedLists: additionalList ? [1, additionalList] : [1],
    completed: completed,
  };

  return task;
}
