import ImageService from "../services/image-service.js";

const _is = new ImageService()

function _drawImage() {
  console.log(_is.Image.url)
  document.getElementById('bg-image').style.backgroundImage = `url('${_is.Image.url}')`
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber("image", _drawImage)
    _is.getBackgroundImage()
  }

}

