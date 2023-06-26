
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
  }
  
  // Testing the TaskManager class
  const taskManager = new TaskManager();
  console.log(taskManager.tasks);
  