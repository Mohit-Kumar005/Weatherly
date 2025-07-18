import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
   let [city, setCity] = useState("");
   let [error, setError] = useState(false);
   const API_URL = import.meta.env.VITE_API_URL;
   const API_KEY = import.meta.env.VITE_API_KEY;

let getWeatherInfo = async () => {
   try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonResponse = await response.json();
   let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description
   };
   console.log(result);
   return result;
   }catch(err){
      throw err;
   }
};

let handleChange = (event) => {
   setCity(event.target.value);
   if (error) setError(false);
};

let handleSubmit = async (event) => {
   try {
      event.preventDefault();
   console.log(city);
   setCity("");
   let newInfo = await getWeatherInfo();
   updateInfo(newInfo);
   setError(false);
   }catch(err) {
      setError(true);
   }
}; 

   return (
      <div className='SearchBox'>
         <form onSubmit={handleSubmit}>
            <input className='custom-input'
               type='text'
               placeholder="Enter city name"
               required 
               value={city}
               onChange={handleChange}
            />
            <br></br>
            <br></br>
            <button className="custom-button" type="submit">
               Search
            </button>
            {error && <p style={{ color: "red" }}>No such place exists!</p>}
         </form>
      </div>
   );
}