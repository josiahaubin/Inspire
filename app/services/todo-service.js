import Todo from "../models/Todo.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/josiah/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}
	get Todo() {
		return _state.todos.map(t => new Todo(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				_setState("todos", res.data.data)
				console.log(_state.todos)
			})
			.catch(err => console.log(err))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				_state.todos.push(new Todo(res.data.data))
				_setState("todos", _state.todos)

			})
			.catch(err => _setState('error', err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)

		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
		todoApi.delete(todoId)
			.then(res => {
				let index = _state.todos.findIndex(t => t._id == todoId)
				_state.todos.splice(index, 1)
				_setState("todos", _state.todos)
			})
			.catch(err => {
				console.error(err);
			})
	}

}
