<script>
  import WidgetCardDescription from "./WidgetCardDescription.svelte";
  import WidgetCardTag from "./WidgetCardTag.svelte";
  import WidgetCardTitle from "./WidgetCardTitle.svelte";

  export let tags = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  export let title = "title";
  export let description = "description";
</script>

<style>
  .card {
    width: 300px;
    min-height: 300px;
    border: 2px solid magenta;
  }
</style>

<div class="card">
  <WidgetCardTitle>{title}</WidgetCardTitle>
  <WidgetCardDescription>{description}</WidgetCardDescription>
  {#each tags as tag (tag)}
    <WidgetCardTag>{tag}</WidgetCardTag>
  {/each}
</div>
