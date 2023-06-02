<template>
    <section>
        <ColorTitle title="lab" :color="color"></ColorTitle>

        <menu>
            <label>
                <span>{{ t("l") }}</span>
                <input v-model="l" min="0" max="100" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("a") }}</span>
                <input v-model="a" min="-125" max="125" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("b") }}</span>
                <input v-model="b" min="-125" max="125" type="range" step="0.01" />
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
const a = ref(0);
const b = ref(0);
const alpha = ref(1);
const color = computed(() => `lab(${l.value}% ${a.value} ${b.value} / ${alpha.value})`);

const { t } = useI18n({
    messages: {
        "en-US": {
            l: "lightness",
            a: "red/green-ness",
            b: "yellow/blue-ness",
            alpha: "alpha",
        },
        "zh-CN": {
            l: "明度",
            a: "红绿相对色",
            b: "黄蓝相对色",
            alpha: "透明度",
        },
    },
});
</script>
