import "dotenv/config";
import { json } from "@sveltejs/kit";

export const GET = async ({ url }) => {
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
  );
  res = await res.json();
  return json(res);
};
