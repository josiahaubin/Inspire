function displayClock() {
  let currentTime = new Date()
  let timeOfDay = "AM"
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()

  if (hours > 11) {
    timeOfDay = "PM"
  }
  if (hours > 12) {
    hours = hours - 12
  }
  if (hours == 0) {
    hours = 12
  }
  if (minutes < 10) {
    // @ts-ignore
    minutes = "0" + minutes
  }

  document.getElementById('clock').innerHTML = hours + ":" + minutes + " " + timeOfDay
}

function displayGreeting() {
  let currentTime = new Date()
  let greeting = "Good Morning"
  let hours = currentTime.getHours()

  if (hours > 12 && hours < 18) {
    greeting = "Good Afternoon"
  }
  if (hours >= 18) {
    greeting = "Good Evening"
  }

  document.getElementById('greeting').innerHTML = greeting + " Josiah"
}

export default class ClockController {
  constructor() {
    displayClock()
    setInterval(displayClock, 1000)
    displayGreeting()
  }
}