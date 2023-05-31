<template>
    <section>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab">
            <h4>oklab</h4>
        </a>

        <small>
            <i>
                {{ text }}
            </i>
        </small>

        <menu>
            <label>
                <span>{{ t("lightness") }}</span>
                <input v-model="l" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("a") }}</span>
                <input v-model="a" min="-0.4" max="0.4" type="range" step="0.0001" />
            </label>
            <label>
                <span>{{ t("b") }}</span>
                <input v-model="b" min="-0.4" max="0.4" type="range" step="0.0001" />
            </label>
            <label>
                <span>{{ t("alpha") }}</span>
                <input v-model="alpha" min="0" max="1" type="range" step="0.00001" />
            </label>
        </menu>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";

const l = ref(100);
const a = ref(0);
const b = ref(0);
const alpha = ref(1);
const color = computed(() => `oklab(${l.value}% ${a.value} ${b.value} / ${alpha.value})`);
const text = computed(() => `oklab(\n    ${l.value}%\n    ${a.value}\n    ${b.value} /\n    ${alpha.value}\n)`);

const { t } = useI18n({
    messages: {
        "en-US": {
            lightness: "lightness",
            a: "red/green-ness",
            b: "yellow/blue-ness",
            alpha: "alpha",
        },
        "zh-CN": {
            lightness: "明度",
            a: "红绿相对色",
            b: "黄蓝相对色",
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
</style>
