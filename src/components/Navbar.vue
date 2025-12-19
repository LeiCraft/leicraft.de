
<script setup lang="ts">

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-body" data-bs-theme="dark" style="background-color: #0b0c1b !important;">
        <div class="container justify-content-lg-center">
            <a class="navbar-brand" href="/">
                <img src="/assets/img/logo.png" alt="Logo" width="50" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-lg-grow-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text" aria-current="page" @click="scrollToTop()" href="#" style="cursor: pointer;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external-link" target="_blank" href="https://blog.leicraftmc.de/">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external-link" target="_blank" href="https://github.com/LeiCraft/">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external-link" target="_blank" href="https://discord.com/invite/3cdazADhtv">Discord</a>
                    </li>
                </ul>
            </div> 
        </div>
    </nav>
</template>

<style scoped>

a.external-link::after {
    content: "↗";
    font-size: 0.8em; 
    margin-left: 0.3em; 
    display: inline-block;
    color: inherit;
    text-decoration: none;
}


</style>
