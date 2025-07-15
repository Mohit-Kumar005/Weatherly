import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import { useEffect } from 'react';

export default function InfoBox({ info }) {
   const INIT_URL = 
      "https://images.unsplash.com/photo-1613228355059-54c7d611358e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const HOT_URL = 
      "https://images.unsplash.com/photo-1570503601249-b95fe103bd60?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const EXTRA_HOT_URL = 
   "https://images.unsplash.com/photo-1626780822908-fdf11cd1114d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = 
      "https://images.unsplash.com/photo-1515106426117-7483c8b91e9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const RAIN_URL = 
      "https://plus.unsplash.com/premium_photo-1732747957048-2e3d4544e876?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB0ZW1wJTIwY2l0eSUyMGxvb2t8ZW58MHx8MHx8fDA%3D";

   const imageUrl =
      info.city === "Wonderland"
         ? INIT_URL
         : info.humidity > 80
         ? RAIN_URL
         : info.temp > 30
         ? EXTRA_HOT_URL
         : info.temp > 15
         ? HOT_URL
         : COLD_URL;

  useEffect(() => {
      document.body.style.background = `url(${imageUrl}) no-repeat center center fixed`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = `url(${imageUrl})`; 
   }, [imageUrl]);
   

   return (
      <div className="InfoBox">
         <div className='cardContainer'>
            <div className="card">
               <div className="city_name">
                  {info.city} {
                  info.humidity > 80
                  ? <ThunderstormIcon />
                  : info.temp > 15
                  ? <SunnyIcon />
                  : <AcUnitIcon />
               }
               </div>
               <div className="info-grid">
                  <div className="info-card">
                     <p className="info-title"><ThermostatIcon/> Temperature - {info.temp}&deg;C </p>
                     <p>but feels like <b>{info.feelsLike}&deg;C</b></p>
                     <p className="info-desc">
                        This is the lowest expected temperature for the day, often occurring early morning or late night but 
                        this temperature reflects how the weather feels on the skin, factoring in humidity and wind. 
                        The current temperature reflects the actual air temperature measured at ground level. 
                        It's essential for planning your day—whether to layer up or stay cool.
                     </p>
                  </div>
                  <div className="info-card">
                     <p className="info-title"><WaterDropIcon/> Humidity - {info.humidity}%</p>
                     <p className="info-desc">
                        Humidity represents the amount of moisture in the air. 
                        Higher values often indicate a chance of rain.
                        Humidity shows the amount of water vapor in the air. 
                        High humidity can make the weather feel warmer and 
                        may lead to rain, while low humidity often means drier air.
                     </p>
                  </div>
                  <div className="info-card">
                     <p className="info-title"><ArrowCircleDownIcon/> Min Temp - {info.tempMin}&deg;C</p>
                     <p className="info-desc">
                        This is the lowest expected temperature for the day, often occurring early morning or late night.
                        This is the minimum temperature expected today, typically recorded in the early morning. 
                        It helps you prepare for cooler parts of the day or night.
                     </p>
                  </div>
                  <div className="info-card">
                     <p className="info-title"><ArrowCircleUpIcon/> Max Temp - {info.tempMax}&deg;C</p>
                     <p className="info-desc">
                        This is the highest temperature forecasted today, usually around afternoon.
                        The maximum temperature indicates the highest point expected today, 
                        usually in the afternoon. Stay hydrated and avoid direct sunlight during this time.
                     </p>
                  </div>
                  <div className="info-card">
                     <p className="info-title"><WbCloudyIcon/> Weather - <i>{info.weather}</i></p>
                     <p className="info-desc">
                        Describes the current weather condition such as cloudy, sunny, rainy, etc.
                        A brief summary of current weather conditions, such as cloudy, sunny, or rainy. 
                        This helps you decide if you need an umbrella or sunglasses.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}