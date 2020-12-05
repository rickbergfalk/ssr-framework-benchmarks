<template>
  <div class="card">
    <widget-card-title>{{ title }}</widget-card-title>
    <widget-card-description>{{ description }}</widget-card-description>
    <widget-card-tag v-for="tag in tags" :key="tag">{{ tag }} </widget-card-tag>
  </div>
</template>

<script>
import WidgetCardDescription from "./WidgetCardDescription.vue";
import WidgetCardTag from "./WidgetCardTag.vue";
import WidgetCardTitle from "./WidgetCardTitle.vue";
export default {
  components: { WidgetCardTitle, WidgetCardDescription, WidgetCardTag },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  data() {
    return {
      tags: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ],
    };
  },
};
</script>

<style>
.card {
  width: 300px;
  min-height: 300px;
  border: 2px solid magenta;
}
</style>
