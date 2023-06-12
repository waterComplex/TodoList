//getting list from "Local storage" is only required when page is refreshed otherwise current list is available
let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];;

renderTodoList();//initial display

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0; i<todoList.length;i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    //destructing shortcut for above two lines (name of the variable name is equal to property of the object same with duedate)
    const {name,dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick= "
      todoList.splice(${i},1);
      renderTodoList();
      // whenever we update save in local storage
      saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;//generating the html renderTodoList();
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML; 
  localStorage.setItem('todoList',JSON.stringify(todoList));
}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateElement = document.querySelector('.js-date-input');
  const dueDate = dueDateElement.value;
  todoList.push({
    // name:name,
    // dueDate:dueDate;
    //shorthand property :shortcut for above two lines when identifiers for key and value are same
    name,
    dueDate
  });
  saveToStorage();
  inputElement.value = '';//reseting the input box
  renderTodoList();
}
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}