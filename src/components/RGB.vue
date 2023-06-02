<template>
    <section>
        <ColorTitle title="rgb" :color="color"></ColorTitle>

        <menu>
            <label>
                <span>{{ t("r") }}</span>
                <input v-model="r" min="0" max="255" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("g") }}</span>
                <input v-model="g" min="0" max="255" type="range" step="0.01" />
            </label>
            <label>
                <span>{{ t("b") }}</span>
                <input v-model="b" min="0" max="255" type="range" step="0.01" />
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

const r = ref(0);
const g = ref(0);
const b = ref(0);
const a = ref(1);
const color = computed(() => `rgb(${r.value} ${g.value} ${b.value} / ${a.value})`);

const { t } = useI18n({
    messages: {
        "en-US": {
            r: "red",
            g: "green",
            b: "blue",
            alpha: "alpha",
        },
        "zh-CN": {
            r: "红",
            g: "绿",
            b: "蓝",
            alpha: "透明度",
        },
    },
});
</script>
