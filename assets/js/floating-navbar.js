/* assets/js/floating-navbar.js */

document.addEventListener("DOMContentLoaded", function () {
  
  const navbarHTML = `
    <nav id="naivik-floating-nav">

      <a href="index.html" class="nav-logo-container">
        <svg class="main-icon main-icon-ship" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-label="Naivik"><path d="M16 3v17"/><path d="M16 4c5 3 8 8 8 14H16"/><path d="M16 8c-3 2-5 6-5 10h5"/><path d="M4 21h24l-4 6H8z"/><path d="M2 30c3-1.5 5-1.5 7 0s4 1.500 7 0 5-1.500 7 0 4 1.500 7 0"/></svg>
      </a>

      <ul class="nav-menu">

        <li class="nav-item">
          <a href="approach.html" class="nav-link">The Naivik Approach</a>
        </li>

        <li class="nav-item">
          <a href="our-story.html" class="nav-link">
            About Us <span class="material-symbols-rounded caret">expand_more</span>
          </a>
          <div class="dropdown-menu-floating">
            <a href="our-story.html" class="dropdown-item-floating">Our Story</a>
            <a href="our-team.html" class="dropdown-item-floating">Our Team</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="contact-us.html" class="nav-link">Contact Us</a>
        </li>

        <li class="nav-item nav-cta-item">
          <a href="https://calendar.app.google/UyzEpp8WKm4fFmcP6" target="_blank" rel="noopener" class="nav-link nav-cta">
            Book Consultation
          </a>
        </li>

      </ul>
    </nav>
  `;

  const footerHTML = `
    <footer id="naivik-footer">
      <div class="nf-inner">
        <div class="nf-cols">
          <div class="nf-brand">
            <a href="index.html" class="nf-logo">
              <span class="material-symbols-rounded">explore</span> NAIVIK
            </a>
            <p>Bridging the gap between complex legacy systems and future-ready efficiency.</p>
          </div>
          <div class="nf-col">
            <h6>Company</h6>
            <a href="about-us.html">About Us</a>
            <a href="approach.html">The Naivik Approach</a>
            <a href="contact-us.html">Contact</a>
          </div>
        </div>
        <div class="nf-bottom">
          <span>&copy; 2026 Naivik. Operating name of QNE SOFTWARE SYSTEMS INC.</span>
          <span class="nf-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></span>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  document.body.classList.add("has-naivik-nav");

  // Replace each page's own footer with the shared one (the Accenture demo keeps its own)
  const oldFooters = document.querySelectorAll("footer:not(.reinvention-footer)");
  oldFooters.forEach((f, i) => { if (i > 0) f.remove(); });
  if (oldFooters.length) oldFooters[0].replaceWith(
    Object.assign(document.createElement("div"), { innerHTML: footerHTML }).firstElementChild
  );
  else if (!document.querySelector(".reinvention-footer")) document.body.insertAdjacentHTML("beforeend", footerHTML);
});
