import Quote from "../models/Quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	//NOTE Use GET to obtain quote from API
	getRandomQuote() {
		_quoteApi.get()
			.then(res => {
				_setState("quote", res.data)
			})
			.catch(err => {
				console.error(err);
			})

	}

	//NOTE Getter
	get Quote() {
		return new Quote(_state.quote)
	}
}
