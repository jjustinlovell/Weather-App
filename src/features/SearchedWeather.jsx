import { useLoaderData } from "react-router-dom";
import { getWeatherByCity } from "../services/apiWeather";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CompressIcon from "@mui/icons-material/Compress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SearchedWeather() {
  const weather = useLoaderData();
  console.log(weather);

  const city = weather.name;
  const status = weather.weather[0].description;
  const degree = weather.main.temp;
  const humidity = weather.main.humidity;
  const pressure = weather.main.pressure;
  const iconName = weather.weather[0].icon;
  const country = weather.sys.country;
  const max = Math.floor(weather.main.temp_max - 273.15);
  const min = Math.floor(weather.main.temp_min - 273.15);

  console.log(country);
  console.log(iconName);

  const geticonApi = `http://openweathermap.org/img/w/${iconName}.png`;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-1/3 py-10 text-center rounded-lg h-82 sm:w-4/6 md:h-100 lg:w-96 space-y-7">
        <div className="absolute right-0 bg-blue-200 rounded-full opacity-70 bottom-8 w-96 h-72 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bg-purple-300 rounded-full opacity-70 top-16 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full opacity-70 bg-cyan-300 bottom-5 right-36 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <img
          src={geticonApi}
          className="absolute top-0 left-0 p-4"
          alt="weather-img"
        />
        <button className="absolute top-0 px-3 text-white bg-green-400 rounded-md sm:text-3xl right-5">
          {country}
        </button>
        <h1 className="text-3xl font-extrabold sm:text-8xl">{city}</h1>
        <h1>{status}</h1>
        <ul className="flex justify-center space-x-8">
          <li>
            <DeviceThermostatIcon />
            {degree}
          </li>
          <li>
            <WaterDropIcon />
            {humidity}
          </li>
          <li>
            <CompressIcon />
            {pressure}
          </li>
        </ul>
        <ul className="flex justify-center space-x-8">
          <li>
            <ArrowDropDownIcon />
            {min}°C
          </li>
          <li>
            <ArrowDropUpIcon />
            {max}°C
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const weather = await getWeatherByCity(params.cityName);
  return weather;
}

export default SearchedWeather;
