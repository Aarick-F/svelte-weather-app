<script>
  import { onMount } from "svelte";
  import { weather, coords } from "$lib/store";

  async function getWeatherInfo() {
    try {
      $weather = undefined;
      let res = await fetch(
        `/api/weather?lat=${$coords.lat}&lon=${$coords.lon}`
      );
      res = await res.json();
      console.log(`RESPONSE:\n${JSON.stringify(res, null, 2)}`);
      $weather = res;
    } catch (err) {
      console.log(`AN ERROR OCCURRED`);
    }
  }

  onMount(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      $coords.lat = pos.coords.latitude;
      $coords.lon = pos.coords.longitude;
      await getWeatherInfo();
    });
  });
</script>

<header>
  {#if $weather}
    <h2>current weather in {$weather.name}</h2>
  {:else}
    <h2>loading...</h2>
  {/if}
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    background: #0f2027;
    color: var(--color-font-bright);
  }
  header h2 {
    text-transform: lowercase;
  }
  @media screen and (max-width: 512px) {
    header {
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
    }
    header h2 {
      font-size: 1rem;
    }
  }
</style>
