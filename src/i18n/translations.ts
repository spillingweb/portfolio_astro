export type Lang = "en" | "es" | "no";

interface Section {
  label: string;
  heading: string;
}

export interface Translations {
  role: string;
  available: string;
  nav: {
    work: string;
    about: string;
    skills: string;
    contact: string;
  };
  work: Section;
  about: Section & {
    photoAlt: string;
    cta?: string;
  };
  skills: Section;
  contact: Section & {
    body: string;
    availability: string;
    cta: string;
  };
  footer: string;
}

export const T: Record<Lang, Translations> = {
  en: {
    role: "Full-stack Developer",
    available: "Open to projects",
    nav: { work: "Work", about: "About", skills: "Skills", contact: "Contact" },
    work: {
      label: "Selected Work",
      heading: "Recent Projects",
    },
    about: {
      label: "About",
      photoAlt: "Profile photo",
      heading: "Who I am",
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
    footer: "Crafted with Astro & React.",
  },
  es: {
    role: "Desarrolladora Full-stack",
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
    },
    about: {
      label: "Sobre mí",
      photoAlt: "Foto de perfil",
      heading: "Quién soy",
      cta: "Trabajemos juntos",
    },
    skills: {
      label: "Habilidades y herramientas",
      heading: "El Stack",
    },
    contact: {
      label: "Hablemos",
      heading: "¿Tienes un\nproyecto?",
      body: "Cuéntame qué estás construyendo — me encantaría ayudarte.",
      availability: "Abierto a nuevos proyectos",
      cta: "Enviar un mensaje",
    },
    footer: "Creado con Astro y React.",
  },
  no: {
    role: "Full-stack utvikler",
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
    },
    about: {
      label: "Om meg",
      photoAlt: "Profilbilde",
      heading: "Hvem jeg er",
    },
    skills: {
      label: "Ferdigheter og verktøy",
      heading: "Teknologi-stacken",
    },
    contact: {
      label: "La oss snakke",
      heading: "Har du et\nprosjekt?",
      body: "Fortell meg hva du bygger — jeg hjelper gjerne.",
      availability: "Åpen for nye prosjekter",
      cta: "Send en melding",
    },
    footer: "Laget med Astro og React.",
  },
} as const;
