document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");


const newTaskUI = document.getElementById("tasks");

newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};


function handleSubmit(event) {
  event.preventDefault();

  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target.description.value;
  taskList.append(task);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(task);
  });
  task.append(deleteButton);

  event.target.reset();
};

const appendNewTask = tast => {
  document.getElementById("tasks").appendChild(task);
};
