<script>
  export let label;
  export let data;
</script>

<div class="weather-item">
  <h4>{label}</h4>
  <h2>{data}</h2>
</div>

<style>
  .weather-item {
    width: 156px;
    height: 64px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .weather-item h4 {
    margin-bottom: 0.75rem;
  }
  .weather-item h2,
  h4 {
    margin: 0;
  }
  @media screen and (max-width: 512px) {
    .weather-item {
      padding: 1rem;
      width: 100%;
    }
  }
</style>
