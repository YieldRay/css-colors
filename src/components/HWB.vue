<template>
    <section>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb">
            <h4>hwb</h4>
        </a>

        <small>
            <i>
                {{ text }}
            </i>
        </small>

        <menu>
            <label>
                <span>{{ t("hue") }}</span>
                <input v-model="h" min="0" max="360" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("whiteness") }}</span>
                <input v-model="w" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("blackness") }}</span>
                <input v-model="b" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("alpha") }}</span>
                <input v-model="a" min="0" max="1" type="range" step="0.00001" />
            </label>
        </menu>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";

const h = ref(0);
const w = ref(0);
const b = ref(50);
const a = ref(1);
const color = computed(() => `hwb(${h.value}deg ${w.value}% ${b.value}% / ${a.value})`);
const text = computed(() => `hwb(\n    ${h.value}deg\n    ${w.value}%\n    ${b.value}% /\n    ${a.value}\n)`);

const { t } = useI18n({
    messages: {
        "en-US": {
            hue: "hue",
            whiteness: "whiteness",
            blackness: "blackness",
            alpha: "alpha",
        },
        "zh-CN": {
            hue: "色相",
            whiteness: "白度",
            blackness: "黑度",
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
