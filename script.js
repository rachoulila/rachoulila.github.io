/* global PORTFOLIO */
const DATA = window.PORTFOLIO_V3;

const menuEl = document.getElementById("menu");
const galleryEl = document.getElementById("gallery");
const infoTitle = document.getElementById("infoTitle");
const infoMeta = document.getElementById("infoMeta");
const infoDesc = document.getElementById("infoDesc");
const infoCta = document.getElementById("infoCta");

const siteName = document.getElementById("siteName");
const siteRoles = document.getElementById("siteRoles");
const emailLink = document.getElementById("emailLink");

// --- Custom pages ---
const CUSTOM_PAGES = {
  "Contact": {
    title: "Contact",
    meta: "",
    images: [],
    html: `
      <div class="about">
        <div class="muted"></div>
        <div style="margin-top:12px;">
          <div class="about__row">
            <span>Mail</span>
            <a class="uLink" href="mailto:${DATA.site.email}">${DATA.site.email}</a>
          </div>
          <div class="about__row">
            <span>Téléphone</span>
            <a class="uLink" href="tel:+33651880125">+33 6 51 88 01 25</a>
          </div>
          <div class="about__row">
            <span>Instagram</span>
            <a class="uLink"
               href="https://www.instagram.com/rachel.truchot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
               target="_blank" rel="noreferrer">
              @rachel.truchot
            </a>
          </div>
        </div>
      </div>
    `
  },

  "CV": {
    title: "CV",
    meta: "",
    images: ["assets/images/CV_2026.jpg"],
    html: `<div class="muted">Consulter mon CV en PDF.</div>`,
    cta: { label: "Ouvrir le CV", href: "assets/CV 2026 2.pdf" }
  },

  "À propos": {
    title: "À propos",
    meta: "",
    images: ["assets/images/autoportrait/asap.jpg"],
    html: (DATA.sections.find(s => s.id === "about")?.content?.html) || ""
  },

  "Compétences techniques": {
    title: "Compétences techniques",
    meta: "",
    images: [],
    html: `
      <div class="kv">
        <div class="kv__row"><div class="kv__k">Design</div><div class="kv__v">Branding · Éditorial · Typo</div></div>
        <div class="kv__row"><div class="kv__k">Digital</div><div class="kv__v">UI · Motion · Web</div></div>
        <div class="kv__row"><div class="kv__k">3D</div><div class="kv__v">Images · Rendus · Expériences</div></div>
      </div>
    `
  },

  "Studio Rëva": { title: "Studio Rëva", meta: "", images: [], html: `<div class="muted">Page studio (à compléter).</div>` },
  "Musique": { title: "Musique", meta: "", images: [], html: `<div class="muted">Sélection de projets / collaborations musique (à compléter).</div>` }
};

function setActive(btn){
  document.querySelectorAll(".menu__item").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");
}

function renderFeed(images){
  galleryEl.innerHTML = "";
  if(!images || !images.length){
    const div = document.createElement("div");
    div.style.padding = "18px";
    div.style.color = "var(--muted)";
    div.style.fontSize = "12px";
    div.textContent = "—";
    galleryEl.appendChild(div);
    return;
  }
  images.forEach(src => {
    const img = document.createElement("img");
    img.className = "feedImg";
    img.loading = "lazy";
    img.src = src;
    img.alt = "";
    galleryEl.appendChild(img);
  });
}

function renderInfo({title, meta, description, cta, html}){
  infoTitle.textContent = title || "—";
  infoMeta.textContent = meta || "";
  infoDesc.innerHTML = html ? html : (description || "");
  infoCta.innerHTML = "";
  if(cta && cta.href){
    const a = document.createElement("a");
    a.className = "uLink";
    a.href = cta.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = cta.label || "Voir";
    infoCta.appendChild(a);
  }
}

function openProject(key){
  const p = DATA.projects?.[key];
  if(!p){
    renderFeed([]);
    renderInfo({title: key, meta: "", description: "Projet introuvable."});
    return;
  }
  renderFeed(p.images);
  renderInfo({title: p.title || key, meta: p.meta, description: p.description, cta: p.cta});
}

