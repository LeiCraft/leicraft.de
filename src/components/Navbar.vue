

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container justify-content-lg-center">
            <a class="navbar-brand" href="/">
                <img src="/logo.png" alt="Logo" width="50" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-lg-grow-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/leicoin">LeiCoin</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external-link" href="https://github.com/LeiCraft/">Github</a>
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