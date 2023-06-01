<template>
    <section>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">
            <h4>hsl</h4>
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
                <span>{{ t("saturation") }}</span>
                <input v-model="s" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("lightness") }}</span>
                <input v-model="l" min="0" max="100" type="range" step="0.01" />
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
import { useI18n } from "vue-i18n";

const h = ref(0);
const s = ref(180);
const l = ref(50);
const a = ref(1);
const color = computed(() => `hsl(${h.value}deg ${s.value}% ${l.value}% / ${a.value})`);
const text = computed(() => `hsl(\n    ${h.value}deg\n    ${s.value}%\n    ${l.value}% /\n    ${a.value}\n)`);

const { t } = useI18n({
    messages: {
        "en-US": {
            hue: "hue",
            saturation: "saturation",
            lightness: "lightness",
            alpha: "alpha",
        },
        "zh-CN": {
            hue: "色相",
            saturation: "饱和度",
            lightness: "明度",
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
