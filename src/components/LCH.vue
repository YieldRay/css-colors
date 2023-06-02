<template>
    <section>
        <ColorTitle title="lch" :color="color"></ColorTitle>

        <menu>
            <label>
                <span>{{ t("lightness") }}</span>
                <input v-model="l" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("chroma") }}</span>
                <input v-model="c" min="0" max="230" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("hue") }}</span>
                <input v-model="h" min="0" max="360" type="range" step="0.01" />
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
import { useI18n } from "vue-i18n";
import ColorTitle from "./layout/ColorTitle.vue";

const l = ref(50);
const c = ref(150);
const h = ref(0);
const alpha = ref(1);
const color = computed(() => `lch(${l.value}% ${c.value} ${h.value}deg / ${alpha.value})`);

const { t } = useI18n({
    messages: {
        "en-US": {
            lightness: "lightness",
            chroma: "chroma",
            hue: "hue",
            alpha: "alpha",
        },
        "zh-CN": {
            lightness: "明度",
            chroma: "纯度",
            hue: "色相",
            alpha: "透明度",
        },
    },
});
</script>
