<script setup lang="ts">
import type { Component } from 'vue';

import AndroidStudioDarkIcon from '~/components/skill/skill-icons/AndroidStudio-Dark-icon.vue';
import BunDarkIcon from '~/components/skill/skill-icons/Bun-Dark-icon.vue';
import CloudflareDarkIcon from '~/components/skill/skill-icons/Cloudflare-Dark-icon.vue';
import CSIcon from '~/components/skill/skill-icons/CS-icon.vue';
import CSSIcon from '~/components/skill/skill-icons/CSS-icon.vue';
import DebianDarkIcon from '~/components/skill/skill-icons/Debian-Dark-icon.vue';
import DiscordJSDarkIcon from '~/components/skill/skill-icons/DiscordJS-Dark-icon.vue';
import DockerIcon from '~/components/skill/skill-icons/Docker-icon.vue';
import GitIcon from '~/components/skill/skill-icons/Git-icon.vue';
import GithubDarkIcon from '~/components/skill/skill-icons/Github-Dark-icon.vue';
import HTMLIcon from '~/components/skill/skill-icons/HTML-icon.vue';
import IdeaDarkIcon from '~/components/skill/skill-icons/Idea-Dark-icon.vue';
import JavaDarkIcon from '~/components/skill/skill-icons/Java-Dark-icon.vue';
import JavaScriptIcon from '~/components/skill/skill-icons/JavaScript-icon.vue';
import LaravelDarkIcon from '~/components/skill/skill-icons/Laravel-Dark-icon.vue';
import LinuxDarkIcon from '~/components/skill/skill-icons/Linux-Dark-icon.vue';
import MySQLDarkIcon from '~/components/skill/skill-icons/MySQL-Dark-icon.vue';
import NodeJSDarkIcon from '~/components/skill/skill-icons/NodeJS-Dark-icon.vue';
import PHPDarkIcon from '~/components/skill/skill-icons/PHP-Dark-icon.vue';
import PythonDarkIcon from '~/components/skill/skill-icons/Python-Dark-icon.vue';
import TerraformDarkIcon from '~/components/skill/skill-icons/Terraform-Dark-icon.vue';
import TypeScriptIcon from '~/components/skill/skill-icons/TypeScript-icon.vue';
import VisualStudioDarkIcon from '~/components/skill/skill-icons/VisualStudio-Dark-icon.vue';
import VSCodeDarkIcon from '~/components/skill/skill-icons/VSCode-Dark-icon.vue';
import VueJSDarkIcon from '~/components/skill/skill-icons/VueJS-Dark-icon.vue';

interface Skill {
    name: string;
    icon: Component;
}

const languages: Skill[] = [
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Java', icon: JavaDarkIcon },
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'PHP', icon: PHPDarkIcon },
    { name: 'Python', icon: PythonDarkIcon },
    { name: 'C#', icon: CSIcon },
];

const frameworksAndLibraries: Skill[] = [
    { name: 'Bun', icon: BunDarkIcon },
    { name: 'Node.js', icon: NodeJSDarkIcon },
    { name: 'Laravel', icon: LaravelDarkIcon },
    { name: 'Vue.js', icon: VueJSDarkIcon },
    { name: 'Discord.js', icon: DiscordJSDarkIcon }
];

const tools: Skill[] = [
    { name: "VS Code", icon: VSCodeDarkIcon },
    { name: "Visual Studio", icon: VisualStudioDarkIcon },
    { name: "IntelliJ IDEA", icon: IdeaDarkIcon },
    { name: "Android Studio", icon: AndroidStudioDarkIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubDarkIcon },
    { name: "Bun", icon: BunDarkIcon }
];

const infrastructure: Skill[] = [
    { name: "Linux", icon: LinuxDarkIcon },
    { name: "Debian", icon: DebianDarkIcon },
    { name: "MySQL", icon: MySQLDarkIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Cloudflare", icon: CloudflareDarkIcon },
    { name: "Terraform", icon: TerraformDarkIcon },
];

const baseUrl = "https://www.leicraft.de";

useHead(() => ({
    link: [{ rel: "canonical", href: baseUrl + "/" }],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Linus Fischer",
                alternateName: "LeiCraft_",
                url: baseUrl,
                jobTitle: "Softwareentwickler",
                sameAs: [
                    "https://github.com/LeiCraft",
                    "https://git.leicraftmc.de/LeiCraft/",
                    "https://twitter.com/leicraft_",
                    "https://blog.leicraftmc.de/",
                ],
                knowsAbout: [
                    "Softwareentwicklung",
                    "Server-Infrastruktur",
                    "Dezentrale Netzwerke",
                    "Open Source",
                    "Blockchain",
                    "Linux",
                    "Self-Hosting",
                ],
            }),
        },
    ],
}));

