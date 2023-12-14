export default function getEventListeners() {
  const taskDialog = document.getElementById("taskDialog");

  document.getElementById("addNewBtn").addEventListener("click", (e) => {
    e.preventDefault();
    taskDialog.showModal();
  });
}
