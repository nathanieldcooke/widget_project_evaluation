import React from 'react';
// import fetch from 'node-fetch';

/*
weather api key: 6d3c2aba2c258cb69cef6a647af0334d

how to call api: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

las vegas lat, lon: 36.1699° N, 115.1398° W || 36.114647 -115.172813
*/

class Weather extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            weather: null
        };
    }

    pollWeather = async ({lat, lon}) => {
        console.log(lat, lon)
        let res = await fetch(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=6d3c2aba2c258cb69cef6a647af0334d`)
        console.log("RES STATUS", res.status)
        console.log('hellooooooooog')
        console.log(res)
        res = await res.json()
        console.log(res)
    }

    
    componentDidMount = () => {
        this.pollWeather({ lat: 36.114647, lon: -115.172813})
        // navigator.geolocation.getCurrentPosition(this.success);
    }
    
    render = () => {
        return (
            <div>
                Weather API Not Working
            </div>
        )
    }
}

export default Weather;