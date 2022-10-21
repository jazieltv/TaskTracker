const addButton = document.getElementById("input-btn");

function myFunction() {
  //creats a variable task and pulls the "value" which is the text that is inside the textbox
  const task = document.getElementById("inputText").value;
  //ceats a new variable taskText and initiailizing (gives it a value of sorts) the div tag
  const taskText = document.createElement("div");
  //takes the inside of taskText, which is a div, and then inserts task, which is the value=text inside the textbox
  taskText.innerHTML = task;
  //creates new variable tasklist& initializes it to the div-tasks and "tasklist" is used to reference it later in the code
  const taskList = document.getElementById("tasks");
  //*read right to left, only this line */ taking taskText and appending it into taskList
  taskList.appendChild(taskText);
}
