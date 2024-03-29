import Image from "../models/Image.js"

//http://bcw-sandbox.herokuapp.com/api/images
//https://api.nasa.gov/planetary/apod?api_key=GFAcaZscnDs3vp3KXwgzQHtxi34mfuly2g8yPLWe
// @ts-ignore
const _imgApi = axios.create({
	baseURL: 'https://api.nasa.gov/planetary/apod?api_key=GFAcaZscnDs3vp3KXwgzQHtxi34mfuly2g8yPLWe',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	//NOTE Runs a GET to obtain image from image API
	getBackgroundImage() {
		_imgApi.get()
			.then(res => {
				_setState("image", res.data)
				console.log(res.data)
			})
			.catch(err => {
				console.error(err);
			})
	}

	get Image() {
		return new Image(_state.image)
	}

}
