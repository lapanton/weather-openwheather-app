import React, { Component } from "react";

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null
        };
    }
    componentDidMount() {
        const id = this.props.id;
        const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
            id +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=Metric&lang=ro";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="wrap-description">
                <h1 className="main-description">
                    {weather.description} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p>Current: {weatherData.main.temp}°</p>
                <p>Maximala: {weatherData.main.temp_max}°</p>
                <p>Minimala: {weatherData.main.temp_min}°</p>
                <p>Viteza vântului: {weatherData.wind.speed} meter/sec</p>
                <p>Umiditate: {weatherData.main.humidity}</p>
                <p>Presiune: {weatherData.main.pressure}</p>

            </div>
        );
    }
}


export default WeatherDisplay;