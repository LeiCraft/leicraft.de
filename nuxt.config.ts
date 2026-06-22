// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/ui'],

    app: {
        head: {
            htmlAttrs: {
                lang: 'de-DE',
            },
        },
    },

    css: ['~/assets/css/main.css'],

    nitro: {
        preset: 'static',
        prerender: {
            routes: [
                '/projects/advena',
                '/projects/netignite',
                '/projects/leios',
                '/projects/delivr',
                '/projects/nowip',
                '/projects/leicraft-mc-hosting',
                '/projects/schwere-zeit',
            ],
        },
    },

    colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: ''
	}

});
