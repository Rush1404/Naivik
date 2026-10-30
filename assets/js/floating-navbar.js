/* assets/js/floating-navbar.js */

document.addEventListener("DOMContentLoaded", function () {
  
  const navbarHTML = `
    <nav id="naivik-floating-nav">

      <a href="index.html" class="nav-logo-container">
        <span class="material-symbols-rounded main-icon">diamond</span>
      </a>

      <ul class="nav-menu">

        <li class="nav-item">
          <a href="approach.html" class="nav-link">
            The Naivik Approach <span class="material-symbols-rounded caret">expand_more</span>
          </a>
          <div class="dropdown-menu-floating">
            <a href="approach.html" class="dropdown-item-floating">Our Approach</a>
          </div>
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
          <div class="nf-col">
            <h6>Solutions</h6>
            <a href="services.html">AI Agent Development</a>
            <a href="services.html">Workflow &amp; Systems Optimizarion</a>
            <a href="services.html">Digital Transformation</a>
            <a href="careers.html">High-Stakes Recruiting</a>
          </div>
        </div>
        <div class="nf-bottom">
          <span>&copy; 2026 Naivik Technologies. All rights reserved.</span>
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
