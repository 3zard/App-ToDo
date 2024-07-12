let array = [];
function add() {
  const li = document.createElement("li");
  li.className = "not-done";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  const inputText = document.getElementById("inputValue").value;
  text.textContent = inputText;

  const editButton = document.createElement("button");
  editButton.className = "button";
  editButton.id = "edit__button";
  editButton.textContent = "Edit";
  editButton.addEventListener("click", editTask);

  const deleteButton = document.createElement("button");
  deleteButton.className = "button";
  deleteButton.id = "delete__button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  const taskList = document.getElementById("taskList");
  taskList.appendChild(li);
  array.push(li);
  console.log(array);
}

function editTask(e) {}

function deleteTask() {}


