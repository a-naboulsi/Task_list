// Getting the information from the dom
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

    // Reset error message '' = empty
    errorContainer.innerHTML = '';

    // Check if any field is empty '' 
    if (
      taskNameInput.value === '' ||
      taskDescriptionInput.value === '' ||
      assignedToInput.value === '' ||
      dateInput.value === ''
    ) {
      // if there is an empty field Show the alert with error message,
      showAlert('Please complete all fields.', 'danger');
    } else {
      // else Create a new task card
      const card = createTaskCard(
        taskNameInput.value,
        taskDescriptionInput.value,
        assignedToInput.options[assignedToInput.selectedIndex].text,// this converts the number value to the corresponding text (our names)
        dateInput.value
      );

      // Append the card to the container
      cardContainer.appendChild(card);

      // Reset the form
      form.reset();
    }
  });
  // this parts creates the task card from the form data
  function createTaskCard(name, description, assignedTo, dueDate) {
    const cardTemplate = document.querySelector('.main-card');
    const card = cardTemplate.cloneNode(true);
    card.classList.remove('hidden'); // added .hidden class so we could display none and make it dissaper in css
    card.classList.add('card-font'); // Add the 'card-font' so we can change the text styling in css

    // template  header litteral
    const taskNameElement = card.querySelector('.card-title');
    taskNameElement.innerHTML = `<strong>Task Name:</strong> ${name}`;
    // body of the card with template literal
    card.querySelector('.card-text:nth-child(2)').innerHTML = `<strong>Task Description:</strong> ${description}`; 
    card.querySelector('.card-text:nth-child(3)').innerHTML = `<strong>Assigned to:</strong> ${assignedTo}`;
    card.querySelector('.card-text:nth-child(4)').innerHTML = `<strong>Due Date:</strong> ${dueDate}`;

    const statusButton = card.querySelector('.btn');
    let clickCount = 0;
    // Button feature where we can click to change the color and status 
    statusButton.addEventListener('click', function () {
      clickCount++;

      if (clickCount === 1) {
        statusButton.classList.add('btn-warning'); // adds button at 1 click
        statusButton.textContent = 'Need Help!';
      } else if (clickCount === 2) {
        statusButton.classList.remove('btn-warning'); //takes away the previous button
        statusButton.classList.add('btn-success'); // adds new button
        statusButton.textContent = 'Completed';
      } else {
        clickCount = 0;
        statusButton.classList.remove('btn-success'); // removes last
        statusButton.textContent = 'Incomplete';
      }
    });

    return card;
  }

  // the alert function
  function showAlert(message, type) {
    // Creates the alert element
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-' + type, 'alert-dismissible', 'fade', 'show');
    alertElement.role = 'alert';

    // Create the alert message line
    const messageElement = document.createTextNode(message);

    // Create the close button it will close once the form is filled out completely 
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');

    // Append the message and close button to the alert
    alertElement.appendChild(messageElement);
    alertElement.appendChild(closeButton);

    // Append the alert to the alert container
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertElement);
  }
});