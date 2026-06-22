<script setup lang="ts">
interface Props {
    title: string;
    img: string;
}

const { title, img } = defineProps<Props>();
</script>

<template>
    <div class="bg-[#1a1b2e] rounded-lg text-center h-full flex justify-center flex-col p-6">
        <img :src="img" alt="Logo" height="70" width="70" class="mx-auto mb-3" />
        <h3 class="text-xl font-bold text-white">{{ title }}</h3>
        <p class="text-[17px] text-[#9193a8] hyphens-auto text-justify mt-2">
            <slot></slot>
        </p>
    </div>
</template>
