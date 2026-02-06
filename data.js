// data.js
// Chaque projet (les lignes "→ ...") a maintenant son propre contenu complet.
// Images: mets-les dans /assets/images/ (ou ailleurs si tu veux)

window.PORTFOLIO_DATA = {
  site: {
    name: "RACHEL TRUCHOT",
    roles: ["GRAPHIC & DIGITAL DESIGNER", "COMMUNICATION STRATEGIST", "BASED IN PARIS"],

    emailText: "r@truchot.ch",
    emailHref: "mailto:r@truchot.ch",

    phoneText: "+33 6 51 88 01 25",
    phoneHref: "tel:+33612345678",

    instagramText: "@rachel.truchot",
    instagramHref: "https://instagram.com/rachel.truchot",

    about:
      "Hi ! I'm Rachel, a hybrid digital designer and strategist.",

    heroImages: Array.from({ length: 10 }, (_, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `assets/images/hero-${n}.jpg`;
    }),
  },

  sections: {
    education: {
      title: "EDUCATION",
      items: [
        {
          id: "edu-sciencespo",
          label: "Sciences Po, Paris",
          sublines: [
            "Master Communication, médias et industries créatives (2025–2027)",
            "→ Vitality",
            "→ Pornwashing",
          ],
          metaRight: "2025–2027",

          // ✅ Chaque projet est entièrement personnalisable ici
          projects: {
            Vitality: {
              title: "Vitality",
              meta: "Sciences Po — 2025–2027",
              description:
                "Comment recréer des liens solides entre les fans et les reconnecter au monde réel ? C'est la question à laquelle nous avons essayer de répondre.",
              images: {
                big: "assets/images/vitality/vitality-01.jpg",
                wide: "assets/images/vitality/vitality-02.jpg",
              },
    
              // optionnel
              cta: {
                label: "En savoir plus",
                href: "https://www.canva.com/design/DAHAfP8VPU8/Gvn9IX475UdR3kV0i19IxQ/view?utm_content=DAHAfP8VPU8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h900cdb8bb7",
              },
            },

            Pornwashing: {
              title: "Pornwashing",
              meta: "Sciences Po — 2025–2027",
              description:
                "Étude de cas sousla forme d'un site internet, analyse de la campagne dirtiest porn ever de Pornhub.",
              images: {
                big: "assets/images/pornwashing/pornwashing-01.jpg",
                wide: "assets/images/pornwashing/pornwashing-02.jpg",
              },
              // ✅ bouton
              cta: {
                label: "Consulter ici",
                href: "pornwashing/index.html",
              },
            },

          },

          // (Optionnel) si tu veux un fallback quand on clique ailleurs
          detailFallback: {
            title: "Sciences Po, Paris",
            meta: "Master — 2025–2027",
            description:
              "Description générale du programme (fallback si besoin).",
            bullets: [],
            images: {
              big: "assets/images/edu-01.jpg",
              wide: "assets/images/edu-02.jpg",
            },
            cta: null,
          },
        },

        {
          id: "edu-esienne",
          label: "Estienne ESAIG, Paris",
          sublines: [
            "DSAA Design de création numérique (2025–2027)",
            "→ Diplôme",
            "→ Pulsar",
            "→ Planétarium",
            "→ Mission Matilda",
            "→ Anome",
            "→ Poster-gouter",
            "→ Antipathie",
            "→ Plein écran / air"
          ],
          metaRight: "2025–2027",
        
          projects: {
            Diplôme: {
              title: "11:11 - Projet de diplôme",
              meta: "Estienne — 2025–2027",
              description: "11:11 est une exposition qui montre le shifting.",
              images: {
                big: "assets/images/diplome/diplome-01.jpeg",
                wide: "assets/images/diplome-02.jpeg",
              },
              cta: {
                label: "En savoir plus",
                href: "??",
              },
            },
        
            Pulsar: {
              title: "Pulsar : master thesis",
              meta: "Estienne — 2025–2027",
              description: "Pulsar : plongée en sonocène digicore",
              bullets: ["Axe 1", "Axe 2"],
              images: {
                big: "assets/images/pulsar/thesis-01.jpg",
                wide: "assets/images/pulsar/thesis-02.jpg",
              },
              cta: {
                label: "Lire ici",
                href: "assets/pulsar_web_compressed.pdf",
              },
            },
        
            Planétarium: {
              hidden: true,   // ← projet non prêt
              title: "Planétarium",
              meta: "Estienne — 2025–2027",
              description: "Projection au planétarium de Paris et de Berlin. All made on Touch Designer",
              images: {
                big: "assets/images/plane/planatorium-01.jpg",
                wide: "assets/images/plane/planatorium-02.jpg",
              },
              cta: {
                label: "Watch here",
                href: "??",
              },
            },
        
            "Mission Matilda": {
              hidden: true,   // ← projet non prêt
              title: "Mission Matilda",
              meta: "Estienne — 2025–2027",
              description: "Décris Mission Matilda ici.",
              images: {
                big: "assets/images/matilda/matilda-01.jpg",
                wide: "assets/images/matilda/matilda-02.jpg",
              },
              cta: null,
            },
        
            Anome: {
              hidden: true,   // ← projet non prêt
              title: "Anome",
              meta: "Estienne — 2025–2027",
              description: "Décris Anome ici.",
              images: {
                big: "assets/images/anome/anome-01.jpg",
                wide: "assets/images/anome/anome-02.jpg",
              },
              cta: null,
            },
        
            "Poster-gouter": {
              hidden: true,   // ← projet non prêt
              title: "Poster-gouter",
              meta: "Estienne — 2025–2027",
              description: "Décris Poster-gouter ici.",
              images: {
                big: "assets/images/poster-gouter/poster-gouter-01.jpg",
                wide: "assets/images/poster-gouter/poster-gouter-02.jpg",
              },
              cta: null,
            },
        
            Antipathie: {
              hidden: true,   // ← projet non prêt
              title: "Antipathie",
              meta: "Estienne — 2025–2027",
              description: "Décris Antipathie ici.",
              images: {
                big: "assets/images/antipathie/antipathie-01.jpg",
                wide: "assets/images/antipathie/antipathie-02.jpg",
              },
              cta: null,
            },
        
            "Plein écran / air": {
              hidden: true,   // ← projet non prêt
              title: "Plein écran / air",
              meta: "Estienne — 2025–2027",
              description: "Décris Plein écran / air ici.",
              images: {
                big: "assets/images/plein-ecran/plein-ecran-01.jpg",
                wide: "assets/images/plein-ecran/plein-ecran-02.jpg",
              },
              cta: null,
            },
          },
        
          detailFallback: {
            title: "Estienne ESAIG",
            meta: "DSAA — 2025–2027",
            description: "Description générale Estienne (fallback si besoin).",
            bullets: [],
            images: {
              big: "assets/images/edu-03.jpg",
              wide: "assets/images/edu-04.jpg",
            },
            cta: null,
          },
        },
        

        {
          id: "edu-esienne",
          label: "Estienne ESAIG, Paris",
          sublines: [
            "DN MADE Graphisme (2025–2027)",
            "→ Sexposer",
            "→ Pulsar",
            "→ Planétarium",
          ],
          metaRight: "2025–2027",

          projects: {
            Diplôme: {
              hidden: true,   // ← projet non prêt
              title: "Sexposer",
              meta: "Estienne — 2025–2027",
              description:
                "11:11 est une exposition qui montre le shifting.",
              images: {
                big: "assets/images/diplome/diplome-01.jpeg",
                wide: "assets/images/diplome-02.jpeg",
              },
              cta: {
                label: "en savoir plus",
                href: "??",
              },
            },

            Pulsar: {
              hidden: true,   // ← projet non prêt
              title: "Pulsar : master thesis",
              meta: "Estienne — 2025–2027",
              description:
                "Pulsar : plongé en soonocène digicore",
              bullets: ["Axe 1", "Axe 2"],
              images: {
                big: "assets/images/pulsar/thesis-01.jpg",
                wide: "assets/images/pulsar/thesis-02.jpg",
              },
              cta: {
                label: "Lire ici",
                href: "assets/pulsar_web.pdf",
              },
            },

            Planétarium: {
              hidden: true,   // ← projet non prêt
              title: "Planétarium",
              meta: "Estienne — 2025–2027",
              description:
                "Projection au planétarium de Paris et de Berlin. All made on Touch Designer",
              images: {
                big: "assets/images/plane/planatorium-01.jpg",
                wide: "assets/images/plane/planatorium-02.jpg",
              },
              cta: {
                label: "Watch here",
                href: "??",
              },
            },
          },

          detailFallback: {
            title: "Estienne ESAIG",
            meta: "DSAA — 2025–2027",
            description:
              "Description générale Estienne (fallback si besoin).",
            bullets: [],
            images: {
              big: "assets/images/edu-03.jpg",
              wide: "assets/images/edu-04.jpg",
            },
            cta: null,
          },
        },
        
 {
          id: "edu-esienne",
          label: "Fransisco de Vitoria, Madrid",
          sublines: [
            "Semestre d'échange, 2022",
            "→ Diplôme",
            "→ Pulsar",
            "→ Planétarium",
          ],
          metaRight: "2025–2027",

          detailFallback: {
            title: "Fransisco de Vitoria, Madrid",
            meta: "DSAA — 2025–2027",
            description:
              "Description générale Estienne (fallback si besoin).",
            bullets: [],
            images: {
              big: "assets/images/edu-03.jpg",
              wide: "assets/images/edu-04.jpg",
            },
            cta: null,
          },
        },

        {
          id: "edu-claude.monet",
          label: "Claude Monet, Paris",
          sublines: [
            "Baccalauréat ES (2020), mention très bien.",,
          ],
          metaRight: "2025–2027",

          detailFallback: {
            title: "Estienne ESAIG",
            meta: "DSAA — 2025–2027",
            description:
              "Description générale Estienne (fallback si besoin).",
            bullets: [],
            images: {
              big: "assets/images/edu-03.jpg",
              wide: "assets/images/edu-04.jpg",
            },
            cta: null,
          },
        },
      ],
    },

    experiences: {
      title: "EXPÉRIENCES",
      items: [
        {
          id: "exp-reve",
          label: "Studio Rëva",
          sublines: ["Description", "→ Naming", "→ Rebranding", "→ Modulo Home"],
          metaRight: "Studio",

          projects: {
            Naming: {
              hidden: true,   // ← projet non prêt
              title: "Naming",
              meta: "Rëva — Studio",
              description: "Texte Naming : mission, process, etc.",
              bullets: ["Option 1", "Option 2"],
              images: {
                big: "assets/images/naming-01.jpg",
                wide: "assets/images/naming-02.jpg",
              },
              cta: null,
            },
            Rebranding: {
              hidden: true,   // ← projet non prêt
              title: "Rebranding",
              meta: "Rëva — Studio",
              description: "Texte Rebranding : système graphique, etc.",
              bullets: ["Logo", "Système", "Guidelines"],
              images: {
                big: "assets/images/rebranding-01.jpg",
                wide: "assets/images/rebranding-02.jpg",
              },
              cta: null,
            },
            "Modulo Home": {
              hidden: true,   // ← projet non prêt
              title: "Modulo Home",
              meta: "Rëva — Studio",
              description: "Texte Modulo Home : contexte, rôle, etc.",
              bullets: ["Asset 1", "Asset 2"],
              images: {
                big: "assets/images/modulo-01.jpg",
                wide: "assets/images/modulo-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            hidden: true,   // ← projet non prêt
            title: "Rëva",
            meta: "Brand / Design",
            description: "Description générale de l’expérience (fallback).",
            bullets: [],
            images: {
              big: "assets/images/exp-01.jpg",
              wide: "assets/images/exp-02.jpg",
            },
            cta: null,
          },
        },

        {
          id: "exp-steves&co",
          label: "Steves&co",
          sublines: ["Description", "→ Longueur d’ondes", "→ Branding"],
          metaRight: "Agence",

          projects: {
            "Longueur d’ondes": {
              hidden: true,   // ← projet non prêt
              title: "Longueur d’ondes",
              meta: "Polygone — Agence",
              description: "Texte projet Longueur d’ondes.",
              bullets: ["Point 1", "Point 2"],
              images: {
                big: "assets/images/ondes-01.jpg",
                wide: "assets/images/ondes-02.jpg",
              },
              cta: null,
            },
            Branding: {
              hidden: true,   // ← projet non prêt
              title: "Branding",
              meta: "Polygone — Agence",
              description: "Texte Branding : concept, direction artistique, etc.",
              bullets: ["Système", "Assets", "Déclinaisons"],
              images: {
                big: "assets/images/branding-01.jpg",
                wide: "assets/images/branding-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            title: "Steves&co",
            meta: "Identité / Campagne",
            description: "Description générale Polygone (fallback).",
            bullets: [],
            images: {
              big: "assets/images/exp-03.jpg",
              wide: "assets/images/exp-04.jpg",
            },
            cta: null,
          },
        },

        {
          id: "exp-australie.gad",
          label: "Australie.GAD",
          sublines: ["Description", "→ Longueur d’ondes", "→ Branding"],
          metaRight: "Agence",

          detailFallback: {
            title: "Australie.GAD",
            meta: "Identité / Campagne",
            description: "Description générale Polygone (fallback).",
            bullets: [],
            images: {
              big: "assets/images/exp-03.jpg",
              wide: "assets/images/exp-04.jpg",
            },
            cta: null,
          },
        },

        {
          id: "exp-polygone",
          label: "Polygone",
          sublines: ["Description", "→ Longueur d’ondes", "→ Branding"],
          metaRight: "Agence",

          projects: {
            "Longueur d’ondes": {
              hidden: true,   // ← projet non prêt
              title: "Longueur d’ondes",
              meta: "Polygone — Agence",
              description: "Texte projet Longueur d’ondes.",
              bullets: ["Point 1", "Point 2"],
              images: {
                big: "assets/images/ondes-01.jpg",
                wide: "assets/images/ondes-02.jpg",
              },
              cta: null,
            },
            Branding: {
              hidden: true,   // ← projet non prêt
              title: "Branding",
              meta: "Polygone — Agence",
              description: "Texte Branding : concept, direction artistique, etc.",
              bullets: ["Système", "Assets", "Déclinaisons"],
              images: {
                big: "assets/images/branding-01.jpg",
                wide: "assets/images/branding-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            title: "Polygone",
            meta: "Identité / Campagne",
            description: "Description générale Polygone (fallback).",
            bullets: [],
            images: {
              big: "assets/images/exp-03.jpg",
              wide: "assets/images/exp-04.jpg",
            },
            cta: null,
          },
        },

        {
          id: "exp-c31",
          label: "Collectif 31",
          sublines: ["Description", "→ 2023", "→ 2024"],
          metaRight: "Agence",

          projects: {
            "2023": {
              hidden: true,   // ← projet non prêt
              title: "2023",
              meta: "Collectif 31",
              description: "Texte projet Longueur d’ondes.",
              bullets: ["Point 1", "Point 2"],
              images: {
                big: "assets/images/ondes-01.jpg",
                wide: "assets/images/ondes-02.jpg",
              },
              cta: null,
            },
            "2024": {
              hidden: true,   // ← projet non prêt
              title: "2024",
              meta: "Collectif 31",
              description: "Texte Branding : concept, direction artistique, etc.",
              bullets: ["Système", "Assets", "Déclinaisons"],
              images: {
                big: "assets/images/branding-01.jpg",
                wide: "assets/images/branding-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            title: "Collectif 31",
            meta: "Identité / Campagne",
            description: "Description générale Polygone (fallback).",
            bullets: [],
            images: {
              big: "assets/images/exp-03.jpg",
              wide: "assets/images/exp-04.jpg",
            },
            cta: null,
          },
        },
      ],
    },

    freelance: {
      title: "FREELANCE",
      items: [
        {
          id: "free-cinema",
          label: "Cinéma",
          sublines: ["→ Summor et Zimo", "→ Anatomie"],
          metaRight: "Freelance",

          projects: {
            "Summor et Zimo": {
              hidden: true,   // ← projet non prêt
              title: "Summor et Zimo",
              meta: "Cinéma — Freelance",
              description: "Texte Summor et Zimo : affiche, générique, etc.",
              bullets: ["Livrable 1", "Livrable 2"],
              images: {
                big: "assets/images/summor-01.jpg",
                wide: "assets/images/summor-02.jpg",
              },
              cta: null,
            },
            Anatomie: {
              hidden: true,   // ← projet non prêt
              title: "Anatomie",
              meta: "Cinéma — Freelance",
              description: "Texte Anatomie : contexte, intention, etc.",
              bullets: ["Livrable 1", "Livrable 2"],
              images: {
                big: "assets/images/anatomie-01.jpg",
                wide: "assets/images/anatomie-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            title: "Cinéma",
            meta: "Freelance",
            description: "Description générale Cinéma (fallback).",
            bullets: [],
            images: {
              big: "assets/images/free-01.jpg",
              wide: "assets/images/free-02.jpg",
            },
            cta: null,
          },
        },

        {
          id: "free-musique",
          label: "Musique",
          sublines: ["→ Hazymmetry", "→ BB Carnage", "→ Soup A2A", "→ Ethereal"],
          metaRight: "Freelance",

          projects: {
            Hazymmetry: {
              hidden: true,   // ← projet non prêt
              title: "Hazymmetry",
              meta: "Musique — Freelance",
              description: "Texte Hazymmetry.",
              bullets: ["Cover", "Assets promo"],
              images: {
                big: "assets/images/hazy-01.jpg",
                wide: "assets/images/hazy-02.jpg",
              },
              cta: null,
            },
            "BB Carnage": {
              hidden: true,   // ← projet non prêt
              title: "BB Carnage",
              meta: "Musique — Freelance",
              description: "Texte BB Carnage.",
              bullets: ["Identité", "Déclinaisons"],
              images: {
                big: "assets/images/bb-01.jpg",
                wide: "assets/images/bb-02.jpg",
              },
              cta: null,
            },
            "jsp": {
              hidden: true,   // ← projet non prêt
              title: "jsp",
              meta: "Musique — Freelance",
              description: "Texte Soup A2A.",
              bullets: ["Artwork", "Campagne"],
              images: {
                big: "assets/images/soup-01.jpg",
                wide: "assets/images/soup-02.jpg",
              },
              cta: null,
            },
            Ethereal: {
              hidden: true,   // ← projet non prêt
              title: "Ethereal",
              meta: "Musique — Freelance",
              description: "Texte Ethereal.",
              bullets: ["Direction artistique", "Assets"],
              images: {
                big: "assets/images/ethereal-01.jpg",
                wide: "assets/images/ethereal-02.jpg",
              },
              cta: null,
            },
          },

          detailFallback: {
            title: "Musique",
            meta: "Visuels / DA",
            description: "Description générale Musique (fallback).",
            bullets: [],
            images: {
              big: "assets/images/free-03.jpg",
              wide: "assets/images/free-04.jpg",
            },
            cta: null,
          },
        },
      ],
    },
  },
};
