<script setup lang="ts">
import ProjectCard from '~/components/ProjectCard.vue';

useSeoMeta({
    title: "Projekte | Linus Fischer",
    description: "Meine Projekte: LeiCoin, LeiCraft_MC Hosting, NetIgnite und LeiOS.",
});

</script>

<template>
    <section class="py-8">
        <h2 class="text-center text-3xl font-bold mb-10">Meine Projekte</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ProjectCard title="LeiCoin" img="/static/logo/leicoin-logo.png">
                LeiCoin ist ein modernes Blockchain-Projekt, das durch eine
                energieeffiziente Proof-of-Stake (PoS)-Technologie, optimierte
                Datenkompression und eine skalierbare Architektur überzeugt. Es bietet eine
                hochperformante, dezentrale Plattform mit effizienter Blockspeicherung, um
                maximale Performance und globale Skalierbarkeit zu gewährleisten. Ziel ist
                es, eine sichere, effiziente und zukunftssichere Blockchain-Lösung
                bereitzustellen.
            </ProjectCard>

            <ProjectCard title="LeiCraft_MC Hosting" img="/static/logo/logo.png">
                LeiCraft_MC Hosting ist ein kostengünstiges Hosting-Angebot, das dennoch außergewöhnliche Performance bietet. Mit
                einer hochoptimierten Infrastruktur und effizienten Ressourcenmanagement sorgt LeiCraft_MC Hosting dafür, dass
                Server auch bei intensiven Anwendungen zuverlässig und schnell laufen. Ziel ist es, eine erschwingliche Lösung
                zu schaffen, die auch bei hohen Anforderungen eine stabile und schnelle Leistung gewährleistet, ohne Kompromisse
                bei der Qualität einzugehen.
            </ProjectCard>

            <ProjectCard title="NetIgnite" img="/static/logo/netignite-icon.png">
                NetIgnite ist eine leistungsstarke Fernverwaltungsplattform, mit der du
                Geräte im gesamten Netzwerk sicher per Wake-on-LAN, REST-API oder über eine
                PWA-basierte Mobile App ein- und ausschalten kannst. Sie bietet
                Echtzeit-Monitoring, intelligente Automatisierungen und flexible
                Integrationen auch für professionelle Anforderungen.
            </ProjectCard>

            <ProjectCard title="LeiOS" img="/static/logo/logo.png">
                LeiOS ist eine Debian-basierte Linux-Distribution mit Fokus auf Stabilität, Performance und einer außergewöhnlichen Out-of-Box-Experience.
                Aufbauend auf Debians legendärer stabiler Basis bietet es felsenfeste Zuverlässigkeit mit sorgfältig abgestimmten Optimierungen für maximale Leistung.
                Das System kommt vorkonfiguriert mit sinnvollen Standardeinstellungen, essentiellen Entwicklerwerkzeugen wie Git und Build-Essentials sowie einer polierten Desktop-Umgebung.
                Obwohl für Entwickler optimiert, ist LeiOS so konzipiert, dass es für jeden zugänglich ist, der eine zuverlässige Linux-Erfahrung sucht.
                Es ist vollständig Open Source, Community-getrieben und Open Source unter der AGPL-3.0-Lizenz.
            </ProjectCard>

        </div>
    </section>
</template>
