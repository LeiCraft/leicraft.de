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
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'author', content: 'Linus Fischer' },
                { name: 'robots', content: 'index, follow, max-image-preview:large' },
                { name: 'theme-color', content: '#0b0c1b' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
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
                '/projects/mindcode'
            ],
        },
    },

    colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: ''
	}

});
