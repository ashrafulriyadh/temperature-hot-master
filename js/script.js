const loadWeather = () => {

    const searchInput = document.getElementById('search-input');

    const searchText = searchInput.value;

    searchInput.value = '';

    if (searchText == '') {
        alert('Enter City Name Please!');
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=f3081e5908fe5ffb346def36ed41a46f&units=metric`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data))
    }
}

const displayWeather = (city) => {
    const displayResult = document.getElementById('display-result');

    displayResult.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${city.name}</h1>
            <h3><span>${city.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${city.weather[0].main}</h1>`;

    displayResult.appendChild(div);

}