class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
    this.load(); // Load tasks from local storage when creating an instance of TaskManager
  }

  load() {
    const tasksJson = localStorage.getItem('tasks');
    const currentIdString = localStorage.getItem('currentId');

    if (tasksJson && currentIdString) {
      this.tasks = JSON.parse(tasksJson);
      this.currentId = parseInt(currentIdString);
    }
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);

    const currentIdString = this.currentId.toString();
    localStorage.setItem('currentId', currentIdString);
  }

  addTask(taskName, taskDescription, taskAssignedTo) {

    this.save(); 
  }

  updateTaskStatus(taskId, status) {
 
    this.save(); // Save tasks after updating task status
  }

 
}


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
// maybe delete

// Testing the TaskManager class
const taskManager = new TaskManager();
console.log(taskManager.tasks);