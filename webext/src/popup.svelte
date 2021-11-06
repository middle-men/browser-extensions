<script lang="ts">
  import Button, { Label } from '@smui/button';
 
  let clicked = 0;
  export let button: string;
</script>

<main>
  <body>
    <Button on:click={() => clicked++}>
      <Label>Supa {button}</Label>
    </Button>
    <pre class="status">Clicked: {clicked} times</pre>
</main>
