// assets/js/floating-navbar.js
// Shared navbar + footer. North Star mark = assets/img/north-star/option-1-polaris.svg (swap here to change the logo).

document.addEventListener("DOMContentLoaded", function () {

  const northStar = `<svg class="main-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="32" r="27" stroke="#F2CF6B" stroke-opacity=".45" stroke-width="1.5"/><path fill="#F2CF6B" d="M32 4C34 22 42 30 60 32C42 34 34 42 32 60C30 42 22 34 4 32C22 30 30 22 32 4Z"/></svg>`;

  const here = location.pathname.split("/").pop().replace(/\.html$/, "") || "index";
  const active = (name) => (here === name ? " active" : "");

  const navbarHTML = `
    <div class="nav-overlay"></div>
    <nav id="naivik-floating-nav" aria-label="Main">
      <a href="index.html" class="nav-logo-container" aria-label="Naivik home">
        ${northStar}<span class="nav-wordmark">NAIVIK</span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
      <ul class="nav-menu">
        <li class="nav-item"><a href="approach.html" class="nav-link${active("approach")}">The Naivik Approach</a></li>
        <li class="nav-item"><a href="our-story.html" class="nav-link${active("our-story")}">About Us</a></li>
        <li class="nav-item nav-cta-item"><a href="contact-us.html" class="nav-link nav-cta">Contact Us</a></li>
      </ul>
    </nav>
  `;

  const footerHTML = `
    <footer id="naivik-footer">
      <div class="nf-inner">
        <div class="nf-cols">
          <div class="nf-brand">
            <a href="index.html" class="nf-logo">${northStar} NAIVIK</a>
            <p>Bridging the gap between complex legacy systems and future-ready efficiency.</p>
          </div>
          <div class="nf-col">
            <h6>Company</h6>
            <a href="our-story.html">About Us</a>
            <a href="approach.html">The Naivik Approach</a>
            <a href="contact-us.html">Contact Us</a>
          </div>
        </div>
        <div class="nf-bottom">
          <span>&copy; 2026 Naivik. Operating name of QNE SOFTWARE SYSTEMS INC.</span>
          <span class="nf-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></span>
        </div>
      </div>
    </footer>
  `;

  document.head.insertAdjacentHTML("beforeend",
    '<link rel="icon" type="image/svg+xml" href="../assets/img/north-star/option-1-polaris.svg">');

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  document.body.classList.add("has-naivik-nav");

  // Mobile drawer
  const toggle = document.querySelector(".nav-toggle");
  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  document.querySelector(".nav-overlay").addEventListener("click", () => setOpen(false));
  document.querySelectorAll(".nav-menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

  // Replace each page's own footer with the shared one
  const oldFooters = document.querySelectorAll("footer:not(.reinvention-footer)");
  oldFooters.forEach((f, i) => { if (i > 0) f.remove(); });
  if (oldFooters.length) oldFooters[0].replaceWith(
    Object.assign(document.createElement("div"), { innerHTML: footerHTML }).firstElementChild
  );
  else if (!document.querySelector(".reinvention-footer")) document.body.insertAdjacentHTML("beforeend", footerHTML);
});
