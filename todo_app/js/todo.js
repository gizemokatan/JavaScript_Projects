function get_todos() {
  var todos = new Array;

  var todos_str = localStorage.getItem('todo');


  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

/* This function adds the inputted task to the get_todos function array */
function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  /* This adds a new task to the end of the array */
  todos.push(task);

  /* this converts the task input to a JSON string */
  localStorage.setItem('todo', JSON.stringify(todos));
  document.getElementById("task").value = "";
  show();

  return false;
}

/* this function keeps the tasks permanently displayed on the screen */
function show() {
  var todos = get_todos();

  var html = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] +
      ' <button class="remove" id="' + i + '">x</button></li>';
  }
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  // Add this part to enable removal
  var buttons = document.getElementsByClassName("remove");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", remove);
  }
}

function remove() {
  var id = this.getAttribute("id"); 
  var todos = get_todos();
  todos.splice(id, 1); 
  localStorage.setItem('todo', JSON.stringify(todos)); 
  show(); 
}

