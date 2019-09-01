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
    minutes = 0 + minutes
  }

  document.getElementById('clock').innerHTML = hours + ":" + minutes + " " + timeOfDay
}


export default class ClockController {
  constructor() {
    displayClock()
    setInterval(displayClock, 1000)
  }
}