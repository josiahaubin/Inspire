export default class Image {
  constructor(data) {
    this.url = data.large_Url || data.url
  }
}