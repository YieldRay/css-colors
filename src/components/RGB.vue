<template>
    <section>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">
            <h4>rgb</h4>
        </a>

        <small>
            <i>
                {{ format(color) }}
            </i>
        </small>

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
import format from "@/format";

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
