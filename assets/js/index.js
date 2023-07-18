//Getting the information from the DOM This one works but is missing the delete feature
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('taskForm');
  const taskNameInput = document.getElementById('taskNameInput');
  const taskDescriptionInput = document.getElementById('taskDescript');
  const assignedToInput = document.getElementById('assigned_to');
  const dateInput = document.getElementById('dueDate');

  const cardContainer = document.getElementById('cardContainer');

  const errorContainer = document.getElementById('alertContainer');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset error message
    errorContainer.innerHTML = '';

    // Check if any field is empty
    if (
      taskNameInput.value === '' ||
      taskDescriptionInput.value === '' ||
      assignedToInput.value === '' ||
      dateInput.value === ''
    ) {
      // If there is an empty field, show the alert with an error message
      showAlert('Please complete all fields.', 'danger');
    } else {
      // Else create a new task card
      const card = createTaskCard(
        taskNameInput.value,
        taskDescriptionInput.value,
        assignedToInput.options[assignedToInput.selectedIndex].text,
        dateInput.value
      );

      // Append the card to the container
      cardContainer.appendChild(card);

      // Reset the form
      form.reset();

      // Save the tasks to localStorage
      taskManager.save();
    }
  });
  function createTaskCard(name, description, assignedTo, dueDate) {
    const cardTemplate = document.querySelector('.main-card');
    const card = cardTemplate.cloneNode(true);
    card.classList.remove('hidden');
    card.classList.add('card-font');
  
    const taskNameElement = card.querySelector('.card-title');
    taskNameElement.innerHTML = `<strong>Task Name:</strong> ${name}`;
    card.querySelector('.card-text:nth-child(2)').innerHTML = `<strong>Task Description:</strong> ${description}`;
    card.querySelector('.card-text:nth-child(3)').innerHTML = `<strong>Assigned to:</strong> ${assignedTo}`;
    card.querySelector('.card-text:nth-child(4)').innerHTML = `<strong>Due Date:</strong> ${dueDate}`;
  
    const statusButton = card.querySelector('.btn-status');
    const deleteButton = card.querySelector('.btn-delete');
  
    let clickCount = 0;
  
    statusButton.addEventListener('click', function () {
      clickCount++;
  
      if (clickCount === 1) {
        statusButton.classList.add('btn-warning');
        statusButton.textContent = 'Need Help!';
      } else if (clickCount === 2) {
        statusButton.classList.remove('btn-warning');
        statusButton.classList.add('btn-success');
        statusButton.textContent = 'Completed';
      } else {
        clickCount = 0;
        statusButton.classList.remove('btn-success');
        statusButton.textContent = 'Incomplete';
      }
  
      // Save the tasks to localStorage
      taskManager.save();
    });
  
    deleteButton.addEventListener('click', function () {
      card.style.display = 'none'; // Hide the card by setting the display property to 'none'
      taskManager.save(); // Save the tasks to localStorage
    });
  
    return card;
  }
  


  function showAlert(message, type) {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-' + type, 'alert-dismissible', 'fade', 'show');
    alertElement.role = 'alert';

    const messageElement = document.createTextNode(message);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');

    alertElement.appendChild(messageElement);
    alertElement.appendChild(closeButton);

    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertElement);

    // Reset the form
    form.reset();

    // Save the tasks to localStorage
    taskManager.save();
  }
});

// Testing the TaskManager class
const taskManager = new TaskManager();
console.log(taskManager.tasks);