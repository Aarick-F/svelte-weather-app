<script>
  import Loader from "$lib/components/Loader.svelte";
  import WeatherBreakdown from "$lib/components/WeatherBreakdown.svelte";
  import { weather } from "$lib/store";
</script>

<section>
  {#if !$weather}
    <Loader />
  {:else}
    <WeatherBreakdown />
  {/if}
</section>

<style>
  section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;;
  }
  @media screen and (max-width: 380px) {
    section{
      padding: 0;
    }
  }
</style>
