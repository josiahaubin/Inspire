export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `
          <h6>${this.quote}</h6>
					<p class="authorShown">-${this.author}</p>
    `
  }
}