<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

</script>

<template>

    <div class="col-sm-6 mb-6 mb-sm-0">
        <div class="card project-card">
            <div class="card-body">
                <img :src="img" alt="Logo" height="70px" width="70px" class="card-title">
                <h3 class="card-title">{{ title }}</h3>
                <p class="card-text top-cards-text">
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>


</template>


<style scoped>

.project-card {
	background-color: #1a1b2e;
	text-align: center;
	height: 100%;
	padding-top: 25px;
	padding-bottom: 25px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	color: white;
}

.top-cards-text {
	font-size: 17px;
	color: #9193a8;
    hyphens: auto; 
	text-align: justify
}

</style>
