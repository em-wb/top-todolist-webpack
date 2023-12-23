export function addAssignedList(list) {
  if (list.tasksArray.some((task) => task === this.task)) {
    this.assignedLists.push(list);
  }
}

export default function createTask(
  title,
  description,
  dueDate,
  priority,
  lists,
  completed
) {
  const task = {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    assignedLists: Array.isArray(lists) ? lists : [lists],
    completed: completed,
    addAssignedList: addAssignedList,
  };

  console.log(task);
  return task;
}
