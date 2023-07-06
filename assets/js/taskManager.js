
class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
  // add task function
    addTask(name, description, assignedTo, dueDate, status = 'TODO') {
      this.currentId++;
      const task = {
        id: this.currentId,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: status
      };
      this.tasks.push(task);
    }
    //Add the save method
    save() {
      const tasksJson = JSON.stringify(this.tasks);
      localStorage.setItem("tasks", tasksJson);
  
      const currentId = String(this.currentId);
      localStorage.setItem("currentId", currentId);
    }
  }
  
  //add the load method

  load() {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }

    const currentId = localStorage.getItem("currentId");

    if (currentId) {
      this.currentId = Number(currentId);
    }
  };


const taskManager = new TaskManager();
taskManager.load();
taskManager.render();


  taskManager.save();
  
  console.log(taskManager.tasks);


    // save() {
    //   let tasksJson = JSON.stringify({name: 'name', description: 'description', assignedTo: 'assignedTo', dueDate: 'dueDate', status: 'status'});
    //   localStorage.setItem('tasks', tasksJson);
    //   let currentIdString = this.currentId.toString();
    //   localStorage.setItem('currentId', currentIdString);
    // }
    // };
  
  // // Testing the TaskManager class
  // const taskManager = new TaskManager();
  // console.log(taskManager.tasks);
  
