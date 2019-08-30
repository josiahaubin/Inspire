export default class Todo {
  constructor(data) {
    this.description = data.description
  }

  get Template() {
    return `
      <div class="card w-25">
        <div class="card-body">
          <p class="card-text">${this.description}</p>
        </div>
      </div>
    `
  }
}