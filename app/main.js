import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ClockController from "./controllers/clock-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      clockController: new ClockController()
    }
  }
}

window['app'] = new App()  