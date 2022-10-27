//Select DOM
const input = document.querySelector(".todo-input");
const taskbutton = document.querySelector(".todo-button");
const tasklist = document.querySelector(".todo-list");

//Event Listeners
//DOMContent on webpage is loaded, if loaded then getTodos will run
document.addEventListener("DOMContentLoaded", getTodos);
taskbutton.addEventListener("click", addTodo);
tasklist.addEventListener("click", deleteTodo);
//Functions
function addTodo(e) {
  //Preventing form from submitting if cancelable
  e.preventDefault();

  //Validation for user input
  if (input.value == "") {
    return alert("You must type something! Try again.");
  }
  //Creating todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;

  //Save to local storage
  saveLocalTodos(input.value);

  //Adding task to LS using append
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  input.value = "";

  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check">Complete</i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash">Delete</i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Create edit Button
  const editButton = document.createElement("button");
  editButton.innerHTML = `<i class="fa fa-user-edit">Edit</i>`;
  editButton.classList.add("edit-btn");
  todoDiv.appendChild(editButton);
  tasklist.appendChild(todoDiv);
  document
    .querySelector(".edit-btn")
    .addEventListener("click", function edittaskfunc() {
      let changeTaskDesc = prompt("Change Task Here");
      let stringeddesc = changeTaskDesc.toString();
      document.querySelector(
        ".edit-btn"
      ).parentElement.firstElementChild.innerText = stringeddesc;
    });
}

//Delete button
function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  //Completed check button
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//Saving local storage
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    input.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check">Complete</i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash">Delete</i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa fa-user-edit">Edit</i>`;
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    //attach final Todo
    tasklist.appendChild(todoDiv);
  });
}

//Removing from local storage
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
