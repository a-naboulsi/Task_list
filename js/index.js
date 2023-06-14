console.log('js is linked');

const newTaskDescriptionInput = document.querySelector('#taskDescript');
const newTaskAssignedToInput = document.querySelector('#assigned-to');
const newTaskDueDateInput = document.querySelector('#date');
const newTaskNameInput = document.querySelector('#newTaskInput');

function validFormFieldInput(data) {

    const description = newTaskDescriptionInput.value;
    console.log("description: " + description);

    const assignedTo = newTaskAssignedToInput.value;
    console.log("assignedTo: " + assignedTo);

    const dueDate =newTaskDueDateInput.value;
    console.log("dueDate: " + dueDate);

    const name = newTaskNameInput.value;
    console.log("name: " + name);

}
validFormFieldInput();

console.log('Is this on')
