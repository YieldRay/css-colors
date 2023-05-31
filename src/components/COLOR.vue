<template>
    <section>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color">
            <h4>color</h4>
        </a>

        <small>
            <i>
                {{ text }}
            </i>
        </small>

        <menu>
            <select v-model="colorSpace">
                <option v-for="cs in colorspace" :value="cs">{{ cs }}</option>
            </select>
            <label>
                <span>p1</span>
                <input type="text" v-model="p1" />
            </label>
            <label>
                <span>p2</span>
                <input type="text" v-model="p2" />
            </label>
            <label>
                <span>p3</span>
                <input type="text" v-model="p3" />
            </label>
            <label>
                <span>{{ t("alpha") }}</span>
                <input type="range" v-model="alpha" min="0" max="1" step="0.00001" />
            </label>
        </menu>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";

const colorspace = [
    "srgb",
    "srgb-linear",
    "display-p3",
    "a98-rgb",
    "prophoto-rgb",
    "rec2020",
    "xyz",
    "xyz-d50",
    "xyz-d65",
];
const colorSpace = ref(colorspace[0]);
const p1 = ref("1");
const p2 = ref("0");
const p3 = ref("0");
const alpha = ref(1);
const color = computed(() => `color(${colorSpace.value} ${p1.value} ${p2.value} ${p3.value} / ${alpha.value})`);
const text = computed(
    () => `color(${colorSpace.value}\n    ${p1.value}\n    ${p2.value}\n    ${p3.value} /\n    ${alpha.value}\n)`
);

const { t } = useI18n({
    messages: {
        "en-US": {
            alpha: "alpha",
        },
        "zh-CN": {
            alpha: "透明度",
        },
    },
});
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
menu {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
select {
    max-width: 50%;
}
</style>
