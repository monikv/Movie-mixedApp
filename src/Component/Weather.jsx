import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
// import "./Weather.css";


function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const url="https://api.openweathermap.org/data/2.5/weather"
const api= '94808e9b76b5307920abd10b51afa0ff'
const url2="https://api.unsplash.com/search/photos?query={city}&client_id={ACCESS_KEY}"
const ACCESS_KEY='fMuAbGSIp505cuxRPgVVxc_YjpzCidpjJBlR7FBXenU'
    const handleClick=  async() => {
        try{    
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
const res2 = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${ACCESS_KEY}`)
            console.log("res2",res2);
            console.log("res",res);   
            setWeather(res.data);
            setImage(res2.data.results[0]?.urls?.regular);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
      <Nav />
      <div >
        <h1>Weather Component</h1>
          <p>This is the weather component.</p>
          <input type="text" placeholder="Enter city name" value={city} onChange={(e)=>setCity(e.target.value)}/>
          <button onClick={handleClick}>Get Weather</button>
          {weather&&(
            <div>
              <h2>weatherin {weather.name}</h2>
              <h2>Wind speed {weather.wind.speed}</h2>
              <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                      <p>Condition: {weather.weather[0].description}</p>
              </div>
          )}
          {image&&(
            <div>
              <img src={image} alt="city" />
            </div>
          )}
      </div>
    </>
  );
}



export default Weather;

