<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import LCMCIcon from "~/components/img/LCMCIcon.vue";

const links = [[
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/#about"
    },
    {
        label: "Skills",
        to: "/skills"
    },
    {
        label: "Projekte",
        to: "/projects"
    },
    {
        label: "Blog",
        to: "https://blog.leicraftmc.de/",
        target: "_blank"
    },
    {
        label: "Github",
        to: "https://github.com/LeiCraft/",
        target: "_blank"
    },
    {
        label: "Discord",
        to: "https://discord.com/invite/3cdazADhtv",
        target: "_blank"
    },
]] satisfies NavigationMenuItem[][];
</script>

<template>

    <div class="app-layout main-bg-color">

        <UHeader>
            <template #left>
                <NuxtLink to="/" class="flex items-center gap-1.5">
                    <LCMCIcon class="w-10 h-10" />
                    <span class="text-3xl font-extrabold">
                        LeiCraft_MC
                    </span>
                </NuxtLink>
            </template>

            <UNavigationMenu :items="links" />

            <template #body>
                <UNavigationMenu :items="links" orientation="vertical" class="w-full" />
            </template>

        </UHeader>

        <UMain class="py-8 main-content">
            <UContainer>
                <slot />
            </UContainer>
        </UMain>

        <UFooter class="mt-8 bg-neutral-900">
            <div class="text-sm text-slate-500 text-center">
                <p class="mb-1">
                    <span>&copy; 2021 - {{ new Date().getFullYear() }} LeiCraft_MC. Alle Rechte vorbehalten</span>
                </p>
                <p>
                    <NuxtLink to="https://client.leicraftmc.de/impressum/" target="_blank" class="hover:text-slate-300 transition-colors">
                        Impressum
                    </NuxtLink>
                    <span class="mx-2">|</span>
                    <NuxtLink to="https://client.leicraftmc.de/datenschutz/" target="_blank" class="hover:text-slate-300 transition-colors">
                        Datenschutz
                    </NuxtLink>
                </p>
            </div>
        </UFooter>

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
