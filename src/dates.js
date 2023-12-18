import { format, parseISO, isPast, isToday } from "date-fns";

function checkIfPast(date, dueDateDiv) {
  if (isPast(date)) dueDateDiv.classList.add("overdue");
}

function checkIfToday(date, dueDateDiv) {
  if (isToday(date)) {
    dueDateDiv.classList.add("today");
  }
}

export default function formatDueDates() {
  console.log("due");
  const dueDates = document.querySelectorAll(".dueDate");
  dueDates.forEach((dueDate) => {
    const date = dueDate.innerText;
    const parsedDate = parseISO(date);
    checkIfPast(parsedDate, dueDate);
    checkIfToday(parsedDate, dueDate);
    const formattedDate = format(parsedDate, "dd MMM yy");
    dueDate.innerText = formattedDate;
  });
}
