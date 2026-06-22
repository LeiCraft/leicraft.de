export interface ProjectLink {
    label: string;
    url: string;
    icon?: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    logo: string;
    tags: string[];
    status?: string;
    sourceUrl: string;
    websiteUrl?: string;
    additionalLinks?: ProjectLink[];
}

export const projects: Project[] = [
    {
        id: "advena",
        title: "ADVENA",
        shortDescription:
            "Eine dezentrale, energieeffiziente Proof-of-Stake-Blockchain mit eigener Smart-Contract-Sprache.",
        description:
            "ADVENA ist ein Blockchain-Projekt, das dezentrale, schnelle und sichere Transaktionen zum Ziel hat. Es setzt auf einen energieeffizienten Proof-of-Stake-Konsens, eine skalierbare Architektur und optimierte Datenkompression, um langfristig leistungsfähig zu bleiben. Ursprünglich als LeiCoin gestartet, ist ADVENA heute die Weiterentwicklung dieser Idee — inklusive der Programmiersprache Allide, die gezielt für Smart Contracts auf der ADVENA-Chain entwickelt wird.",
        logo: "/static/logo/leicoin-logo.png",
        tags: ["Blockchain", "Proof-of-Stake", "TypeScript", "Rust", "AGPL-3.0"],
        status: "In Entwicklung",
        sourceUrl: "https://github.com/ADVENA-project",
        websiteUrl: "https://www.advena.dev",
        additionalLinks: [
            { label: "LeiCoin-Node", url: "https://github.com/ADVENA-project/LeiCoin-Node" },
            { label: "Protokoll-Spezifikation", url: "https://github.com/ADVENA-project/Protocol-Specs" },
            { label: "Allide", url: "https://github.com/ADVENA-project/Allide" },
        ],
    },
    {
        id: "netignite",
        title: "NetIgnite",
        shortDescription:
            "Plattform zur Fernverwaltung von Geräten über Wake-on-LAN, REST-API und eine PWA-App.",
        description:
            "NetIgnite ist eine Fernverwaltungsplattform für Geräte im eigenen Netzwerk. Sie ermöglicht es, Rechner sicher per Wake-on-LAN einzuschalten, den Status in Echtzeit zu überwachen und Abläufe zu automatisieren. Ein zugehöriger Server kommuniziert über Wireguard, ein ESP32-basierter Agent erweitert das System um physische Endpunkte, und eine Progressive-Web-App sorgt dafür, dass die Steuerung auch vom Smartphone aus funktioniert.",
        logo: "/static/logo/netignite-icon.png",
        tags: ["Remote-Management", "Wake-on-LAN", "PWA", "ESP32", "TypeScript", "AGPL-3.0"],
        status: "Live",
        sourceUrl: "https://github.com/NetIgnite-project",
        websiteUrl: "https://www.netignite.dev",
        additionalLinks: [
            { label: "Server", url: "https://github.com/NetIgnite-project/Server" },
            { label: "Agent (ESP32)", url: "https://github.com/NetIgnite-project/Agent-ESP32" },
        ],
    },
    {
        id: "leios",
        title: "LeiOS",
        shortDescription:
            "Debian-basierte Linux-Distribution mit Fokus auf Stabilität, Performance und Entwicklerfreundlichkeit.",
        description:
            "LeiOS ist eine auf Debian aufbauende Linux-Distribution, die Stabilität, Performance und eine gute Out-of-the-Box-Erfahrung vereinen will. Sie kommt mit sinnvollen Voreinstellungen, essenziellen Entwicklerwerkzeugen wie Git und Build-Essentials sowie einer aufgeräumten Desktop-Umgebung daher. Obwohl für Entwickler optimiert, ist LeiOS als alltagstaugliches System konzipiert und wird als Open-Source-Projekt unter der AGPL-3.0 weiterentwickelt.",
        logo: "/static/logo/logo.png",
        tags: ["Linux", "Debian", "Open Source", "AGPL-3.0"],
        status: "In Entwicklung",
        sourceUrl: "https://github.com/LeiOS-project",
        websiteUrl: "https://www.leios.dev",
        additionalLinks: [
            { label: "Live-Images", url: "https://github.com/LeiOS-project/live-images" },
            { label: "API-Server", url: "https://github.com/LeiOS-project/API-Server" },
        ],
    },
    {
        id: "delivr",
        title: "Delivr",
        shortDescription:
            "Moderner WebMail-Client in Nuxt mit API — entwickelt, um E-Mail tatsächlich wieder benutzbar zu machen.",
        description:
            "Delivr ist ein moderner WebMail-Client, der auf Nuxt und einer separaten TypeScript-API basiert. Das Projekt versteht sich als Alternative zu überladenen und aufdringlichen E-Mail-Oberflächen: schnell, schlank und selbsthostbar. Die Arbeit am Frontend und Backend läuft parallel, beide Teile sind öffentlich unter der AGPL-3.0 lizenziert.",
        logo: "/static/logo/delivr-icon.png",
        tags: ["WebMail", "Nuxt", "Vue.js", "TypeScript", "AGPL-3.0"],
        status: "In Entwicklung",
        sourceUrl: "https://github.com/Delivr-Project",
        additionalLinks: [
            { label: "Frontend (Web)", url: "https://github.com/Delivr-Project/Delivr-Web" },
            { label: "Backend (API)", url: "https://github.com/Delivr-Project/Delivr-API" },
        ],
    },
    {
        id: "nowip",
        title: "NowIP",
        shortDescription:
            "Open-Source-DDNS-Service mit moderner Oberfläche für dynamische IP-Adressen.",
        description:
            "NowIP ist ein selbsthostbarer Dynamic-DNS-Service, der Domainnamen auch bei wechselnder IP-Adresse aktuell hält. Das Projekt besteht aus einer API und einer dazugehörigen App/Oberfläche. Ziel ist eine einfache, moderne Alternative zu kommerziellen DDNS-Anbietern, bei der Nutzer die volle Kontrolle über ihre Daten behalten.",
        logo: "/static/logo/nowip-icon.png",
        tags: ["DDNS", "Self-Hosting", "TypeScript", "AGPL-3.0"],
        status: "In Entwicklung",
        sourceUrl: "https://github.com/NowIP",
        additionalLinks: [
            { label: "App", url: "https://git.leicraftmc.de/NowIP/app" },
            { label: "API", url: "https://git.leicraftmc.de/NowIP/API" },
        ],
    },
    {
        id: "leicraft-mc-hosting",
        title: "LeiCraft_MC Hosting",
        shortDescription:
            "Kostengünstiges Hosting-Angebot mit optimierter Infrastruktur für hohe Performance.",
        description:
            "LeiCraft_MC Hosting ist ein eigenes Hosting-Angebot, das Performance und Preis-Leistung vereinen soll. Durch eine optimierte Infrastruktur und effizientes Ressourcenmanagement laufen Server auch unter Last stabil und schnell. Der Fokus liegt darauf, eine erschwingliche Lösung anzubieten, die auch bei hohen Anforderungen keine Kompromisse bei Zuverlässigkeit und Geschwindigkeit eingeht.",
        logo: "/static/logo/logo.png",
        tags: ["Hosting", "Infrastruktur", "Performance"],
        status: "Aktiv",
        sourceUrl: "https://hosting.leicraftmc.de",
    },
    {
        id: "schwere-zeit",
        title: "Schwere-Zeit.de",
        shortDescription:
            "Emotionale Unterstützung und ein offenes Ohr für Menschen in schweren Zeiten.",
        description:
            "Schwere-Zeit.de ist eine Anlaufstelle für Menschen in emotionaler Krise oder schweren Zeiten. Dahinter steht ein Team, das aus eigenen Erfahrungen mit mentalen Herausforderungen heraus hilft und Betroffene ernst nimmt. Die Seite bietet eine niedrigschwellige Möglichkeit, Kontakt aufzunehmen ('Sprich mit uns'), sowie eine Übersicht weiterer Anlaufstellen. Wichtig ist: Schwere-Zeit ersetzt keine Ärzte, Therapeuten oder psychologische Behandlungen, sondern ist ein erstes, verständnisvolles Zuhör-Angebot und vermittelt bei Bedarf an professionelle Hilfe weiter.",
        logo: "/static/logo/schwere-zeit-icon.png",
        tags: ["Nuxt", "Vue.js", "TypeScript", "Tailwind CSS"],
        status: "Live",
        sourceUrl: "https://git.leicraftmc.de/schwere-zeit-de/website",
        websiteUrl: "https://www.schwere-zeit.de",
        additionalLinks: [
            { label: "API-Server", url: "https://git.leicraftmc.de/schwere-zeit-de/API-Server" },
            { label: "Mitgliederportal", url: "https://git.leicraftmc.de/schwere-zeit-de/mitgliederportal" },
            { label: "Legal", url: "https://git.leicraftmc.de/schwere-zeit-de/legal" },
        ],
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
    return projects.map((project) => project.id);
}
