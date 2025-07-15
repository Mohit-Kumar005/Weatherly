import SearchBox from "./SearchBox";
import InfoBox  from "./InfoBox";
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp() {
   const [weatherInfo, setWeatherInfo] = useState({
      city: "Wonderland",
      feelsLike: 32.49,
      humidity:44,
      temp:31.65,
      tempMax:31.65,
      tempMin:31.65,
      weather:"broken clouds"
   });

   let updateInfo = (newInfo) => {
      setWeatherInfo(newInfo);
   };
   return (
      <div style={{ textAlign: "center" }}>
         <h1 className="app-heading">🌤️ Weatherly</h1>
         <p className="app-subheading">
            Get real-time weather updates from around the world
         </p>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo} />
      </div>
   );
}