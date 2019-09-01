export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = data.weather[0].icon
  }

  get Template() {
    let tempF = Math.floor(9 / 5 * (this.kelvin - 273) + 32)
    return `
      <img class="weatherIcon" src="http://openweathermap.org/img/wn/${this.icon}.png" />
      <h3 class="text-right temp">${tempF}&degF</h3>
      <p class="text-right locationWeather">-${this.city}</p>
    `
  }
}