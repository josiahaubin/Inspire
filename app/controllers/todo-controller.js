import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let template = ``
	let todo = _todoService.Todo
	let totalCount = 0

	todo.forEach(t => {
		template += t.Template
		totalCount++

		if (t.completed == true) {
			totalCount--
		}
	})


	document.getElementById('todos').innerHTML = template
	document.getElementById('totalCount').innerHTML = totalCount.toString()
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}

function checkCompleted() {
	let todo = _todoService.Todo

	todo.forEach(t => {
		t.checkCompleted()
	})
}

export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('todos', checkCompleted)
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			//TODO build the todo object from the data that comes into this method
			description: form.todoInput.value
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}

	displayTodos() {
		document.getElementById('todos').style.display = "block"
	}

	hideTodos() {
		document.getElementById('todos').style.display = "none"
	}

}
