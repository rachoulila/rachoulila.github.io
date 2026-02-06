const DATA = window.PORTFOLIO_DATA;

/* ---------- Helpers ---------- */
function qs(sel, root = document) {
  return root.querySelector(sel);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isArrowLine(line) {
  return String(line || "").trim().startsWith("→");
}

function normalizeArrowLabel(line) {
  return String(line || "").replace(/^→\s*/u, "").trim();
}

function isProjectHidden(item, projectKey) {
  const p = item?.projects?.[projectKey];
  return !!(p && p.hidden);
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isSmallScreen() {
  return window.matchMedia && window.matchMedia("(max-width: 980px)").matches;
}

function getStickyNavHeight() {
  const nav = qs(".quicknav");
  return nav ? nav.getBoundingClientRect().height : 0;
}

function scrollToElementWithOffset(targetEl, offset = 0) {
  if (!targetEl) return;
  const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, left: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

/* ---------- Start at top (avoid landing on #experiences after refresh) ---------- */
function forceTopOnLoad() {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

/* ---------- Site identity ---------- */
function mountIdentity() {
  // Name
  const nameNode = qs("#siteName");
  if (nameNode) nameNode.textContent = DATA.site.name || "";

  // Roles
  const roles = DATA.site.roles || [];
  const meta = qs(".identity__meta");
  if (meta) {
    meta.innerHTML = "";
    roles.forEach((r) => {
      const div = document.createElement("div");
      div.textContent = r;
      meta.appendChild(div);
    });
  }

  // Email (existing HTML anchor)
  const emailA = qs("#siteEmail");
  if (emailA) {
    emailA.textContent = DATA.site.emailText || "";
    emailA.href = DATA.site.emailHref || "#";
  }

  // Footer email
  const footerEmail = qs("#footerEmail");
  if (footerEmail) {
    footerEmail.textContent = DATA.site.emailText || "";
    footerEmail.href = DATA.site.emailHref || "#";
  }

  // About
  const about = qs("#aboutText");
  if (about) about.textContent = DATA.site.about || "";

  // --- Add phone + instagram under email (without changing HTML) ---
  if (emailA && emailA.parentElement) {
    // remove previous injected nodes
    emailA.parentElement.querySelectorAll(".identity__extraLink").forEach((n) => n.remove());

    const extras = [
      { text: DATA.site.phoneText, href: DATA.site.phoneHref },
      { text: DATA.site.instagramText, href: DATA.site.instagramHref },
    ].filter((x) => x.text && x.href);

    extras.forEach((x) => {
      const a = document.createElement("a");
      a.className = "identity__link identity__extraLink";
      a.href = x.href;
      a.textContent = x.text;

      if (String(x.href).startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      emailA.insertAdjacentElement("afterend", a);
    });
  }

  // (optional) footer extras too
  if (footerEmail && footerEmail.parentElement) {
    footerEmail.parentElement.querySelectorAll(".footer__extraLink").forEach((n) => n.remove());

    const extras = [
      { text: DATA.site.phoneText, href: DATA.site.phoneHref },
      { text: DATA.site.instagramText, href: DATA.site.instagramHref },
    ].filter((x) => x.text && x.href);

    extras.forEach((x) => {
      const a = document.createElement("a");
      a.className = "footer__link footer__extraLink";
      a.href = x.href;
      a.textContent = x.text;

      if (String(x.href).startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      footerEmail.insertAdjacentElement("afterend", a);
    });
  }
}

/* ---------- Hero slideshow (1 big image) ---------- */
function mountHeroSlideshow() {
  const img = qs("#heroSlide");
  const imgs = DATA.site.heroImages || [];
  if (!img || !imgs.length) return;

  let index = 0;

  // preload
  imgs.forEach((src) => {
    const p = new Image();
    p.src = src;
  });

  function render() {
    // simple crossfade: swap with a class
    img.classList.remove("is-visible");
    const nextSrc = imgs[index];
    index = (index + 1) % imgs.length;

    const tmp = new Image();
    tmp.onload = () => {
      img.src = nextSrc;
      requestAnimationFrame(() => img.classList.add("is-visible"));
    };
    tmp.src = nextSrc;
  }

  img.classList.add("is-visible");
  render();
  setInterval(render, 2600);
}

/* ---------- Detail rendering ---------- */
function normalizeImages(images) {
  if (!images) return [];
  if (Array.isArray(images)) return images.filter(Boolean);

  // Backward compat: { big, wide }
  if (typeof images === "object") {
    const arr = [];
    if (images.big) arr.push(images.big);
    if (images.wide) arr.push(images.wide);

    // Optional: { items: [...] }
    if (Array.isArray(images.items)) {
      images.items.forEach((x) => {
        if (typeof x === "string") arr.push(x);
        else if (x?.src) arr.push(x.src);
      });
    }
    return arr.filter(Boolean);
  }

  return [];
}

function renderDetail(root, detail) {
  if (!detail) {
    root.innerHTML = "";
    return;
  }

  const title = detail.title || "";
  const meta = detail.meta || "";
  const description = detail.description || "";
  const bullets = Array.isArray(detail.bullets) ? detail.bullets : [];
  const images = normalizeImages(detail.images);
  const cta = detail.cta || null;

  const ctaHtml =
    cta && cta.href
      ? `<a class="projectLinkButton"
           href="${escapeHtml(cta.href)}"
           target="_blank"
           rel="noopener noreferrer">
           ${escapeHtml(cta.label || "Consulter ici")}
         </a>`
      : "";

  const imgsHtml = images.length
    ? `<div class="media__grid">
        ${images
          .map(
            (src, i) =>
              `<figure class="media__figure">
                 <img class="media__img" src="${escapeHtml(src)}" alt="" loading="${i === 0 ? "eager" : "lazy"}" />
               </figure>`
          )
          .join("")}
      </div>`
    : "";

  root.innerHTML = `
    <header class="detail__header">
      <h3 class="detail__title">${escapeHtml(title)}</h3>
      <div class="detail__meta">${escapeHtml(meta)}</div>
    </header>

    <div class="detail__content">
      <div class="media">
        ${imgsHtml}
      </div>

      <div class="textblock">
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}

        ${
          bullets.length
            ? `<ul class="textblock__bullets">
                ${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
              </ul>`
            : ""
        }

        ${ctaHtml}
      </div>
    </div>
  `;

  // animate on change
  if (!prefersReducedMotion()) {
    root.classList.remove("is-animating");
    void root.offsetWidth; // force reflow
    root.classList.add("is-animating");
  }
}

/* ---------- Sections (left list -> right detail) ---------- */
function renderList(sectionKey, sectionData) {
  const listRoot = qs(`#list-${sectionKey}`);
  const detailRoot = qs(`#detail-${sectionKey}`);
  if (!listRoot || !detailRoot) return;

  listRoot.innerHTML = "";

  const items = sectionData.items || [];
  if (!items.length) return;

  function getFirstVisibleArrowIndex(item) {
    const sublines = item?.sublines || [];
    for (let i = 0; i < sublines.length; i++) {
      const line = sublines[i];
      if (!isArrowLine(line)) continue;
      const key = normalizeArrowLabel(line);
      if (!isProjectHidden(item, key)) return i;
    }
    // fallback: first arrow even if hidden, else 0
    const anyArrow = sublines.findIndex((l) => isArrowLine(l));
    return anyArrow >= 0 ? anyArrow : 0;
  }

  function findNextVisibleArrowIndex(item, startIndex = 0) {
    const sublines = item?.sublines || [];
    for (let i = startIndex; i < sublines.length; i++) {
      const line = sublines[i];
      if (!isArrowLine(line)) continue;
      const key = normalizeArrowLabel(line);
      if (!isProjectHidden(item, key)) return i;
    }
    // try from beginning
    return getFirstVisibleArrowIndex(item);
  }

  function setActive(itemId, subIndex, { scrollToMedia = false } = {}) {
    const item = items.find((x) => x.id === itemId) || items[0];
    const sublines = item?.sublines || [];

    // If user clicked a hidden project (or index points to hidden), jump to next visible
    const chosenLine = sublines[subIndex] ?? "";
    if (isArrowLine(chosenLine)) {
      const key = normalizeArrowLabel(chosenLine);
      if (isProjectHidden(item, key)) {
        subIndex = findNextVisibleArrowIndex(item, Number(subIndex) + 1);
      }
    }

    // active style only on arrow links
    listRoot.querySelectorAll(".list__subLink").forEach((node) => {
      const sameItem = node.dataset.itemId === String(itemId);
      const sameSub = Number(node.dataset.subIndex) === Number(subIndex);
      node.classList.toggle("is-active", sameItem && sameSub);
      node.setAttribute("aria-current", sameItem && sameSub ? "true" : "false");
    });

    const chosen =
      sublines[subIndex] ??
      sublines.find((l) => isArrowLine(l) && !isProjectHidden(item, normalizeArrowLabel(l))) ??
      sublines.find((l) => isArrowLine(l)) ??
      sublines[0] ??
      "";

    const projectKey = normalizeArrowLabel(chosen);

    // project-specific detail (and skip hidden)
    const projectDetail =
      (item.projects &&
        item.projects[projectKey] &&
        !item.projects[projectKey].hidden &&
        item.projects[projectKey]) ||
      item.detailFallback ||
      null;

    renderDetail(detailRoot, projectDetail);

    // ✅ Mobile UX: after click, bring the detail (images) into view
    if (scrollToMedia && (isSmallScreen() || window.innerWidth < 980)) {
      const media = detailRoot.querySelector(".media") || detailRoot;
      const offset = getStickyNavHeight() + 14;
      scrollToElementWithOffset(media, offset);
    }
  }

  // Render items
  items.forEach((item) => {
    const block = el("div", "list__block");

    const title = el("div", "list__itemTitle");
    title.textContent = item.label; // not clickable
    block.appendChild(title);

    const sub = el("div", "list__itemSub");

    (item.sublines || []).forEach((line, idx) => {
      if (!isArrowLine(line)) {
        const plain = el("div", "list__subText");
        plain.textContent = line;
        sub.appendChild(plain);
        return;
      }

      const projectKey = normalizeArrowLabel(line);
      const project = item?.projects?.[projectKey];

      // ✅ if project exists and is marked hidden, don't show it in the list
      if (project && project.hidden) return;

      // clickable but looks like text
      const link = document.createElement("span");
      link.className = "list__subLink";
      link.textContent = line;

      link.setAttribute("role", "button");
      link.setAttribute("tabindex", "0");
      link.setAttribute("aria-current", "false");

      link.dataset.itemId = item.id;
      link.dataset.subIndex = String(idx);

      link.addEventListener("click", () => setActive(item.id, idx, { scrollToMedia: true }));
      link.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(item.id, idx, { scrollToMedia: true });
        }
      });

      sub.appendChild(link);
    });

    block.appendChild(sub);
    listRoot.appendChild(block);
  });

  // default selection: first item, first *visible* arrow line (or 0)
  const firstItem = items[0];
  const firstIndex = getFirstVisibleArrowIndex(firstItem);

  setActive(firstItem.id, firstIndex, { scrollToMedia: false });
}

function mountSections() {
  const sections = DATA.sections || {};
  Object.entries(sections).forEach(([key, sec]) => renderList(key, sec));
}

/* ---------- Quicknav active state on scroll ---------- */
function mountActiveNav() {
  const links = Array.from(document.querySelectorAll(".quicknav__link"));
  const ids = links
    .map((a) => a.getAttribute("href"))
    .filter(Boolean)
    .map((h) => h.replace("#", ""))
    .filter(Boolean);

  const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
  if (!targets.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

      if (!visible) return;

      const activeId = visible.target.id;
      links.forEach((a) => {
        const href = a.getAttribute("href") || "";
        a.classList.toggle("is-active", href === `#${activeId}`);
      });
    },
    { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
  );

  targets.forEach((t) => obs.observe(t));
}

/* ---------- Init ---------- */
function init() {
  forceTopOnLoad();
  mountIdentity();
  mountHeroSlideshow();
  mountSections();
  mountActiveNav();
}

document.addEventListener("DOMContentLoaded", init);
