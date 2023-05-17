function getWeatherExternal(){
weatherRepo.getWeather(36, 86, Intl.DateTimeFormat().resolvedOptions().timeZone)
.then(renderWeather)
.catch(error => {
  console.error(error)
  alert("Error fetching weather")
})

}

// setting helper function SetValue to take care of all the query 
// selectors document.querySelector('[data-current-temp]').textContent = current.currentTemp
function setValue(selector, value, { parent = document } = {}) {
    //recently learned the data selector attribute and find it to be really helpful in writing cleaner code
    //this querySelector goes to my html and finds all the data selectors
  parent.querySelector(`[data-${selector}]`).textContent = value
}

//another helper function to import my picture icons using the api icon codes
function getIconUrl(iconCode) {
  return `icons/${ICON_Map.get(iconCode)}.svg`
}

function renderCurrentWeather(current) {
  //find the document elements that were added by the body templates header
  const currentIcon = document.querySelector('[data-current-icon]')
  currentIcon.src = getIconUrl(current.iconCode)
  //use my helper function to set each value which saves a lot of code
  setValue("current-temp", current.currentTemp)
  setValue("current-high", current.highTemp)
  setValue("current-low", current.lowTemp)
  setValue("current-fl-high", current.highFeelsLike)
  setValue("current-fl-low", current.lowFeelsLike)
  setValue("current-wind", current.windSpeed)
  setValue("current-precip", current.precip)
}

//making formatter to convert the datetime to just say the day
const day_formatter = Intl.DateTimeFormat(undefined, {weekday: 'long'})
function renderDailyWeather(daily) {
  const dailySection = document.querySelector('[data-day-section]')
  //get my template to repeat days
  const dayCardTemplate = document.getElementById('day-card-template')
  dailySection.innerHTML = ''
  //iterate the daily information and make a card for it
  daily.forEach(day => {
    const element = dayCardTemplate.content.cloneNode(true)
    //how to clone a template clones all child nodes with true argument as well

    //set value to the element but also pass the parent because I'm in a loop and want to add these to the parent
    setValue('temp', day.maxTemp, { parent: element})
    setValue('date', day_formatter.format(day.timestamp), {parent: element})
    element.querySelector('[data-current-icon]').src = getIconUrl(day.iconCode)
    dailySection.append(element)
  })

}

//another formatter to convert hourly time
const hour_formatter = Intl.DateTimeFormat(undefined, {hour: 'numeric'})

function renderHourlyWeather(hourly) {
  //hourSection and hourRowTemplate need to be inside the function since the page loads dynamically.
  const hourSection = document.querySelector('[data-hour-section]')
  const hourRowTemplate = document.getElementById('hour-row-template')
  hourSection.innerHTML = ''
  hourly.forEach(hour => {
    const element = hourRowTemplate.content.cloneNode(true)
    //how to clone a template clones all children as well

    //set value to the element above parent is current element and I want to search the element above
    //setValue('temp', hour.temp, { parent: element})
    setValue('fl-temp', hour.feelsLike, {parent: element})
    setValue('wind', hour.windSpeed, {parent: element})
    setValue('precip', hour.precip, {parent: element})
    setValue('day', day_formatter.format(hour.timestamp), {parent: element})
    setValue('time', hour_formatter.format(hour.timestamp), {parent: element})
    element.querySelector('[data-icon]').src = getIconUrl(hour.iconCode)
    hourSection.append(element)
  })

} 
