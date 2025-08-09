<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import LeiCoinView from './LeiCoinView.vue';
import HostingView from './HostingView.vue';
import NetIgniteView from './NetIgniteView.vue';

</script>

<template>
	<section id="projects" class="mt-5">

		<h2 class="text-center">Meine Projekte</h2>

		<div class="mb-5 pb-0 pb-sm-5">
			<div class="row gx-4 gy-4">
				<LeiCoinView />
				<HostingView />
				<NetIgniteView />
			</div>
		</div>

	</section>
</template>

<style>

</style>