useSeoMeta({
    title: "Linus Fischer — Softwareentwickler & Open-Source-Enthusiast",
    description: "Linus Fischer (LeiCraft_) — Softwareentwickler aus Deutschland mit Fokus auf skalierbare Server-Software, dezentrale Systeme und Open-Source-Tools.",
    ogTitle: "Linus Fischer — Softwareentwickler & Open-Source-Enthusiast",
    ogDescription: "Portfolio von Linus Fischer (LeiCraft_): Projekte wie ADVENA, NetIgnite, LeiOS, Delivr und NowIP.",
    ogUrl: baseUrl,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Linus Fischer — Softwareentwickler & Open-Source-Enthusiast",
    twitterDescription: "Portfolio von Linus Fischer (LeiCraft_): Projekte wie ADVENA, NetIgnite, LeiOS, Delivr und NowIP.",
});

</script>

<template>
    <section id="home" class="text-center py-12">
        <h1 class="text-5xl font-bold mb-2">Linus Fischer</h1>
        <p class="text-2xl text-gray-400">Softwareentwickler, Open-Source-Enthusiast & Infrastruktur-Nerd</p>
        <p class="text-lg text-gray-500 mt-2">Hi, ich bin Linus — auch bekannt als LeiCraft_.</p>
    </section>

    <section id="about" class="py-8">
        <h2 class="text-center text-3xl font-bold mb-6">Über mich</h2>
        <div class="mx-auto max-w-[800px] text-lg text-gray-300 space-y-4">
            <p>
                Ich bin Linus Fischer, auch bekannt als <span class="font-semibold text-white">LeiCraft_</span> — ein
                leidenschaftlicher Softwareentwickler und Infrastruktur-Enthusiast aus Deutschland. Schon seit meiner frühesten
                Zeit mit Computern fasziniert mich, wie Software und gut geplante Infrastruktur zusammenwirken, um
                verlässliche Systeme zu schaffen.
            </p>
            <p>
                Heute liegt mein Fokus auf skalierbarer Server-Side-Entwicklung, dezentralen Netzwerken und der Optimierung
                von Server-Infrastrukturen. Mich begeistert die Idee, Systeme zu bauen, die weniger von zentralen
                Plattformen abhängen, dafür aber stabiler, offener und für jeden nachvollziehbar sind. In der Praxis bedeutet
                das oft: TypeScript und Node.js auf der Server-Seite, Vue.js für Interfaces, Docker und Linux für das
                Deployment — kombiniert mit einem faible für Automatisierung und saubere Architektur.
            </p>
            <p>
                Neben dem Programmieren betreibe ich eigene Server, experimentiere mit Self-Hosting-Lösungen und dokumentiere
                das Gelernte gelegentlich auf meinem Blog. Open Source begleitet mich dabei täglich: Ich arbeite gerne an
                Projekten, die transparent sind, anderen helfen und aus denen man als Entwickler selbst wieder lernen kann.
                Wenn ich nicht gerade Code schreibe, beschäftige ich mich wahrscheinlich mit Netzwerk-Setups, Linux-Distributionen
                oder neuen Ansätzen für resilientere Infrastruktur.
            </p>

            <div class="pt-2">
                <NuxtLink
                    to="/projects"
                    class="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                    <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
                    <span>Meine Projekte entdecken</span>
                </NuxtLink>
            </div>
        </div>
    </section>

    <section id="skills" class="py-8">
        <h2 class="text-center text-3xl font-bold mb-10">Meine Skills</h2>

        <div class="flex flex-col gap-10">
            <Skillset name="Programmiersprachen" :items="languages" />
            <Skillset name="Frameworks & Libraries" :items="frameworksAndLibraries" />
            <Skillset name="Infrastruktur" :items="infrastructure" />
            <Skillset name="Tools" :items="tools" />
        </div>
    </section>
</template>
