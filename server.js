const fs = require("fs");
//express is there to condense typing
const express = require("express");
//UUID package was installed to assign a unique id to each task for saving and deleting data
const { v1: uuid } = require("uuid");
// app = express initializes the framework
const app = express();
//port where server is running
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/tasks", (req, res) => {
  //readfile is async
  fs.readFile(__dirname + "/taskData.json", (err, data) => {
    console.log(JSON.parse(data).items);
    if (err) {
      console.log("missing JSON file");
      res.status(500);
      return;
    }
    //The res.status functions basically sets the http status for the response
    //200 means the request is fufilled.
    res.status(200).json(JSON.parse(data).items);
  });
});

app.post("/tasks", (req, res) => {
  fs.readFile(__dirname + "/data.json", (err, data) => {
    //parsing turns 'data' into an object that we can now manipulate
    const tasks = JSON.parse(data);
    if (err) {
      console.log("missing JSON file");
      res.status(500);
      return;
    }
    tasks.push(req.body);
    fs.writeFile(__dirname + "/data.json", JSON.stringify(tasks));
    res.status(200)
  });
});

app.put("/tasks/:id", (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, data) => {
      const tasks = JSON.parse(data);
      if (err) {
        console.log("missing JSON file");
        res.status(500);
        return;
      }
      //tasks.find will run through all of the tasks within the object and returns the tasks 
      //where thr task id is eequals params.id=":id"
    //   const task = tasks.find(task => task.id == req.params.id)
      for (var i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        //Do something
    }
    }      





//adding to the list
localStorage.setItem("myStorage", JSON.stringify(taskListBody));
taskListBody = JSON.parse(localStorage.getItem("myStorage"));
