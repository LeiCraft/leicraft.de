<script setup lang="ts">

const baseUrl = "https://www.leicraft.de";

const pageUrl = `${baseUrl}/contact`;

useHead(() => ({
    link: [
        { rel: "canonical", href: pageUrl },
    ],
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Linus Fischer",
                                item: baseUrl,
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Kontakt",
                                item: pageUrl,
                            },
                        ],
                    },
                    {
                        "@type": "ContactPage",
                        name: "Kontakt",
                        url: pageUrl,
                        mainEntity: {
                            "@type": "Person",
                            name: "Linus Fischer",
                            alternateName: "LeiCraft_",
                            email: "mailto:leicraft@leicraftmc.de",
                            telephone: "+49 156 7981 2451",
                            url: baseUrl,
                            sameAs: [
                                "https://github.com/LeiCraft",
                                "https://git.leicraftmc.de/LeiCraft/",
                                "https://twitter.com/leicraft_",
                                "https://blog.leicraftmc.de/",
                            ],
                        },
                    },
                ],
            }),
        },
    ],
}));

const pageTitle = "Kontakt — Linus Fischer (LeiCraft_)";
const pageDescription = "Kontaktiere Linus Fischer (LeiCraft_) per E-Mail, Telefon oder WhatsApp.";
const ogImageUrl = baseUrl + "/assets/img/logo.png";

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogUrl: pageUrl,
    ogType: "website",
    ogLocale: "de_DE",
    ogImage: ogImageUrl,
    ogImageAlt: "Linus Fischer (LeiCraft_) — Softwareentwickler & Open-Source-Enthusiast aus Deutschland",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: "summary_large_image",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: ogImageUrl,
    twitterImageAlt: "Linus Fischer (LeiCraft_) — Softwareentwickler & Open-Source-Enthusiast aus Deutschland",
});

interface ContactMethod {
    label: string;
    value: string;
    href: string;
    icon: string;
    note?: string;
}

const contactMethods: ContactMethod[] = [
    {
        label: "E-Mail",
        value: "leicraft@leicraftmc.de",
        href: "mailto:leicraft@leicraftmc.de",
        icon: "i-lucide-mail",
    },
    {
        label: "Telefon",
        value: "+49 156 7981 2451",
        href: "tel:+4915679812451",
        icon: "i-lucide-phone",
    },
    {
        label: "WhatsApp",
        value: "+49 156 7981 2451",
        href: "https://wa.me/4915679812451",
        icon: "i-lucide-message-circle-more",
        note: "Öffnet WhatsApp Chat",
    },
];

</script>

<template>
    <section class="text-center py-12">
        <h1 class="text-4xl font-bold mb-4">Kontakt</h1>
        <p class="text-xl text-gray-400 max-w-[600px] mx-auto">
            Du hast eine Frage, ein Projekt oder möchtest einfach in Kontakt treten? Ich freue mich von dir zu hören.
        </p>
    </section>

    <section class="py-8">
        <div class="mx-auto max-w-[700px] space-y-4">
            <NuxtLink
                v-for="method in contactMethods"
                :key="method.label"
                :to="method.href"
                :target="method.href.startsWith('http') ? '_blank' : undefined"
                class="group flex items-center gap-5 bg-[#1a1b2e] rounded-lg p-5 transition-all duration-200 hover:bg-[#22233a] hover:scale-[1.01]"
            >
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center">
                    <UIcon :name="method.icon" class="w-6 h-6 text-sky-400" />
                </div>
                <div class="flex-1 min-w-0">
                    <h2 class="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {{ method.label }}
                    </h2>
                    <p class="text-[17px] text-gray-300 truncate">
                        {{ method.value }}
                    </p>
                    <p v-if="method.note" class="text-sm text-gray-500 mt-0.5">
                        {{ method.note }}
                    </p>
                </div>
                <UIcon name="i-lucide-arrow-up-right" class="w-5 h-5 text-gray-500 group-hover:text-sky-400 transition-colors flex-shrink-0" />
            </NuxtLink>
        </div>
    </section>
</template>
