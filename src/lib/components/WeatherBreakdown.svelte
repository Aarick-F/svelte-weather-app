<script>
  import { fade } from "svelte/transition";
  import { weather } from "$lib/store";
  import WeatherItem from "./WeatherItem.svelte";
</script>

<div in:fade class="weather-main">
  <div class="weather-icon">
    <img
      src={`http://openweathermap.org/img/wn/${$weather.weather[0].icon}@2x.png`}
      alt={`${$weather.weather[0].main} Icon`}
    />
    <h1>{$weather.weather[0].main.toLowerCase()}</h1>
  </div>
  <div class="row">
    <WeatherItem label="temperature" data={$weather.main.temp} />
    <WeatherItem label="feels like" data={$weather.main.feels_like} />
  </div>
  <div class="row">
    <WeatherItem label="low" data={$weather.main.temp_min} />
    <WeatherItem label="high" data={$weather.main.temp_max} />
  </div>
  <div class="row">
    <WeatherItem label="pressure" data={$weather.main.pressure} />
    <WeatherItem label="humidity" data={$weather.main.humidity} />
  </div>
</div>

<style>
  .weather-main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .weather-icon {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
