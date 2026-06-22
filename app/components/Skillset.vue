<script setup lang="ts">
import type { Component } from 'vue';

interface Skill {
    name: string;
    icon: Component;
}

interface Props {
    name: string;
    items: Skill[];
}

const { name, items } = defineProps<Props>();
</script>

<template>
    <div class="text-center">
        <h3 class="text-xl font-semibold mb-3">{{ name }}</h3>
        <div class="flex flex-wrap justify-center gap-2">
            <div v-for="item in items" :key="item.name" class="p-2">
                <component :is="item.icon" class="w-16 h-16" />
            </div>
        </div>
    </div>
</template>
