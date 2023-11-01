// KEY 21 DAYS from 31.10.2023
// 18979647cea74422aec120005233110


const elem = {
    form: document.querySelector('.js-search-form'),
    list: document.querySelector('.js-list'),
}

console.log(elem.form) 


elem.form.addEventListener('submit', handlerForecast )

function handlerForecast(e){
    e.preventDefault()
    console.dir(e.currentTarget)

    const { city, days} = e.currentTarget.elements

    console.log()
    console.log

    servisWeather(city.value, days.value)
.then(data => console.log(data))
.catch(err => console.log(err))


}



function servisWeather(city, days){
const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = '18979647cea74422aec120005233110';

return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&${days}=5&lang=uk`)
.then(resp => {
if(!resp.ok){
 throw new Error(resp.statusText)
}
return resp.json
})
}


