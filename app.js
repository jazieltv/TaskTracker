const addButton = document.getElementById("input-btn");
const uuid = required("uuid");
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
  //initialize array so i can use it to add the "value" to it eventually....pushing the tasks into the new array
  var taskListBody = new Array();
  taskListBody.push(task);

  //code pulled from richard where he uses express to send data to the json file and then also pull it back out
  app.post("/saveItem", (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, data) => {
      const id = uuid();
      const taskData = JSON.parse(data);
      req.body.id = id;
      taskData.items[taskData.items.length] = req.body;
      fs.writeFileSync(__dirname + "/data.json", JSON.stringify(taskData));
      res.status(200).json({ message: "New item Saved", id: id });
    });
  });
  //
}
