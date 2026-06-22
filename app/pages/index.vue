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

useSeoMeta({
    title: "Linus Fischer",
    description: "Hi, ich bin Linus, ein leidenschaftlicher Softwareentwickler aus Deutschland. Ich liebe mit Blockchain und dezentralen Netzwerken zu arbeiten.",
});

</script>

<template>
    <section id="home" class="text-center py-12">
        <h1 class="text-5xl font-bold mb-2">Hi, ich bin Linus</h1>
        <h2 class="text-2xl text-gray-400">aka LeiCraft_</h2>
    </section>

    <section id="about" class="py-8">
        <h2 class="text-center text-3xl font-bold mb-6">Über mich</h2>
        <p class="text-center mx-auto max-w-[800px] text-lg text-gray-300">
            Ich bin Softwareentwickler mit einer großen Leidenschaft für Blockchain-Technologie, Server-Side Development und
            Minecraft Modding. Es begeistert mich, skalierbare und dezentrale Systeme zu entwickeln und
            Server-Infrastrukturen zu optimieren. Außerdem beteilige ich mich gerne an Open-Source-Projekten, um meine
            Fähigkeiten weiter auszubauen und die Entwickler-Community zu unterstützen.
        </p>
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
