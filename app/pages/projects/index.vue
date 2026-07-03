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
                "@graph": [
                    {
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Linus Fischer",
                                item: baseUrl,
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Projekte",
                                item: pageUrl,
                            },
                        ],
                    },
                    {
                        "@type": "ItemList",
                        itemListElement: projects.map((project, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            url: `${baseUrl}/projects/${project.id}`,
                            name: project.title,
                            description: project.shortDescription,
                        })),
                    },
                ],
            }),
        },
    ],
}));

const pageTitle = "Projekte | Linus Fischer";
const pageDescription = "Übersicht über alle Projekte von Linus Fischer (LeiCraft_): ADVENA, NetIgnite, LeiOS, Delivr, NowIP, LeiCraft_MC Hosting, Schwere-Zeit.de und MindCode.";
const ogImageUrl = baseUrl + "/assets/img/logo.png";

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogUrl: pageUrl,
    ogType: "website",
    ogLocale: "de_DE",
    ogImage: ogImageUrl,
    ogImageAlt: "Projekte von Linus Fischer (LeiCraft_)",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: "summary_large_image",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: ogImageUrl,
    twitterImageAlt: "Projekte von Linus Fischer (LeiCraft_)",
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
