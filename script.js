const taskList = document.getElementById("taskList")
let array = [];
function add() {
  const inputText = document.getElementById("inputValue").value;
  if (inputText == "") {
    alert("Please enter task name!")
    return
  }
  const li = document.createElement("li");
  li.className = "not-done";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
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
  taskList.appendChild(li);
  array.push(li);

  document.getElementById("inputValue").value = ""
}

function editTask(e) {
  const parentElement = e.target.parentElement
  
  const editText = document.createElement("input")
  editText.type = "text"

  const saveButton = document.createElement("button");
  saveButton.className = "button";
  saveButton.id = "save__button";
  saveButton.textContent = "Save";
  // replace
  parentElement.replaceChild(editText, parentElement.childNodes[1]);

  // hide
  parentElement.childNodes[0].style.display = "none"
  parentElement.childNodes[2].style.display = "none"
  parentElement.childNodes[3].style.display = "none"

  parentElement.appendChild(saveButton)

  // code .... 

}

function deleteTask(e) {
  const parentElement = e.target.parentElement
  taskList.removeChild(parentElement)
  array.splice(array.indexOf(parentElement),1)
}


