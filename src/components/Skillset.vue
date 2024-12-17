<script setup lang="ts">
import type { Component } from 'vue';


interface Skill {
    name: string;
    icon: Component;
}

defineProps({
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array<Skill>,
        required: true
    }
});

</script>

<template>

    <h4 class="text-center">{{ name }}</h4>

    <div class="d-flex flex-wrap justify-content-center">
        <div v-for="item in items" :key="item.name" class="m-1">
            <component :is="item.icon" style="width: 4rem; height: 4rem;" />
        </div>
    </div>

</template>
