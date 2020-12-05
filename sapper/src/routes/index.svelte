<script context="module">
  // This is where'd you do fetching and stuff for SSR
  export async function preload(page, session) {
    const widgets = new Array(100).fill(1).map((value, index) => {
      return {
        id: index,
        title: `Widget ${index}`,
        description: `Some text that describes widget ${index}`,
      };
    });

    return { widgets };
  }
</script>

<script>
  import successkid from "images/successkid.jpg";
  import WidgetCard from "../components/WidgetCard.svelte";

  export let widgets = [];
</script>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    max-width: 920px;
    margin: 0 auto;
  }

  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Welcome to Sapper Widget Store!</title>
</svelte:head>

<h1>Sapper Widget Store</h1>

<div class="cards">
  {#each widgets as widget (widgets.id)}
    <WidgetCard title={widget.title} description={widget.description} />
  {/each}
</div>
