<script setup lang="ts">
import RGB from "./components/RGB.vue";
import HSL from "./components/HSL.vue";
import LAB from "./components/LAB.vue";
import LCH from "./components/LCH.vue";
import OkLAB from "./components/OkLAB.vue";
import OkLCH from "./components/OkLCH.vue";
import HWB from "./components/HWB.vue";
import COLOR from "./components/COLOR.vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
</script>

<template>
    <header>
        <h1>CSS Colors</h1>
        <p>https://developer.mozilla.org/en-US/docs/Web/CSS/color_value</p>
        <p>https://developer.mozilla.org/en-US/blog/css-color-module-level-4/</p>
        <select :value="i18n.locale.value"
            @change="(e: Event) => (i18n.locale.value = ((e as InputEvent).target as HTMLSelectElement).value)">
            <option value="en-US">en-US</option>
            <option value="zh-CN">zh-CN</option>
        </select>
    </header>

    <main>
        <RGB />
        <HSL />
        <LAB />
        <LCH />
        <OkLAB />
        <OkLCH />
        <HWB />
        <COLOR />
    </main>

    <footer>
        <p>
            You can also try this:
            <a href="https://colorjs.io/apps/picker/">https://colorjs.io/apps/picker/</a>
        </p>
    </footer>
</template>

<style>
section {
    border: 2px solid var(--landsoul-color);
    padding: 4px;
    margin: 4px;
}

menu {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}

@media screen and (max-width: 960px) {
    menu {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

input {
    max-width: 6rem;
}

input[type="text"] {
    max-width: 5rem;
}

label {
    font-size: small;
}
</style>
<style scoped>
header,
footer {
    padding: 8px;
}

section {
    border-radius: 6px;
    padding: 2px 8px;
}

@media screen and (min-width: 640px) {
    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

}

footer {
    margin-top: 16px;
    display: grid;
    place-items: center;
    background: var(--landsoul-shadow);
}
</style>
