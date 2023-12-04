function attachEvents() {
    const baseURI = 'http://localhost:3030/jsonstore/forecaster/';

    const submitBtnRef = document.getElementById('submit');
    const locationRef = document.getElementById('location');
    const forecastDivRef = document.getElementById('forecast');
    const currentDivRef = document.getElementById('current');
    const upcomingDivRef = document.getElementById('upcoming');

    submitBtnRef.addEventListener('click', onLoad);

    async function onLoad() {
        try{
            const request = await fetch((baseURI + 'locations'), {method: 'GET'});
            const response = await request.json();

            let locationCode = '';

            for (const info in response) {
                if(response[info].name === locationRef.value) {
                    locationCode = response[info].code;
                }
            }

            forecastDivRef.style.display = 'block';

/*Current conditions*/

            const requestCurr = await fetch((baseURI + `today/${locationCode}`), {method: 'GET'});
            const responseCurr = await requestCurr.json();

            const forecastDiv = document.createElement('div');
            forecastDiv.setAttribute('class', 'forecasts');

            const spanSymbol = document.createElement('span');
            spanSymbol.setAttribute('class', 'condition symbol');
            spanSymbol.innerHTML = weather(responseCurr.forecast.condition);

            const spanData = currForecast(responseCurr.name, responseCurr.forecast);

            forecastDiv.appendChild(spanSymbol);
            forecastDiv.appendChild(spanData);
            currentDivRef.appendChild(forecastDiv);

/*Three-day forecast*/

            const requestThreeDays = await fetch((baseURI + `upcoming/${locationCode}`), {method: 'GET'});
            const responseThreeDays = await requestThreeDays.json();

            const threeForecastDiv = document.createElement('div');
            threeForecastDiv.setAttribute('class', 'forecast-info');

            const upcomingSpanOne = forecast(responseThreeDays.forecast[0]);
            const upcomingSpanTwo = forecast(responseThreeDays.forecast[1]);
            const upcomingSpanThree = forecast(responseThreeDays.forecast[2]);

            threeForecastDiv.appendChild(upcomingSpanOne);
            threeForecastDiv.appendChild(upcomingSpanTwo);
            threeForecastDiv.appendChild(upcomingSpanThree);
            upcomingDivRef.appendChild(threeForecastDiv);
            
            locationRef.value = '';

        } catch (error) {
            forecastDivRef.textContent = 'Error';
        }
    }

/*Returns the weather conditions*/
    function weather(status) {
        if(status === 'Sunny') {
            return '&#x2600;';
        } else if (status === 'Partly sunny') {
            return '&#x26C5;';
        } else if (status === 'Overcast') {
            return '&#x2601;';
        } else if (status === 'Rain') {
            return '&#x2614;';
        } else if (status === 'Degrees'){
            return '&#176;';
        }
    }

/*Creating span for the current forecast*/ 
    function currForecast(name, data) {

        const spanInfo = document.createElement('span');
        spanInfo.setAttribute('class', 'condition');
        
        const spanLocation = document.createElement('span');
        spanLocation.setAttribute('class', 'forecast-data');
        spanLocation.textContent = name;

        const spanDeg = document.createElement('span');
        spanDeg.setAttribute('class', 'forecast-data');
        spanDeg.innerHTML = `${data.low}&#176;/${data.high}&#176;`;

        const spanWeather = document.createElement('span');
        spanWeather.setAttribute('class', 'forecast-data');
        spanWeather.textContent = data.condition;

        spanInfo.appendChild(spanLocation);
        spanInfo.appendChild(spanDeg);
        spanInfo.appendChild(spanWeather);

        return spanInfo
    }

/*Creating spans for the three-day forecast*/

    function forecast(data) {

        const upSpan = document.createElement('span');
        upSpan.setAttribute('class', 'upcoming');

        const symSpanThree = document.createElement('span');
        symSpanThree.setAttribute('class', 'symbol');
        symSpanThree.innerHTML = weather(data.condition);

        const spanDegThree = document.createElement('span');
        spanDegThree.setAttribute('class', 'forecast-data');
        spanDegThree.innerHTML = `${data.low}&#176;/${data.high}&#176;`;

        const spanWeatherThree = document.createElement('span');
        spanWeatherThree.setAttribute('class', 'forecast-data');
        spanWeatherThree.textContent = data.condition;

        upSpan.appendChild(symSpanThree)
        upSpan.appendChild(spanDegThree)
        upSpan.appendChild(spanWeatherThree)

        return upSpan;
    }
}

attachEvents();