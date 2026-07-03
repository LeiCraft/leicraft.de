<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';

</script>

<template>

    <div class="app-layout main-bg-color">

        <Header />

        <UMain class="py-8 main-content">
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <Footer />

    </div>

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
