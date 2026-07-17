<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import LCMCIcon from "~/components/img/LCMCIcon.vue";

const links = computed<NavigationMenuItem[]>(() => [
    {
        label: "About",
        to: "/"
    },
    {
        label: "Skills",
        to: "/#skills",
        exact: true,
        active: false
    },
    {
        label: "Projekte",
        to: "/projects"
    },
    {
        label: "Kontakt",
        to: "/contact"
    },
    {
        label: "Blog",
        to: "https://blog.leicraftmc.de/",
        target: "_blank"
    }
]);

const socialLinks = [
    { icon: "i-lucide-github", to: "https://github.com/LeiCraft/", label: "GitHub" },
    { icon: "i-lucide-gitlab", to: "https://git.leicraftmc.de/LeiCraft/", label: "GitLab" },
    { icon: "i-lucide-message-circle", to: "https://discord.com/invite/3cdazADhtv", label: "Discord" },
    { icon: "i-lucide-twitter", to: "https://twitter.com/leicraft_", label: "Twitter" }
];

const mobileLinks = computed<NavigationMenuItem[][]>(() => [
    links.value,
    socialLinks.map(social => ({
        label: social.label,
        to: social.to,
        target: "_blank",
        icon: social.icon
    }))
]);

</script>

<template>

    <UHeader class="backdrop-blur-xl">
        <template #title>
            <NuxtLink to="/" class="flex items-center gap-1.5">
                <LCMCIcon class="w-10 h-10" />
                <span class="text-3xl font-extrabold">
                    Linus Fischer
                </span>
            </NuxtLink>
        </template>

        <UNavigationMenu :items="[links]" />

        <template #body>
            <UNavigationMenu :items="mobileLinks" orientation="vertical" class="w-full" />
        </template>

        <template #right>
            <div class="hidden lg:flex items-center gap-2">
                <UButton
                    v-for="social in socialLinks"
                    :key="social.label"
                    :to="social.to"
                    target="_blank"
                    :icon="social.icon"
                    color="neutral"
                    variant="ghost"
                    size="lg"
                    :aria-label="social.label"
                    class="hover:scale-110 transition-transform duration-200"
                />
            </div>
        </template>
    </UHeader>

</template>