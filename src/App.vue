<script setup lang="ts">
import RGB from "./components/RGB.vue";
import HSL from "./components/HSL.vue";
import LAB from "./components/LAB.vue";
import LCH from "./components/LCH.vue";
import OkLAB from "./components/OkLAB.vue";
import OkLCH from "./components/OkLCH.vue";
import HWB from "./components/HWB.vue";
import COLOR from "./components/COLOR.vue";
import { useI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";

const i18n = useI18n();
</script>

<template>
    <header>
        <h1>CSS Colors</h1>
        <p>https://developer.mozilla.org/en-US/docs/Web/CSS/color_value</p>
        <p>https://developer.mozilla.org/en-US/blog/css-color-module-level-4/</p>
        <select :value="i18n.locale.value" @change="(e) => (i18n.locale.value = e.target.value)">
            <option value="en-US">en-US</option>
            <option value="zh-CN">zh-CN</option>
        </select>
    </header>

    <RGB></RGB>
    <HSL></HSL>
    <LAB></LAB>
    <LCH></LCH>
    <OkLAB></OkLAB>
    <OkLCH></OkLCH>
    <HWB></HWB>
    <COLOR></COLOR>

    <footer>
        <p>
            You can also try this:
            <a href="https://colorjs.io/apps/picker/">https://colorjs.io/apps/picker/</a>
        </p>
    </footer>
</template>

<style>
article {
    border: 2px solid var(--landsoul-color);
    padding: 4px;
    margin: 4px;
}
</style>
<style scoped>
footer {
    margin-top: 16px;
    padding: 4px;
    display: grid;
    place-items: center;
    background: var(--landsoul-shadow);
}
</style>
