/* Portal shell: collapsible sidebar with numbered sections, and the Light / Dark theme, shared by every page.
   Loaded in <head> (before first paint) so the theme and the sidebar state are set without a flash.
   The list of pages lives here only: add a page to PAGES and every page shows it. */
(function () {
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // ---------- theme: the saved choice, else the system preference ----------
  var theme = store.get("wk-theme");
  if (theme !== "light" && theme !== "dark") theme = window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  root.dataset.theme = theme;
  root.dataset.sb = store.get("wk-sidebar") === "collapsed" ? "collapsed" : "expanded";

  // ---------- pages ----------
  var PAGES = [
    { href: "index.html", label: "Home", num: "⌂" },
    { href: "global-client-portfolio.html", label: "Global Client Portfolio", num: "1" },
    { href: "office-profitability.html", label: "Office Profitability", num: "2" },
    { href: "index.html#client-reports", label: "Client Profitability", num: "3", children: [
      { href: "anheuser-busch-inbev.html", label: "Anheuser-Busch InBev" },
      { href: "eli-lilly.html", label: "Eli Lilly" },
      { href: "ford.html", label: "Ford" },
      { href: "kraft-heinz.html", label: "Kraft Heinz" },
      { href: "mcdonalds.html", label: "McDonald's" },
      { href: "nike.html", label: "Nike" }
    ] }
  ];
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  var ICON_PANEL = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 3.5v13" stroke="currentColor" stroke-width="1.5"/></svg>';
  var ICON_HOME = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" style="display:block"><path d="M3.5 9.2 10 3.6l6.5 5.6V16a.5.5 0 0 1-.5.5h-3.6v-4.4H7.6v4.4H4a.5.5 0 0 1-.5-.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  var ICON_SUN = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M4.7 15.3l1.4-1.4M13.9 6.1l1.4-1.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  var ICON_MOON = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 11.6A6.6 6.6 0 0 1 8.4 3.5a6.6 6.6 0 1 0 8.1 8.1z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function link(href, num, label, extra) {
    var current = href.toLowerCase().split("#")[0] === here && href.indexOf("#") < 0;
    return '<a class="psb__link' + (extra || "") + '" href="' + esc(href) + '" title="' + esc((num && num !== "⌂" ? num + " " : "") + label) + '"' + (current ? ' aria-current="page"' : "") + '>'
      + '<span class="psb__num">' + (num === "⌂" ? ICON_HOME : esc(num)) + '</span><span class="psb__label">' + esc(label) + '</span></a>';
  }
  function navHtml() {
    return "<ul>" + PAGES.map(function (p) {
      var sub = "";
      if (p.children) {
        sub = "<ul>" + p.children.slice().sort(function (a, b) { return a.label.localeCompare(b.label); })
          .map(function (c, i) { return "<li>" + link(c.href, p.num + "." + (i + 1), c.label) + "</li>"; }).join("") + "</ul>";
      }
      return "<li>" + link(p.href, p.num, p.label, p.children ? " psb__link--group" : "") + sub + "</li>";
    }).join("") + "</ul>";
  }

  function build() {
    if (document.getElementById("portal-sidebar")) return;
    var aside = document.createElement("aside");
    aside.className = "psb"; aside.id = "portal-sidebar"; aside.setAttribute("aria-label", "Portal");
    aside.innerHTML =
      '<div class="psb__top">'
      + '<button class="psb__toggle" type="button" data-psb-toggle aria-controls="portal-nav">' + ICON_PANEL + '</button>'
      + '<a class="psb__brand" href="index.html"><span class="psb__mark">W+K</span><span>Finance Portal</span></a></div>'
      + '<nav class="psb__nav" id="portal-nav" aria-label="Portal pages">' + navHtml() + '</nav>'
      + '<div class="psb__foot"><button class="psb__theme" type="button" data-psb-theme><span class="psb__icon"></span><span class="psb__label"></span></button></div>';
    var bar = document.createElement("div");
    bar.className = "psb__bar";
    bar.innerHTML = '<button class="psb__toggle" type="button" data-psb-toggle aria-controls="portal-nav">' + ICON_PANEL + '</button>'
      + '<a class="psb__brand" href="index.html"><span class="psb__mark">W+K</span><span>Finance Portal</span></a>';
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.insertBefore(aside, document.body.firstChild);

    var mobile = function () { return window.matchMedia("(max-width: 900px)").matches; };
    function paintToggle() {
      var open = mobile() ? root.classList.contains("psb-open") : root.dataset.sb !== "collapsed";
      document.querySelectorAll("[data-psb-toggle]").forEach(function (b) {
        b.setAttribute("aria-expanded", String(open));
        var t = open ? "Collapse sidebar" : "Expand sidebar";
        b.setAttribute("aria-label", t); b.title = t;
      });
    }
    function paintTheme() {
      var btn = aside.querySelector("[data-psb-theme]");
      var dark = root.dataset.theme === "dark";
      btn.querySelector(".psb__icon").innerHTML = dark ? ICON_SUN : ICON_MOON;
      btn.querySelector(".psb__label").textContent = dark ? "Light mode" : "Dark mode";
      btn.title = dark ? "Switch to light mode" : "Switch to dark mode";
      btn.setAttribute("aria-label", btn.title);
    }
    document.querySelectorAll("[data-psb-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (mobile()) root.classList.toggle("psb-open");
        else { root.dataset.sb = root.dataset.sb === "collapsed" ? "expanded" : "collapsed"; store.set("wk-sidebar", root.dataset.sb); }
        paintToggle();
      });
    });
    aside.querySelector("[data-psb-theme]").addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      store.set("wk-theme", root.dataset.theme);
      paintTheme();
      window.dispatchEvent(new CustomEvent("wk-theme", { detail: root.dataset.theme }));
    });
    // On mobile the sidebar closes after a choice, or when the page is clicked.
    aside.addEventListener("click", function (e) { if (mobile() && e.target.closest("a")) root.classList.remove("psb-open"); });
    document.addEventListener("click", function (e) {
      if (mobile() && root.classList.contains("psb-open") && !e.target.closest(".psb") && !e.target.closest(".psb__bar")) { root.classList.remove("psb-open"); paintToggle(); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("psb-open")) { root.classList.remove("psb-open"); paintToggle(); } });
    window.matchMedia("(max-width: 900px)").addEventListener("change", function () { root.classList.remove("psb-open"); paintToggle(); });
    paintToggle(); paintTheme();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
