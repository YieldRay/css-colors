<template>
  <article>
    <p>https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb</p>
    <small>
      <i>
        {{ text }}
      </i>
    </small>

    <label>
      <span>red</span>
      <input v-model="r" min="0" max="255" type="range" step="0.01" />
    </label>
    <label>
      <span>green</span>
      <input v-model="g" min="0" max="255" type="range" step="0.01" />
    </label>
    <label>
      <span>blue</span>
      <input v-model="b" min="0" max="255" type="range" step="0.01" />
    </label>
    <label>
      <span>alpha</span>
      <input v-model="a" min="0" max="1" type="range" step="0.00001" />
    </label>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const r = ref(0);
const g = ref(0);
const b = ref(0);
const a = ref(1);
const color = computed(
  () => `rgb(${r.value} ${g.value} ${b.value} / ${a.value})`
);
const text = computed(
  () =>
    `rgb(\n    ${r.value}\n    ${g.value}\n    ${b.value} /\n    ${a.value}\n)`
);
</script>

<style scoped>
small {
  display: grid;
  white-space: pre-wrap;
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  background: v-bind(color);
}
i {
  color: v-bind(color);
  filter: grayscale(1) contrast(999) invert(1);
}
</style>
