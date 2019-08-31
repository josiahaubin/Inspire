export default class Todo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed
  }

  get Template() {
    return `
        <div class="form-check w-25 text-white">
          <input class="form-check-input" type="checkbox" value="${this.completed}" id="todoItem" onchange="app.controllers.todoController.toggleTodoStatus('${this._id}')">
          <label class="form-check-label" for="todoItem">
          <span id="${this._id}">${this.description}</span>
          </label>
          <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button>
        </div>
    `
  }

  checkCompleted() {
    if (this.completed == false) {
      document.getElementById(`${this._id}`).style.textDecoration = "line-through"
    }
  }
  //<div class="card w-25 text-white">
  //   <div class="card-body">
  //     <p class="card-text">${this.description}</p>
  //     <button class="btn btn-success" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">V</button>
  //   </div>
  // </div>
}