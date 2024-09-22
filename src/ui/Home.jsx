import { useState } from "react";
import { getWeatherByCity } from "../services/apiWeather";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  // const handleClick = async () => {
  //   try {
  //     const weatherData = await getWeatherByCity("Jakarta");
  //     setWeatherData(weatherData);
  //     console.log(weatherData);
  //     console.log(weatherData.weather[0].main);
  //   } catch (err) {
  //     setWeatherData(null);
  //   }
  // };

  function handleSubmit(e) {
    e.preventDefault();
    if (!city) return;
    navigate(`/weather/ ${city}`);
  }

  return (
    <div className="px-4 my-24 space-y-5 text-center sm:my-28">

      <h1>Image</h1>
      <h2 className="mx-auto text-sm tracking-wide sm:text-base sm:max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
        doloremque quod? Natus architecto nam deserunt libero adipisci eligendi,
        quam minus ab voluptate debitis cum, officia rerum quidem quisquam?
        Facilis!
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="px-4 py-3 text-sm transition-all duration-300 bg-blue-200 w-80 placeholder-slate-500 rounded-xl sm:focus:w-96 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      {city !== "" && (
        <div>
          <button>Click Enter to Search {city}</button>
        </div>
      )}
    </div>
  );
}
