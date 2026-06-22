<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';
import { projects } from '~/data/projects';

const baseUrl = "https://www.leicraft.de";
const pageUrl = `${baseUrl}/projects`;

useHead(() => ({
    link: [{ rel: "canonical", href: pageUrl }],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: projects.map((project, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    url: `${baseUrl}/projects/${project.id}`,
                    name: project.title,
                    description: project.shortDescription,
                })),
            }),
        },
    ],
}));

useSeoMeta({
    title: "Projekte | Linus Fischer",
    description: "Meine Projekte: ADVENA, NetIgnite, LeiOS, Delivr, NowIP, LeiCraft_MC Hosting und Schwere-Zeit.de.",
    ogTitle: "Projekte | Linus Fischer",
    ogDescription: "Übersicht über meine Open-Source-Projekte: ADVENA, NetIgnite, LeiOS, Delivr, NowIP, LeiCraft_MC Hosting und Schwere-Zeit.de.",
    ogUrl: pageUrl,
    ogType: "website",
    twitterCard: "summary",
    twitterTitle: "Projekte | Linus Fischer",
    twitterDescription: "Übersicht über meine Open-Source-Projekte: ADVENA, NetIgnite, LeiOS, Delivr, NowIP und LeiCraft_MC Hosting.",
});
</script>

<template>
    <section class="py-8">
        <h1 class="text-center text-3xl font-bold mb-10">Meine Projekte</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :title="project.title"
                :img="project.logo"
                :to="`/projects/${project.id}`"
                :tags="project.tags"
                :status="project.status"
            >
                {{ project.shortDescription }}
            </ProjectCard>
        </div>
    </section>
</template>
