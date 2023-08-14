// Array to store tasks 
let tasks = [];

// Categories & priorities arrays
const categories = ['Home', 'Work', 'Errands'];
const priorities = ['High', 'Medium', 'Low'];

// Fetch elements
const taskForm = document.getElementById('new-task-form');
const taskTemplate = document.getElementById('task-template');
const calendarEl = document.getElementById('calendar');

// Initialize datepicker on calendar element
const calendar = new flatpickr(calendarEl); 

// Form submit handler
taskForm.addEventListener('submit', e => {

  e.preventDefault();
  
  // Get form values
  const title = taskForm.title.value;
  const category = taskForm.category.value;
  // etc
  
  // Create new task object
  const task = {
    id: Date.now(),
    title, 
    category,
    // etc
  };
  
  // Push to tasks array
  tasks.push(task);
  
  // Render new task
  renderTask(task);
  
  // Reset form
  taskForm.reset();
  
});

// Render a task as HTML
function renderTask(task) {

  // Use template clone
  const listItem = taskTemplate.content.cloneNode(true);
  
  // Set values  
  listItem.querySelector('.task-title').textContent = task.title;
  listItem.querySelector('.task-category').textContent = task.category;
  
  // Add to DOM
  tasklist.appendChild(listItem);

} 

// Show calendar view
function showCalendarView() {
  
  // Set visible dates based on due dates
  calendar.setDate(tasks.map(t => t.dueDate)); 

  // Attach event handler for date click
  calendar.on('dateClick', date => {
    
    // Filter and show tasks due that date
  });
  
}

// Initial render on load
renderTasks();
