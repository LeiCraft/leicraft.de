<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import type { NuxtError } from "#app";

const props = defineProps<{
    error: NuxtError
}>()

</script>

<template>

    <NuxtRouteAnnouncer />
    <UApp>

        <div class="app-layout main-bg-color">

            <Header />

            <UMain class="py-8 main-content">
                <UContainer>
                    <UError :error="props.error" />
                </UContainer>
            </UMain>

            <Footer />

        </div>

    </UApp>

</template>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
