export default class Image {
  constructor(data) {
    this.url = data.hdurl || data.url
  }
}