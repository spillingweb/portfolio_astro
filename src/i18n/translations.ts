export type Lang = "en" | "es" | "no";

export const T = {
  en: {
    role: "React Developer",
    available: "Open to projects",
    nav: { work: "Work", about: "About", skills: "Skills", contact: "Contact" },
    work: {
      label: "Selected Work",
      heading: "Recent Projects",
      github: "GitHub",
    },
    about: {
      label: "About",
      photoAlt: "Profile photo",
      p1: "I run Spilling Web — a studio focused on building high-quality web applications for startups and growing products. I care about the craft as much as the code.",
      p2: "My work lives at the crossroads of engineering and design. Performance, accessibility, and the small details that make users trust a product are not afterthoughts here — they're the job.",
      p3: "TypeScript by default. Tests throughout. Shipped on time.",
      cta: "Work with me",
    },
    skills: {
      label: "Skills & Tools",
      heading: "The Stack",
    },
    contact: {
      label: "Let's Talk",
      heading: "Got a\nproject?",
      body: "Tell me what you're building — I'd love to help.",
      availability: "Open to new projects",
      cta: "Send a message",
    },
    footer: "Crafted with React & TypeScript.",
    projects: [
      {
        description:
          "Real-time data viz platform for renewable energy startups. Monitors power output across 47 solar installations with sub-100ms refresh rates.",
      },
      {
        description:
          "Community forum platform built for niche creator communities. Threaded discussions, real-time notifications, and a moderation dashboard.",
      },
      {
        description:
          "Interactive city nightlife map for Oslo. Users pin venues, share reviews, and discover events happening within the next 48 hours.",
      },
      {
        description:
          "Podcast discovery app with visual waveform previews. Built a custom GraphQL layer over three separate podcast directory APIs.",
      },
    ],
  },
  es: {
    role: "Desarrollador React",
    available: "Disponible para proyectos",
    nav: {
      work: "Proyectos",
      about: "Sobre mí",
      skills: "Habilidades",
      contact: "Contacto",
    },
    work: {
      label: "Trabajo selecto",
      heading: "Proyectos recientes",
      github: "GitHub",
    },
    about: {
      label: "Sobre mí",
      photoAlt: "Foto de perfil",
      p1: "Dirijo Spilling Web — un estudio enfocado en desarrollar aplicaciones web de alta calidad para startups y productos en crecimiento. Me importa tanto el oficio como el código.",
      p2: "Mi trabajo vive en la intersección de la ingeniería y el diseño. El rendimiento, la accesibilidad y los pequeños detalles que hacen que los usuarios confíen en un producto no son reflexiones tardías — son el trabajo.",
      p3: "TypeScript por defecto. Tests incluidos. Entregado a tiempo.",
      cta: "Trabajemos juntos",
    },
    skills: {
      label: "Habilidades y herramientas",
      heading: "El Stack",
      services: [
        {
          title: "Desarrollo Frontend",
          desc: "React, Next.js, TanStack. Arquitectura de componentes, gestión de estado, optimización de rendimiento y accesibilidad — construido para durar.",
        },
        {
          title: "Desarrollo Full-Stack",
          desc: "Node.js, GraphQL, PostgreSQL, Supabase. Diseño de APIs, sistemas de autenticación, modelado de bases de datos y pipelines de despliegue.",
        },
        {
          title: "Implementación UI / UX",
          desc: "De Figma a producción con precisión píxel. Animaciones, diseño responsive, mapas interactivos con Leaflet y sistemas de diseño.",
        },
      ],
    },
    contact: {
      label: "Hablemos",
      heading: "¿Tienes un\nproyecto?",
      body: "Cuéntame qué estás construyendo — me encantaría ayudarte.",
      availability: "Abierto a nuevos proyectos",
      cta: "Enviar un mensaje",
    },
    footer: "Creado con React y TypeScript.",
    projects: [
      {
        description:
          "Plataforma de visualización en tiempo real para startups de energía renovable. Monitorea la producción de 47 instalaciones solares con actualizaciones de menos de 100ms.",
      },
      {
        description:
          "Plataforma de foros comunitarios para comunidades de creadores de nicho. Discusiones en hilo, notificaciones en tiempo real y panel de moderación.",
      },
      {
        description:
          "Mapa interactivo de vida nocturna para Oslo. Los usuarios marcan locales, comparten reseñas y descubren eventos en las próximas 48 horas.",
      },
      {
        description:
          "Aplicación de descubrimiento de podcasts con vistas previas visuales de forma de onda. Capa GraphQL personalizada sobre tres APIs de directorios de podcasts.",
      },
    ],
  },
  no: {
    role: "React-utvikler",
    available: "Åpen for prosjekter",
    nav: {
      work: "Arbeid",
      about: "Om meg",
      skills: "Ferdigheter",
      contact: "Kontakt",
    },
    work: {
      label: "Utvalgte prosjekter",
      heading: "Nylige prosjekter",
      github: "GitHub",
    },
    about: {
      label: "Om meg",
      photoAlt: "Profilbilde",
      p1: "Jeg driver Spilling Web — et studio fokusert på å bygge høykvalitets webapplikasjoner for startups og voksende produkter. Jeg bryr meg om håndverket like mye som koden.",
      p2: "Arbeidet mitt lever i skjæringspunktet mellom ingeniørfag og design. Ytelse, universell utforming og de små detaljene som får brukere til å stole på et produkt er ikke ettertanker her — det er selve jobben.",
      p3: "TypeScript som standard. Tester gjennom hele. Levert i tide.",
      cta: "Jobb med meg",
    },
    skills: {
      label: "Ferdigheter og verktøy",
      heading: "Teknologi-stacken",
      services: [
        {
          title: "Frontend-utvikling",
          desc: "React, Next.js, TanStack. Komponentarkitektur, tilstandshåndtering, ytelsesoptimalisering og universell utforming — bygget for å vare.",
        },
        {
          title: "Full-Stack-utvikling",
          desc: "Node.js, GraphQL, PostgreSQL, Supabase. API-design, autentiseringssystemer, databasemodellering og utrullingspipelines.",
        },
        {
          title: "UI / UX-implementering",
          desc: "Pikselpresis fra Figma til produksjon. Animasjoner, responsivt design, interaktive kart med Leaflet og designsystemer.",
        },
      ],
    },
    contact: {
      label: "La oss snakke",
      heading: "Har du et\nprosjekt?",
      body: "Fortell meg hva du bygger — jeg hjelper gjerne.",
      availability: "Åpen for nye prosjekter",
      cta: "Send en melding",
    },
    footer: "Laget med React og TypeScript.",
    projects: [
      {
        description:
          "Sanntids datavisualiseringsplattform for startups innen fornybar energi. Overvåker kraftproduksjon på tvers av 47 solinstallasjoner med oppdateringer under 100ms.",
      },
      {
        description:
          "Fellesskapsforumplattform bygget for nisjefellesskap. Trådede diskusjoner, sanntidsvarslinger og et moderasjonsdashboard.",
      },
      {
        description:
          "Interaktivt kart over utelivet i Oslo. Brukere merker steder, deler anmeldelser og oppdager arrangementer de neste 48 timene.",
      },
      {
        description:
          "Podkastoppdagelsesapp med visuelle bølgeformsforhåndsvisninger. Bygget et tilpasset GraphQL-lag over tre separate podkastkataloger.",
      },
    ],
  },
} as const;
