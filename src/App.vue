<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import AboutMeView from './views/AboutMeView.vue';
import ProjectsView from './views/projects/ProjectsView.vue';
import Navbar from './components/Navbar.vue';
import SkillsView from './views/SkillsView.vue';
</script>

<template>
	<header>
		<Navbar />
	</header>

	<main class="mt-5 pt-5 container">
		<HomeView />
		<AboutMeView />
		<SkillsView />
		<ProjectsView />
	</main>

	<footer class="footer">
		<div class="container-fluid footer-legal">
			<p class="text-center legal-text">&copy; 2021 - 2024 LeiCraft_MC. Alle Rechte vorbehalten</p>
		</div>
	</footer>

</template>

<style scoped>

.footer {
    margin-top: 50px;
    margin-bottom: 0;
}
.footer-legal {
    background-color: #1a1b2e;
}
.legal-text {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 0;
    background-color: #1a1b2e;
}

</style>
