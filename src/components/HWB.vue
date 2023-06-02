<template>
    <section>
        <ColorTitle title="hwb" :color="color"></ColorTitle>

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
import { useI18n } from "vue-i18n";
import ColorTitle from "./layout/ColorTitle.vue";

const h = ref(0);
const w = ref(0);
const b = ref(50);
const a = ref(1);
const color = computed(() => `hwb(${h.value}deg ${w.value}% ${b.value}% / ${a.value})`);

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
