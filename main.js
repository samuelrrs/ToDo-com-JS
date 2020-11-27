var listElement = document.querySelector("ul[id=lista]");
var inputElement = document.querySelector("input[id=inputTask]");
var btnElement = document.querySelector("button[id=btnSave]");

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function listarTodos() {

  listElement.innerHTML = ''

  for (var todo of todos) {
    var lista = document.createElement("li");
    var listaText = document.createTextNode(todo)
    lista.appendChild(listaText)
    listElement.appendChild(lista)

    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')    
    var linkText = document.createTextNode(' - Excluir')
    linkElement.appendChild(linkText)

    lista.appendChild(linkElement)


    var index = todos.indexOf(todo)
    linkElement.setAttribute('onclick', 'deleteTodo(' + index + ')')
    
    
  }
}
listarTodos()


function addTodo() {

  if (inputElement.value === '') {
    alert('O campo não pode estar vazio')
  } else {
    var listaText = inputElement.value

    todos.push(listaText)
    inputElement.value = '';
    listarTodos()
    saveToStorage()
  }



 
}

btnElement.onclick = addTodo

function deleteTodo(index) {
  todos.splice(index, 1)
  listarTodos()
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}