<script setup lang="ts">
import { getProjectById, projects } from '~/data/projects';

const route = useRoute();
const project = computed(() => getProjectById(route.params.id as string));

if (!project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

const baseUrl = "https://www.leicraft.de";
const pageUrl = computed(() => `${baseUrl}/projects/${project.value?.id}`);

useHead(() => ({
    link: [{ rel: "canonical", href: pageUrl.value }],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: project.value?.title,
                description: project.value?.shortDescription,
                url: pageUrl.value,
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Linux, Server, Web",
                author: {
                    "@type": "Person",
                    name: "Linus Fischer",
                    url: baseUrl,
                },
                codeRepository: project.value?.sourceUrl,
                ...(project.value?.websiteUrl ? { sameAs: project.value.websiteUrl } : {}),
            }),
        },
    ],
}));

useSeoMeta({
    title: `${project.value.title} — Projekt von Linus Fischer`,
    description: project.value.shortDescription,
    ogTitle: `${project.value.title} — Projekt von Linus Fischer`,
    ogDescription: project.value.shortDescription,
    ogUrl: pageUrl.value,
    ogType: "website",
    twitterCard: "summary",
    twitterTitle: `${project.value.title} — Projekt von Linus Fischer`,
    twitterDescription: project.value.shortDescription,
});

const allLinks = computed(() => {
    const links = [];

    if (project.value?.sourceUrl) {
        links.push({
            label: 'Source Code',
            url: project.value.sourceUrl,
            icon: 'i-lucide-code',
        });
    }

    if (project.value?.websiteUrl) {
        links.push({
            label: 'Website',
            url: project.value.websiteUrl,
            icon: 'i-lucide-globe',
        });
    }

    if (project.value?.additionalLinks) {
        for (const link of project.value.additionalLinks) {
            links.push({
                label: link.label,
                url: link.url,
                icon: link.icon ?? 'i-lucide-external-link',
            });
        }
    }

    return links;
});
</script>

<template>
    <section v-if="project" class="py-8 max-w-4xl mx-auto">
        <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
            <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
            <span>Alle Projekte</span>
        </NuxtLink>

        <div class="flex flex-col items-center text-center">
            <img :src="project.logo" :alt="`${project.title} Logo`" height="100" width="100" class="mb-4" />

            <h1 class="text-4xl font-bold mb-2">{{ project.title }}</h1>

            <div v-if="project.status" class="mb-4">
                <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-sky-500/20 text-sky-300">
                    {{ project.status }}
                </span>
            </div>

            <div v-if="project.tags.length" class="flex flex-wrap justify-center gap-2 mb-6">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-sm px-3 py-1 rounded-md bg-neutral-800 text-neutral-300"
                >
                    {{ tag }}
                </span>
            </div>
        </div>

        <div class="bg-[#1a1b2e] rounded-lg p-6 md:p-8 mt-6">
            <p class="text-lg text-gray-300 leading-relaxed">
                {{ project.description }}
            </p>
        </div>

        <div v-if="allLinks.length" class="flex flex-wrap justify-center gap-3 mt-8">
            <UButton
                v-for="link in allLinks"
                :key="link.url"
                :to="link.url"
                target="_blank"
                :icon="link.icon"
                color="neutral"
                variant="soft"
                size="lg"
            >
                {{ link.label }}
            </UButton>
        </div>
    </section>
</template>
