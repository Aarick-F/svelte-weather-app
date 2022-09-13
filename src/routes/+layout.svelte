<script>
  import "normalize.css";
  import "../style.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let screenWidth;
</script>
<svelte:window bind:innerWidth={screenWidth} />
<svelte:head>
  <title>Svelte Weather App</title>
</svelte:head>
<Header />
<slot />
<Footer />