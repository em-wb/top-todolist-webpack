import renderMainForm, {
  renderCloseBtn,
  getViewCtr,
  renderDelete,
  renderSubmit,
} from "./addNew";

export function renderListForm(listToEdit) {
  const viewCtr = getViewCtr();
  const mainForm = renderMainForm("List", viewCtr, listToEdit);
  renderCloseBtn(viewCtr);
  const submitBtn = renderSubmit(mainForm);
  const deleteBtn = renderDelete(mainForm);
}
