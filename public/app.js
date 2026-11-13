(() => {
  "use strict";

  const DATA = window.VIM_DATA;
  const $ = (s, el = document) => el.querySelector(s);

  /* ───────────────────────── Storage (best effort) ───────────────────────── */
  const store = {
    get(k) { try { return localStorage.getItem("vimcheat." + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("vimcheat." + k, v); } catch (e) {} },
  };

  /* ───────────────────────── Icons ───────────────────────── */
  const KEY_ICONS = {
    esc: '<path d="M4 4l6 6M4 4h4M4 4v4"/><path d="M8.6 2.6a5.5 5.5 0 1 1-6 6"/>',
    ctrl: '<path d="M3.5 10L8 5.5l4.5 4.5"/>',
    shift: '<path d="M8 2.5L2.5 8h3v5h5V8h3z"/>',
    alt: '<path d="M2 4h3.5l5 8H14M10 4h4"/>',
    enter: '<path d="M13 3v5H4M6.5 5.5L4 8l2.5 2.5"/>',
    tab: '<path d="M2 8h10M9 5l3 3-3 3M14 4v8"/>',
    space: '<path d="M2.5 7v3h11V7"/>',
    bs: '<path d="M5.5 3.5H14v9H5.5L1.5 8z"/><path d="M8 6l3 4M11 6l-3 4"/>',
    leader: '<path class="f" d="M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5l-1.6-4.9L1.5 8l4.9-1.6z"/>',
    up: '<path d="M8 13V3M4 7l4-4 4 4"/>',
    down: '<path d="M8 3v10M4 9l4 4 4-4"/>',
    left: '<path d="M13 8H3M7 4L3 8l4 4"/>',
    right: '<path d="M3 8h10M9 4l4 4-4 4"/>',
  };
  const TAB_ICONS = {
    star: '<path d="M10 2.5l2.3 4.8 5.2.7-3.8 3.6.9 5.2L10 14.3l-4.6 2.5.9-5.2-3.8-3.6 5.2-.7z"/>',
    move: '<path d="M10 2v16M2 10h16M7 4.5L10 2l3 2.5M7 15.5l3 2.5 3-2.5M4.5 7L2 10l2.5 3M15.5 7l2.5 3-2.5 3"/>',
    pencil: '<path d="M13.5 3.5l3 3L7 16H4v-3z"/><path d="M11.5 5.5l3 3"/>',
    select: '<path d="M3 6V3h3M14 3h3v3M17 14v3h-3M6 17H3v-3"/><path d="M7 7h6v6H7z"/>',
    search: '<circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l4.5 4.5"/>',
    windows: '<rect x="2.5" y="3.5" width="15" height="13" rx="2"/><path d="M10 3.5v13M10 10h7.5"/>',
    folder: '<path d="M2.5 5.5a2 2 0 0 1 2-2h3l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z"/>',
    clipboard: '<rect x="4" y="3.5" width="12" height="14" rx="2"/><path d="M7.5 2.5h5v2.5h-5zM7 9h6M7 12.5h4"/>',
  };
  const svg = (paths, vb = 16) => {
    const fill = paths.includes('class="f"');
    return `<svg viewBox="0 0 ${vb} ${vb}" aria-hidden="true"${fill ? ' class="fill"' : ""}>${paths}</svg>`;
  };

  /* ───────────────────────── Key notation parser ───────────────────────── */
  const MODS = {
    C: { c: "ctrl", icon: "ctrl", label: "Ctrl" },
    S: { c: "shift", icon: "shift", label: "Shift" },
    A: { c: "alt", icon: "alt", label: "Alt" },
    M: { c: "alt", icon: "alt", label: "Alt" },
  };
  const SPECIAL = {
    esc: { c: "esc", icon: "esc", label: "Esc" },
    cr: { c: "enter", icon: "enter", label: "Enter" },
    enter: { c: "enter", icon: "enter", label: "Enter" },
    tab: { c: "white", icon: "tab", label: "Tab" },
    space: { c: "white", icon: "space", label: "Space" },
    bs: { c: "white", icon: "bs", label: "Bksp" },
    leader: { c: "leader", icon: "leader", label: "Leader" },
    up: { c: "white", icon: "up", label: "" },
    down: { c: "white", icon: "down", label: "" },
    left: { c: "white", icon: "left", label: "" },
    right: { c: "white", icon: "right", label: "" },
    pageup: { c: "white", label: "PgUp" },
    pagedown: { c: "white", label: "PgDn" },
    home: { c: "white", label: "Home" },
    end: { c: "white", label: "End" },
    del: { c: "white", label: "Del" },
  };

  /** Turn "<C-w>v" into tokens: [{t:"chord",mod,key}, {t:"key",ch:"v"}] */
  function tokenize(src) {
    const out = [];
    let i = 0;
    while (i < src.length) {
      const rest = src.slice(i);
      let m;
      if ((m = rest.match(/^<([CSAM])-([^>]+|>)>/))) {
        const inner = SPECIAL[m[2].toLowerCase()];
        const choice = m[2].match(/^\[(.{2,})\]$/); // "<C-[du]>" = Ctrl + one of d, u
        out.push({
          t: "chord", mod: MODS[m[1]],
          key: inner ? { t: "special", ...inner }
            : choice ? { t: "choice", keys: [...choice[1]].map((ch) => ({ t: "key", ch })) }
            : { t: "key", ch: m[2] },
        });
        i += m[0].length;
      } else if ((m = rest.match(/^<([A-Za-z]+)>/)) && SPECIAL[m[1].toLowerCase()]) {
        out.push({ t: "special", ...SPECIAL[m[1].toLowerCase()] });
        i += m[0].length;
      } else if ((m = rest.match(/^\[([^\]]{2,})\]/))) {
        // "[hjkl]" = one of these keys
        out.push({ t: "choice", keys: [...m[1]].map((ch) => ({ t: "key", ch })) });
        i += m[0].length;
      } else if ((m = rest.match(/^\{([a-z]+)\}/))) {
        out.push({ t: "ph", name: m[1] });
        i += m[0].length;
      } else {
        out.push({ t: "key", ch: src[i] });
        i += 1;
      }
    }
    return out;
  }

  /* ───────────────────────── State ───────────────────────── */
  let lang = store.get("lang") || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
  if (!DATA.ui[lang]) lang = "fr";
  let query = "";
  const ui = () => DATA.ui[lang];
  const tabById = (id) => DATA.tabs.find((t) => t.id === id);
  const currentTabId = () => {
    const h = decodeURIComponent(location.hash.slice(1));
    return tabById(h) ? h : DATA.tabs[0].id;
  };

  /* ───────────────────────── Rendering helpers ───────────────────────── */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const phLabel = (name) => ui().ph[name] || name;

  /** Escape text and wrap the (accent-insensitive) query match in <mark>. */
  function hl(text, q) {
    if (!q) return esc(text);
    const n = norm(text);
    let out = "", from = 0, idx;
    while ((idx = n.indexOf(q, from)) !== -1) {
      out += esc(text.slice(from, idx)) + "<mark>" + esc(text.slice(idx, idx + q.length)) + "</mark>";
      from = idx + q.length;
    }
    return out + esc(text.slice(from));
  }
  /** Description with `inline code` support. */
  function richText(text, q) {
    return text.split(/(`[^`]+`)/).map((part) =>
      part.startsWith("`") && part.endsWith("`") && part.length > 1
        ? "<code>" + hl(part.slice(1, -1), q) + "</code>"
        : hl(part, q)
    ).join("");
  }

  function keyHTML(tok) {
    if (tok.t === "key") {
      const label = tok.ch === " " ? "␣" : tok.ch;
      return `<kbd class="k">${esc(label)}</kbd>`;
    }
    if (tok.t === "special") {
      const icon = tok.icon ? svg(KEY_ICONS[tok.icon]) : "";
      const label = tok.label ? `<span>${esc(tok.label)}</span>` : "";
      return `<kbd class="k tint c-${tok.c}">${icon}${label}</kbd>`;
    }
    if (tok.t === "ph") return `<span class="ph">${esc(phLabel(tok.name))}</span>`;
    if (tok.t === "choice") return `<span class="choice">${tok.keys.map(keyHTML).join("")}</span>`;
    if (tok.t === "chord") {
      const m = tok.mod;
      const mod = `<kbd class="k tint c-${m.c}">${svg(KEY_ICONS[m.icon])}<span>${m.label}</span></kbd>`;
      return `<span class="chord c-${m.c}" title="${m.label}+${esc(tok.key.label || tok.key.ch)}">${mod}<span class="plus">+</span>${keyHTML(tok.key)}</span>`;
    }
    return "";
  }

  /** Inline placeholders inside Ex commands / code. */
  function inlinePh(src) {
    return src.split(/(\{[a-z]+\})/).map((p) => {
      const m = p.match(/^\{([a-z]+)\}$/);
      return m ? `<span class="ph">${esc(phLabel(m[1]))}</span>` : esc(p);
    }).join("");
  }

  function seqHTML(src, opts = {}) {
    if (opts.code) return `<code class="code">${inlinePh(src)}</code>`;
    if (src.length > 1 && src[0] === ":") {
      return `<code class="ex c-ex"><span class="ex-colon">:</span>${inlinePh(src.slice(1))}</code>`;
    }
    return `<span class="seq">${tokenize(src).map(keyHTML).join("")}</span>`;
  }

  function altsHTML(keys, opts = {}) {
    const list = Array.isArray(keys) ? keys : [keys];
    const sep = opts.list ? "" : `<span class="or">${esc(ui().or)}</span>`;
    return list.map((k) => seqHTML(k, opts)).join(sep);
  }

  let tipId = 0;
  function keysHTML(keys, opts = {}) {
    if (!opts.eq) return `<div class="keys">${altsHTML(keys, opts)}</div>`;
    // Equivalent command (usually the Ex form of a Ctrl shortcut), shown as a tooltip.
    const id = "tip-" + ++tipId;
    return `<div class="keys has-tip" tabindex="0" aria-describedby="${id}">${altsHTML(keys, opts)}` +
      `<span class="tip-dot" aria-hidden="true">≡</span>` +
      `<span class="tip" role="tooltip" id="${id}"><span class="tip-label">${esc(ui().eq)}</span>${[].concat(opts.eq).map((k) => seqHTML(k)).join('<span class="or">/</span>')}</span></div>`;
  }

  const item = (it) => ({ keys: it[0], desc: lang === "fr" ? it[1] : it[2], opts: it[3] || {} });

  function cardHTML(group, tab, items, q) {
    const rows = items.map((it) => {
      const { keys, desc, opts } = item(it);
      return keysHTML(keys, opts) + `<div class="desc">${richText(desc, q)}</div>`;
    }).join("");
    return `<section class="card c-${tab.color}"><h3>${hl(group.title[lang], q)}</h3><div class="rows">${rows}</div></section>`;
  }

  const tabIcon = (tab) => `<span class="tab-icon c-${tab.color}">${svg(TAB_ICONS[tab.icon], 20)}</span>`;

  /* ───────────────────────── Render: tabs & panels ───────────────────────── */
  function renderTabs() {
    $("#tabs").innerHTML = DATA.tabs.map((tab) =>
      `<button type="button" role="tab" class="tab c-${tab.color}" id="tab-${tab.id}" data-tab="${tab.id}" aria-controls="panel-${tab.id}">${tabIcon(tab)}<span>${esc(tab.label[lang])}</span></button>`
    ).join("");
  }

  function renderPanels() {
    $("#panels").innerHTML = DATA.tabs.map((tab) =>
      `<section class="panel c-${tab.color}" role="tabpanel" id="panel-${tab.id}" aria-labelledby="tab-${tab.id}" tabindex="-1" hidden>
        <h2 class="panel-title">${tabIcon(tab)}${esc(tab.label[lang])}</h2>
        <div class="grid">${tab.groups.map((g) => cardHTML(g, tab, g.items, "")).join("")}</div>
      </section>`
    ).join("");
  }

  function renderLegend() {
    const u = ui();
    $("#legend-body").innerHTML =
      u.legendItems.map(([k, text]) => `<div class="legend-item">${keysHTML(k, { list: true })}<span>${esc(text)}</span></div>`).join("") +
      `<p class="legend-note">${esc(u.legendNote)}</p>`;
  }

  function showTab(id, focus = false) {
    for (const btn of document.querySelectorAll(".tab")) {
      const on = btn.dataset.tab === id;
      btn.setAttribute("aria-selected", on);
      btn.tabIndex = on ? 0 : -1;
      if (on) {
        // Keep the active tab visible in the scrollable bar without scrolling the page.
        const bar = $("#tabs"), b = btn.getBoundingClientRect(), r = bar.getBoundingClientRect();
        if (b.left < r.left) bar.scrollLeft -= r.left - b.left + 16;
        else if (b.right > r.right) bar.scrollLeft += b.right - r.right + 16;
        if (focus) btn.focus({ preventScroll: true });
      }
    }
    for (const p of document.querySelectorAll(".panel")) p.hidden = p.id !== "panel-" + id;
  }

  /* ───────────────────────── Search ───────────────────────── */
  function keyWords(keys) {
    // Human words for a key list so "ctrl w" or "esc" find "<C-w>" / "<Esc>".
    const list = Array.isArray(keys) ? keys : [keys];
    return list.map((k) => k + " " + tokenize(k).map((t) =>
      t.t === "chord" ? ["+", "-", " "].map((s) => t.mod.label + s + (t.key.label || t.key.ch)).join(" ") :
      t.t === "special" ? t.label + " " + (t.icon || "") :
      t.t === "ph" ? phLabel(t.name) :
      t.t === "choice" ? t.keys.map((k) => k.ch).join(" ") : t.ch
    ).join(" ")).join(" ");
  }

  function renderResults() {
    const q = norm(query.trim());
    const results = $("#results"), panels = $("#panels");
    document.body.classList.toggle("results-active", !!q);
    if (!q) {
      results.hidden = true;
      results.innerHTML = "";
      panels.hidden = false;
      return;
    }
    let count = 0;
    const html = DATA.tabs.map((tab) => {
      const cards = tab.groups.map((g) => {
        const groupHit = norm(g.title[lang]).includes(q);
        const items = groupHit ? g.items : g.items.filter((it) => {
          const { keys, desc, opts } = item(it);
          return norm(desc).includes(q) || norm(keyWords(keys)).includes(q) ||
            (opts.eq && norm(keyWords(opts.eq)).includes(q));
        });
        count += items.length;
        return items.length ? cardHTML(g, tab, items, q) : "";
      }).join("");
      return cards ? `<div class="results-group c-${tab.color}"><h2>${tabIcon(tab)}${esc(tab.label[lang])}</h2><div class="grid">${cards}</div></div>` : "";
    }).join("");

    results.innerHTML = `<div class="results-head">${esc(ui().results(count))}</div>` +
      (count ? html : `<div class="empty">${esc(ui().noResults)}</div>`);
    results.hidden = false;
    panels.hidden = true;
  }

  /* ───────────────────────── i18n & theme ───────────────────────── */
  function applyLang() {
    const u = ui();
    document.documentElement.lang = lang;
    document.title = "vimcheat — " + u.title;
    for (const el of document.querySelectorAll("[data-i18n]")) el.textContent = u[el.dataset.i18n];
    $("#q").placeholder = u.search;
    $("#lang").setAttribute("aria-label", u.lang);
    $("#theme").setAttribute("aria-label", u.theme);
    $("#theme").title = u.theme;
    for (const b of document.querySelectorAll("#lang button")) b.setAttribute("aria-pressed", b.dataset.lang === lang);
    renderTabs();
    renderPanels();
    renderLegend();
    showTab(currentTabId());
    renderResults();
  }

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const effectiveTheme = () => document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");

  /* ───────────────────────── Events ───────────────────────── */
  $("#tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    if (query) { query = ""; $("#q").value = ""; renderResults(); }
    if (location.hash.slice(1) === btn.dataset.tab) showTab(btn.dataset.tab);
    else location.hash = btn.dataset.tab;
  });

  $("#tabs").addEventListener("keydown", (e) => {
    const ids = DATA.tabs.map((t) => t.id);
    let i = ids.indexOf(currentTabId());
    if (e.key === "ArrowRight") i = (i + 1) % ids.length;
    else if (e.key === "ArrowLeft") i = (i - 1 + ids.length) % ids.length;
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = ids.length - 1;
    else return;
    e.preventDefault();
    history.replaceState(null, "", "#" + ids[i]);
    showTab(ids[i], true);
  });

  window.addEventListener("hashchange", () => {
    showTab(currentTabId());
    window.scrollTo({ top: 0 });
  });

  $("#q").addEventListener("input", (e) => { query = e.target.value; renderResults(); });
  $("#q").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      query = ""; e.target.value = ""; renderResults(); e.target.blur();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    e.preventDefault();
    $("#q").focus();
    $("#q").select();
  });

  $("#lang").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (!b || b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    store.set("lang", lang);
    applyLang();
  });

  $("#theme").addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("theme", next);
  });

  // Make sure every tab is printed even when a search is active.
  window.addEventListener("beforeprint", () => { $("#panels").hidden = false; });
  window.addEventListener("afterprint", () => renderResults());

  $("#version").textContent = "v" + DATA.version;

  if (store.get("legend") === "open") $("#legend").open = true;
  $("#legend").addEventListener("toggle", (e) => store.set("legend", e.target.open ? "open" : "closed"));

  applyLang();
})();
