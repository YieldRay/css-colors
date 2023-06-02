<template>
    <a :href="`https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/${title}`">
        <h4>{{ title }}</h4>
    </a>

    <small :title="color" @click="() => copy(color)">
        <i>
            {{ format(color) }}
        </i>
    </small>
</template>

<script lang="ts" setup>
import format from "@/format";
//@ts-ignore
import copy from "@/copy";

import { toRefs } from "vue";
const props = defineProps<{
    title: string;
    color: string;
}>();

const { title, color } = toRefs(props);
</script>

<style scoped>
small {
    cursor: pointer;
    background: v-bind(color);
    display: inline-block;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    white-space: pre-wrap;
    line-height: 0.95;
    padding: 0.25rem;
}
i {
    color: v-bind(color);
    filter: grayscale(1) contrast(999) invert(1);
}
</style>
