import { useState } from "react";
import { getWeatherByCity } from "../services/apiWeather";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleOnChangeCity(e) {
    setCity(e.target.value);
    if (error) setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const weather = await getWeatherByCity(city);
      if (!weather) {
        throw new Error("City Not Found");
      }
      console.log(weather);
      navigate(`/weather/ ${city}`);
    } catch (err) {
      console.log(err);
      setError("City Not Found, Please enter a valid city");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-4 my-24 space-y-5 text-center sm:my-28">
      {loading && <Loader />}
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
          onChange={handleOnChangeCity}
        />
      </form>
      {error && (
        <button className="px-5 py-2 font-bold text-white bg-red-600 rounded-md">
          {error}
        </button>
      )}
      {city !== "" && !error && (
        <div>
          <button>Click Enter to Search {city}</button>
        </div>
      )}
    </div>
  );
}
