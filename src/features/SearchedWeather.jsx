import { useLoaderData } from "react-router-dom";
import { getWeatherByCity } from "../services/apiWeather";

function SearchedWeather() {
  const weather = useLoaderData();

  const city = weather.name;
  const status = weather.weather[0].description;
  const degree = weather.main.temp;

  return (
    <div>
      <h1>{city}</h1>
      <h1>{status}</h1>
      <h1>{degree}</h1>
    </div>
  );
}

export async function loader({ params }) {
  const weather = await getWeatherByCity(params.cityName);
  return weather;
}

export default SearchedWeather;
