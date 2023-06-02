<template>
    <section>
        <ColorTitle title="oklab" :color="color"></ColorTitle>

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
import { useI18n } from "vue-i18n";
import ColorTitle from "./layout/ColorTitle.vue";

const l = ref(100);
const a = ref(0);
const b = ref(0);
const alpha = ref(1);
const color = computed(() => `oklab(${l.value}% ${a.value} ${b.value} / ${alpha.value})`);

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
