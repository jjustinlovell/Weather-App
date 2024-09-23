const API_KEY = "269ed43e6835ec59d81518ab3b47bb3f";

export async function getWeatherByCity(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Fetching Data Failed !!");

  const data = await res.json();
  console.log(res);
  console.log(res.status);
  

  return data;
}


