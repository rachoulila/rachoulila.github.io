window.PORTFOLIO_V3 = {
  site: {
    name: "RACHEL TRUCHOT",
    roles: ["GRAPHIC & DIGITAL DESIGNER", "COMMUNICATION STRATEGIST", "BASED IN PARIS"],
    email: "r@truchot.ch",
    about: "Hi !"
  },

  // Utilisé par la page "À propos" (CUSTOM_PAGES lit sections[id='about'])
  sections: [
    {
      id: "about",
      label: "About",
      type: "page",
      content: {
        title: "About",
        meta: "",
        html: `
          <div class="about">
            <div class="muted">
              Hi ! I'm Rachel, a graphic & digital designer, and communication strategist, based in Paris.
            </div>
          </div>
        `
      }
    }
  ],

  projects: {
    // --- Stratégie & impact ---
    "Sexposer": {
      title: "Sexposer",
      description: "Conception d’un dispositif de communication destiné aux 15–24 ans pour informer et encourager le dépistage des IST via une nouvelle branche de Santé publique France centrée sur un podcast et une campagne multicanale. <br> Le projet développe une identité visuelle et des campagnes mêlant humour, sensualité implicite et ton rassurant afin de libérer la parole autour de la santé sexuelle sans stigmatiser. <br> Projet issu d’un travail de recherche sur la communication autour des IST auprès des lycéens, nourri par des entretiens avec des professionnels de la santé et de la communication.",
      meta: "Stratégie · Identité visuelle · Campagnes réseaux & print · Conception éditoriale · Photographie",
      images: ["assets/images/sexpo2/clean1.png", "assets/images/sexpo2/clean2.png", "assets/images/sexpo2/mosaique.jpg", "assets/images/sexpo2/Capture d’écran 2025-06-26 à 22.57.19.png"],
      cta: null,
      hidden: false
    },
    "La Ruche": {
      title: "La Ruche",
      description: "Comment recréer des liens solides entre les fans et les reconnecter au monde réel ? <br> Concept d’écosystème communautaire imaginé pour Vitality afin de reconnecter les fans d’e-sport grâce à une carte d’événements et de quêtes locales accessibles via QR code.<br> Le projet propose des expériences hybrides mêlant rencontres physiques et récompenses digitales pour renforcer les liens entre communautés locales et équipe e-sport.",
      meta: "stratégie d’expérience · concept événementiel · activation de marque · UX parcours communautaire",
      images: ["assets/images/vitality/vitality-01.jpg", "assets/images/vitality/vitality-02.jpg"],
      cta: {
                label: "En savoir plus",
                href: "https://www.canva.com/design/DAHAfP8VPU8/Gvn9IX475UdR3kV0i19IxQ/view?utm_content=DAHAfP8VPU8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h900cdb8bb7",
              },
      hidden: false
    },

    // --- Branding ---
    "Polygone": {
      title: "Polygone",
      description: "Création de l’identité visuelle de l’association Le Polygone en 2023, puis rebranding et développement d’une charte graphique en 2026. <br> Direction artistique et réalisation de merch depuis 2023.",
      meta: "identité visuelle · direction artistique · conception éditoriale · merchandising · supports événementiels",
      images: ["assets/images/polygone.1/STUD_NEW_LED-04.jpg", "assets/images/polygone.1/02-NEW-CHARTE-Maeva7.jpg"],
      cta: null,
      hidden: false
    },
    "Nandor": {
      title: "Nandor",
      meta: "",
      description: "Conception de l’identité visuelle du DJ Nandor. <br> Réalisée en binôme au sein du studio Rëva.",
      images: ["assets/images/nandor/Rapido.jpg", "assets/images/nandor/logo.jpg"],
      cta: null,
      hidden: false
    },

    // --- Communication ---
    "Summer et Zima": {
      title: "Summer et Zima",
      meta: "",
      description: "En charge de la communication pour le Court-métrage Summer & Zima. Logo, posts réseaux, affiche, Merch, générique... Projeté dans divers cinéma.",
      images: ["assets/images/sez/A3_OPTIMAL.jpg", "assets/images/sez/IMG_5885.jpeg"],
      cta: null,
      hidden: false
    },
    "JPO": {
      title: "JPO",
      meta: "",
      description: "Identité visuelle des Journées Portes ouvertes des écoles Boulle, Dupérré, Ensaama et Estienne. Projet Lauréat. Affiche animée, formats réseaux sociaux et print.",
      images: ["assets/images/JPO/JPO2022_Bannière.jpg", "assets/images/JPO/F81DDB39-55A0-42E1-A0C9-41BE91A0B8F4.JPG"],
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

    // --- Digital & expérience interactives ---
    "11:11": {
      title: "11:11",
      meta: "",
      description: "11:11 est une exposition qui montre le shifting.",
      images: ["assets/images/diplome/diplome-01.jpeg", "assets/images/diplome/image_4.jpeg"],
      cta: null,
      hidden: false
    },
    "Anome": {
      title: "Anome",
      meta: "",
      description: "",
      images: ["assets/images/anome/anome-01.jpg", "assets/images/anome/anome-02.jpg"],
      cta: null,
      hidden: false
    },
    "Morph": {
      title: "Morph",
      meta: "",
      description: "Réalisation d’images 3D et générative. Projection au planétarium de Paris et de Berlin. Partenariat avec l’université UDK de Berlin et les étudiants en Sound Design.",
      images: ["assets/images/plane/portal.jpg", "assets/images/plane/projection.jpg"],
      cta: null,
      hidden: false
    },
    "Antipathie": {
      title: "Antipathie",
      meta: "",
      description: "",
      images: ["assets/images/antipathie/antipathie-01.jpg", "assets/images/antipathie/antipathie-02.jpg"],
      cta: null,
      hidden: false
    },

    // --- Recherches & édition ---
    "Pulsar": {
      title: "Pulsar",
      meta: "",
      description: "Pulsar : plongée en sonocène digicore. Mémoire de DSAA. Analyses des expériences musicales adressées à des individus hyper connectés. Écriture et conception graphique.",
      images: ["assets/images/pulsar/thesis-01.jpg", "assets/images/pulsar/thesis-02.jpg"],
      cta: {
                label: "Lire ici",
                href: "assets/pulsar_web-comp.pdf",
              },
      hidden: false
    },
    "Pornwashing": {
      title: "Pornwashing",
      meta: "",
      description: "Étude de cas sousla forme d'un site internet, analyse de la campagne dirtiest porn ever de Pornhub.",
      images: ["assets/images/pornwashing/pornwashing-01.jpg", "assets/images/pornwashing/pornwashing-02.jpg"],
      cta: {
                label: "Consulter ici",
                href: "pornwashing/index.html",
              },
      hidden: false
    },
    "Sexposé": {
      title: "Sexposé",
      meta: "Mémoire de diplôme de DN Made. Analyse de la communication autour des IST chez les jeunes. Écriture, photographie et Conception Graphique.",
      description: "",
      images: ["assets/images/sexpo1/Test.jpg"],
      cta: null,
      hidden: false
    },

    // --- Évènements & médiation ---
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
      description: "Exposition itinérante. Jeu exploratoire conçu pour faire découvrir le portrait d’une chercheuse en astrophysique. Des objets manipulables sérigraphiés révèlent des indices menant à une expérience sur le web. Exposé à Ground Control pour le festival Double Science et lors de divers événements. Projet réalisé en duo. Conception graphique, développement, écriture et scénographie.",
      images: ["assets/images/matilda/mission_matilda-rachel_flore-3.jpg", "assets/images/matilda/2500-1663-max.jpg"],
      cta: null,
      hidden: false
    },
    "Poster goûter": {
      title: "Poster goûter",
      meta: "",
      description: "Poster interactif (éléments manipulables utilisés pour la médiation). Représentation graphique du travail du chercheur Landry Bretheau en Physique Quantique. Projet « Poster Gouter » en collaboration avec l’École du Non-Savoir (Présentation au Théatre de La Ville). Travail en équipe. Conception graphique et médiation.",
      images: ["assets/images/postergouter/DSC_0979f-2.jpg", "assets/images/postergouter/DSC_1017f.jpg"],
      cta: null,
      hidden: false
    },

    // --- Expérimentations ---
    "Textuellement transmissibles": {
      title: "Textuellement transmissibles",
      meta: "",
      description: "",
      images: [],
      cta: null,
      hidden: false
    },
  }
};
