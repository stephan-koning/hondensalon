import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "TrimFindr.nl",
    logo: "",
    iconLogo: "fluent-emoji-flat:scissors",
  },

  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "🐕 TrimFindr.nl  || Jouw Gids voor de Beste Trimsalons",
    description: "",
    url: "",
    favicon: {
      image: "",
      emoji: "🐕",
    },
  },

  directory: {
    search: {
      placeholder: "Search among {0} tools",
      icon: "i-material-symbols-search-rounded",
      tags: {
        // options: none,select,show-all,
        display: "none",
        intersection: true,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Hier is nog niks ",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Zit Je trimsalon er nog niet tussen? ",
        description:
          "Maak nu een profiel aan en krijg nog meer bezokers",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "i-material-symbols-stars-outline",
      labelForCard: "Claimed ✨",
    },
    tags: [{
      name: "Hondentrimsalon",
      color: "blue",
    }, {
      name: "andere huisdieren",
      color: "green",
    }, {
      name: "Assen",
    }],
    tagPages: {
      title: "Available {0} trimsalons:",
      description:
        "View all available trimsalons  en winkels  {0} category...",
    },
  },

  header: {
    banner: {
      show: true,
      text: "Deel je passie voor honden met onze community.",
      link: "",
      brandText: "Word Gastschrijver!",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        { name: "Blog", to: "/blog" },
        { name: "Advertise", to: "/advertise" },
        {
          name: "Analytics",
          to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
          target: "_blank",
        },
      ],
    },
    actionButton: {
      text: "Voeg je trimsalon toe",
      href: "/submit",
    },
  },

  footer: {
    description: "Wellicht de enige directory voor trimsalons op het internet",
    socials: {
      github: {
        link: "",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/mark_bruderer",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@mark_hacks",
        icon: "tabler:brand-youtube",
      },
    },
  },

  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },

  icon: {
    size: "",
  },
});
