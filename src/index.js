document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", addItem);
});

function addItem(event) {
  event.preventDefault();
  let newInput = document.getElementById("new-task-description");
  let listItem = document.createElement("li");
  let ulTasks = document.getElementById("tasks");
  listItem.innerHTML = newInput.value;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", onDeleteClick);
  listItem.appendChild(deleteButton);

  ulTasks.appendChild(listItem);
  newInput.value = "";
}

function onDeleteClick(event) {
  const deleteButton = event.currentTarget;
  const listItem = deleteButton.parentElement;
  const list = listItem.parentElement;
  list.removeChild(listItem);
}
