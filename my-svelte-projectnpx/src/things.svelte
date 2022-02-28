<script>
  // logic goes here
  export let current
  const handleClick = () => {
    alert('Clicked')
  }
  const fruits = ['banana', 'apple']
</script>

<style>
  /* styles go here */
</style>

<main>
  <h2>This is my things component {current}</h2>
  <button type="button" on:click={handleClick}>Click me</button>
  <h3>My favorite fruits are:</h3>
  <ul>
    {#each fruits as fruit, i}
      <li>{fruit} {i}</li>
    {/each}
  </ul>

</main>
