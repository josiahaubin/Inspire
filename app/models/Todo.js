export default class Todo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed
  }

  get Template() {
    return `
        <div class="form-check w-25 text-white">
          <input class="form-check-input" type="checkbox" value="${this.completed}" id="todoItem">
          <label class="form-check-label" for="todoItem">
          ${this.description}
          </label>
          <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button>
        </div>
    `
  }
}