function openCustomPage(key){
  const p = CUSTOM_PAGES[key];
  if(!p){
    renderFeed([]);
    renderInfo({title: key, meta: "", description: "Contenu à venir."});
    return;
  }
  renderFeed(p.images || []);
  renderInfo({title: p.title || key, meta: p.meta || "", html: p.html || p.description || "", cta: p.cta || null});
}

// internal links from descriptions
window.openCustomPage = openCustomPage;

function scrollToTop(){
  document.querySelector(".center")?.scrollTo({top:0, behavior:"smooth"});
}

function addProjectBtn(makeBtn, label){
  const p = DATA.projects?.[label];
  if(!p) return;
  if(p.hidden === true) return; // ✅ hide hidden projects from menu
  makeBtn(label, () => openProject(label));
}

function buildMenu(){
  menuEl.innerHTML = "";

  const makeSectionTitle = (txt) => {
    const t = document.createElement("div");
    t.className = "menu__sectionTitle";
    t.textContent = txt;
    menuEl.appendChild(t);
  };

  const makeDivider = () => {
    const d = document.createElement("div");
    d.className = "menu__divider";
    menuEl.appendChild(d);
  };

  const makeBtn = (label, onClick, {activeable=true}={}) => {
    const btn = document.createElement("button");
    btn.className = "menu__item";
    btn.textContent = label;
    btn.addEventListener("click", () => {
      if(activeable) setActive(btn);
      onClick();
    });
    menuEl.appendChild(btn);
    return btn;
  };

  // top
  makeSectionTitle("");
  makeDivider();
  makeBtn("Contact", () => openCustomPage("Contact"));
  makeBtn("CV", () => openCustomPage("CV"));

  makeDivider();
  makeSectionTitle("// Stratégie & impact");
  // ✅ Sexposer first, then La Ruche (no S'exposer)
  ["Sexposer", "La Ruche"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Branding");
  ["Polygone", "Nandor"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Communication");
  ["Summer et Zima", "JPO", "Nandor j’adore saison 2"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Digital & expérience interactives");
  ["11:11", "Anome", "Morph", "Antipathie"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Recherches & édition");
  ["Pulsar", "Sexposé", "Pornwashing"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Évènements & médiation");
  ["Mission Matilda", "Poster goûter", "Salon du chocolat", "La collectiv’"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("// Expérimentations");
  ["Textuellement transmissibles"].forEach(k => addProjectBtn(makeBtn, k));

  makeDivider();
  makeSectionTitle("Bas de page");
  makeDivider();
  makeBtn("À propos", () => openCustomPage("À propos"));
  makeBtn("Compétences techniques", () => openCustomPage("Compétences techniques"));
  makeBtn("Studio Rëva", () => openCustomPage("Studio Rëva"));
  makeBtn("Musique", () => openCustomPage("Musique"));

  const scrollBtn = document.createElement("button");
  scrollBtn.className = "menu__item";
  scrollBtn.textContent = "↑ Retour en haut";
  scrollBtn.addEventListener("click", () => scrollToTop());
  menuEl.appendChild(scrollBtn);

  const firstBtn = document.querySelector(".menu__item");
  if(firstBtn){
    firstBtn.classList.add("is-active");
    openCustomPage("Contact");
  }
}

function init(){
  if(!DATA){
    infoTitle.textContent = "Erreur";
    infoDesc.textContent = "data.js n'a pas chargé.";
    return;
  }

  if(siteName) siteName.textContent = DATA.site?.name || "";
  if(siteRoles) siteRoles.innerHTML = (DATA.site?.roles || []).join("<br/>");

  // keep email out of global UI
  if(emailLink){
    emailLink.textContent = "";
    emailLink.removeAttribute("href");
  }

  buildMenu();
}

document.addEventListener("DOMContentLoaded", init);
