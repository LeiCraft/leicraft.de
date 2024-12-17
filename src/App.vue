<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import AboutMeView from './views/AboutMeView.vue';
import ProjectsView from './views/projects/ProjectsView.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  
  <main class="mt-5 pt-5">
    <HomeView />
    <AboutMeView />
    <ProjectsView />
  </main>

</template>

<style scoped>



</style>
