<script setup lang="ts">
import AndroidStudioDarkIcon from '@/assets/skill-icons/AndroidStudio-Dark-icon.vue';
import BunDarkIcon from '@/assets/skill-icons/Bun-Dark-icon.vue';
import CloudflareDarkIcon from '@/assets/skill-icons/Cloudflare-Dark-icon.vue';
import CSIcon from '@/assets/skill-icons/CS-icon.vue';
import CSSIcon from '@/assets/skill-icons/CSS-icon.vue';
import DebianDarkIcon from '@/assets/skill-icons/Debian-Dark-icon.vue';
import DiscordJSDarkIcon from '@/assets/skill-icons/DiscordJS-Dark-icon.vue';
import DockerIcon from '@/assets/skill-icons/Docker-icon.vue';
import GitIcon from '@/assets/skill-icons/Git-icon.vue';
import GithubDarkIcon from '@/assets/skill-icons/Github-Dark-icon.vue';
import HTMLIcon from '@/assets/skill-icons/HTML-icon.vue';
import IdeaDarkIcon from '@/assets/skill-icons/Idea-Dark-icon.vue';
import JavaDarkIcon from '@/assets/skill-icons/Java-Dark-icon.vue';
import JavaScriptIcon from '@/assets/skill-icons/JavaScript-icon.vue';
import LaravelDarkIcon from '@/assets/skill-icons/Laravel-Dark-icon.vue';
import LinuxDarkIcon from '@/assets/skill-icons/Linux-Dark-icon.vue';
import MySQLDarkIcon from '@/assets/skill-icons/MySQL-Dark-icon.vue';
import NodeJSDarkIcon from '@/assets/skill-icons/NodeJS-Dark-icon.vue';
import PHPDarkIcon from '@/assets/skill-icons/PHP-Dark-icon.vue';
import PythonDarkIcon from '@/assets/skill-icons/Python-Dark-icon.vue';
import TerraformDarkIcon from '@/assets/skill-icons/Terraform-Dark-icon.vue';
import TypeScriptIcon from '@/assets/skill-icons/TypeScript-icon.vue';
import VisualStudioDarkIcon from '@/assets/skill-icons/VisualStudio-Dark-icon.vue';
import VSCodeDarkIcon from '@/assets/skill-icons/VSCode-Dark-icon.vue';
import VueJSDarkIcon from '@/assets/skill-icons/VueJS-Dark-icon.vue';
import Skillset from '@/components/Skillset.vue';
import { type Component } from 'vue';

const languages = [
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Java', icon: JavaDarkIcon },
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'PHP', icon: PHPDarkIcon },
    { name: 'Python', icon: PythonDarkIcon },
    { name: 'C#', icon: CSIcon },
];

const frameworks_and_libraries = [
    { name: 'Bun', icon: BunDarkIcon },
    { name: 'Node.js', icon: NodeJSDarkIcon },
    { name: 'Laravel', icon: LaravelDarkIcon },
    { name: 'Vue.js', icon: VueJSDarkIcon },
    { name: 'Discord.js', icon: DiscordJSDarkIcon }
];

const tools = [
    { name: "VS Code", icon: VSCodeDarkIcon },
    { name: "Visual Studio", icon: VisualStudioDarkIcon },
    { name: "IntelliJ IDEA", icon: IdeaDarkIcon },
    { name: "Android Studio", icon: AndroidStudioDarkIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubDarkIcon },
    { name: "Bun", icon: BunDarkIcon }
];

const infastructure = [
    { name: "Linux", icon: LinuxDarkIcon },
    { name: "Debian", icon: DebianDarkIcon },
    { name: "MySQL", icon: MySQLDarkIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Cloudflare", icon: CloudflareDarkIcon },
    { name: "Terrafom", icon: TerraformDarkIcon },
];

</script>


<template>

    <section id="skills" class="mt-5">

        <h2 class="text-center">Meine Skills</h2>


        <div class="d-flex flex-column">

            <div>
                <Skillset name="Programmiersprachen" :items="languages" />
            </div>

            <div>
                <Skillset name="Frameworks & Libraries" :items="frameworks_and_libraries" />
            </div>

            <div>
                <Skillset name="Infrastruktur" :items="infastructure" />
            </div>

            <div>
                <Skillset name="Tools" :items="tools" />
            </div>

        </div>
    </section>

</template>
