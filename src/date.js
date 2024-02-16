import { format, parseISO, isPast, isToday } from "date-fns";

function checkIfPast(date, dueDateDiv) {
  if (isPast(date)) dueDateDiv.classList.add("overdue");
}

function checkIfToday(date, dueDateDiv) {
  if (isToday(date)) {
    dueDateDiv.classList.add("today");
  }
}

export default function formatDueDates(date, dueDateDiv) {
  //   const dueDates = document.querySelectorAll(".due-date");
  //   dueDates.forEach((dueDate) => {
  if (date) {
    //   const date = dueDate.innerText;
    const parsedDate = parseISO(date);
    checkIfPast(parsedDate, dueDateDiv);
    checkIfToday(parsedDate, dueDateDiv);
    const formattedDate = format(parsedDate, "dd MMM yy");
    //   dueDate.innerText = formattedDate;
    return formattedDate;
  }
  //   });
}
