<footer>
  <p>
    Made by <a target="_blank" href="https://github.com/Aarick-F"
      ><span>Aarick-F</span></a
    >
    with the
    <a target="_blank" href="https://openweathermap.org/api"
      >OpenWeatherMap API.</a
    >
    Powered by
    <a target="_blank" href="https://kit.svelte.dev"
      ><span class="svelte">Svelte.</span></a
    >
  </p>
</footer>

<style>
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.15rem 2rem;
    color: var(--color-font-bright);
    background: #0f2027;
    font-size: 0.75rem;
  }

  footer a {
    text-decoration: none;
    color: darkseagreen;
  }

  footer span {
    color: lightcoral;
  }

  footer .svelte {
    color: #ff3e00;
  }
</style>
