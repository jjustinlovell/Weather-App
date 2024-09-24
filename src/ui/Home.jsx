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
    <div className="px-4 my-24 space-y-5 text-center sm:my-48">
      {loading && <Loader />}
        <div className="absolute bg-blue-200 rounded-full pointer-events-none right-1/3 top-40 opacity-70 w-96 h-72 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bg-purple-300 rounded-full pointer-events-none left-[750px] opacity-70 top-32 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full pointer-events-none top-[300px] opacity-70 bg-cyan-300 right-[800px] w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <h2 className="mx-auto text-sm font-extrabold mt-[200px] tracking-wide sm:text-base sm:max-w-lg">
          Simply enter any city name to receive the latest weather details,
          including current temperature, conditions, humidity, and more. Stay
          prepared with accurate, real-time updates for your location or
          anywhere around the globe!
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
