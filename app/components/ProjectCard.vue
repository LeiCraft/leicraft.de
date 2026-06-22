<script setup lang="ts">
interface Props {
    title: string;
    img: string;
    to?: string;
    tags?: string[];
    status?: string;
}

const { title, img, to, tags = [], status } = defineProps<Props>();
</script>

<template>
    <NuxtLink
        :to="to"
        class="group bg-[#1a1b2e] rounded-lg text-center h-full flex flex-col p-6 transition-transform duration-200 hover:scale-[1.02] hover:bg-[#22233a]"
    >
        <img :src="img" :alt="`${title} Logo`" height="70" width="70" class="mx-auto mb-3" />

        <div v-if="status" class="mb-2">
            <span class="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-sky-500/20 text-sky-300">
                {{ status }}
            </span>
        </div>

        <h3 class="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">{{ title }}</h3>

        <p class="text-[17px] text-[#9193a8] hyphens-auto text-justify mt-2 grow">
            <slot></slot>
        </p>

        <div v-if="tags.length" class="flex flex-wrap justify-center gap-2 mt-4">
            <span
                v-for="tag in tags"
                :key="tag"
                class="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300"
            >
                {{ tag }}
            </span>
        </div>
    </NuxtLink>
</template>
