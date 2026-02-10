window.PORTFOLIO_V3 = {
  site: {
    name: "Votre Nom",
    roles: ["Direction artistique", "Design", "Édition", "Digital"],
    email: "mail@exemple.com",
    about: "Texte de présentation court (bio)."
  },

  // Utilisé par la page "À propos" (CUSTOM_PAGES lit sections[id='about'])
  sections: [
    {
      id: "about",
      label: "About",
      type: "page",
      content: {
        title: "À propos",
        meta: "",
        html: `
          <div class="about">
            <div class="muted">
              Remplace ce texte par ta présentation longue / démarche / bio.
            </div>
          </div>
        `
      }
    }
  ],

  projects: {
    // --- Stratégie & impact ---
    "S’exposer": {
      title: "S’exposer",
      meta: "",
      description: "Comment recréer des liens solides entre les fans et les reconnecter au monde réel ? C'est la question à laquelle nous avons essayer de répondre.",
      images: [],
      cta: {
                label: "En savoir plus",
                href: "https://www.canva.com/design/DAHAfP8VPU8/Gvn9IX475UdR3kV0i19IxQ/view?utm_content=DAHAfP8VPU8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h900cdb8bb7",
              },
      hidden: false
    },
    "La Ruche": {
      title: "La Ruche",
      meta: "",
      description: "",
      images: ["assets/images/vitality/vitality-01.jpg", "assets/images/vitality/vitality-02.jpg"],
      cta: null,
      hidden: false
    },

    // --- Branding ---
    "Polygone": {
      title: "Polygone",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Hazymetry": {
      title: "Hazymetry",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Holynyphea": {
      title: "Holynyphea",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Breakin Nailz": {
      title: "Breakin Nailz",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Nandor": {
      title: "Nandor",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // --- Communication ---
    "Summer et Zima": {
      title: "Summer et Zima",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "JPO": {
      title: "JPO",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Encore": {
      title: "Encore",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Nandor j’adore saison 2": {
      title: "Nandor j’adore saison 2",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Etheral": {
      title: "Etheral",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // --- Digital & expérience interactives ---
    "11:11": {
      title: "11:11",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Anome": {
      title: "Anome",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Morph": {
      title: "Morph",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Antipathie": {
      title: "Antipathie",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Commandes 3D": {
      title: "Commandes 3D",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // --- Recherches & édition ---
    "pulsar": {
      title: "pulsar",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Sexposer": {
      title: "Sexposer",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Pornwashing": {
      title: "Pornwashing",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Le plein écran peut il remplacer le plein air ?": {
      title: "Le plein écran peut il remplacer le plein air ?",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // --- Évènements & médiation ---
    "Longueur d’onde": {
      title: "Longueur d’onde",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Salon du chocolat": {
      title: "Salon du chocolat",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "La collectiv’": {
      title: "La collectiv’",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Mission Matilda": {
      title: "Mission Matilda",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Poster goûter": {
      title: "Poster goûter",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // --- Expérimentations ---
    "Couleurs et matières": {
      title: "Couleurs et matières",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Textuellement transmissibles": {
      title: "Textuellement transmissibles",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
    "Encre thermo sensibles": {
      title: "Encre thermo sensibles",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },

    // ------------------------------------------------------------------
    // BONUS : cibles d'alias (si tu as déjà des dossiers/images existants)
    // Ton script.js mappe : Hazymetry -> Hazymmetry, Etheral -> Ethereal,
    // pulsar -> Pulsar, Sexposer -> Diplôme, Polygone -> Branding
    // ------------------------------------------------------------------

    "Hazymmetry": {
      title: "Hazymmetry",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: true
    },
    "Ethereal": {
      title: "Ethereal",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: true
    },
    "Pulsar": {
      title: "Pulsar",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: true
    },
    "Diplôme": {
      title: "Diplôme",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: true
    },
    "Branding": {
      title: "Branding",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: true
    }
  }
};
