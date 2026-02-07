/* assets/js/floating-navbar.js */

document.addEventListener("DOMContentLoaded", function () {
  
  const navbarHTML = `
    <nav id="naivik-floating-nav">
      
      <a href="index.html" class="nav-logo-container">
        <span class="material-symbols-rounded main-icon">diamond</span>
      </a>

      <ul class="nav-menu">

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="material-symbols-rounded">factory</span> Templates
          </a>
          <div class="dropdown-menu-floating">
            <a href="accenture.html" class="dropdown-item-floating">Accenture Inspired</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link active"> <span class="material-symbols-rounded">hub</span> Capabilities
          </a>
          <div class="dropdown-menu-floating">
            <a href="services.html" class="dropdown-item-floating">System Integration</a>
            <a href="services.html" class="dropdown-item-floating">Software Services</a>
            <a href="services.html" class="dropdown-item-floating">Recruitment</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="material-symbols-rounded">factory</span> Industries
          </a>
          <div class="dropdown-menu-floating">
            <a href="industries.html" class="dropdown-item-floating">Healthcare</a>
            <a href="industries.html" class="dropdown-item-floating">Finance & Banking</a>
            <a href="industries.html" class="dropdown-item-floating">Retail & E-commerce</a>
            <a href="industries.html" class="dropdown-item-floating">Manufacturing</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="careers.html" class="nav-link">
            <span class="material-symbols-rounded">group</span> Talent
          </a>
        </li>

        <li class="nav-item">
          <a href="about-us.html" class="nav-link">
            <span class="material-symbols-rounded">diversity_3</span> Team
          </a>
        </li>

        <li class="nav-item nav-cta-item">
          <a href="contact-us.html" class="nav-link nav-cta">
            Book Consultation
          </a>
        </li>

      </ul>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  const nav = document.getElementById("naivik-floating-nav");
  let closeTimeout = null;
  let isLatched = false;

  // Function to open the nav
  const openNav = () => {
    // If already open or latched, do nothing
    if (isLatched || nav.classList.contains("expanded")) return;

    nav.classList.add("expanded");
    isLatched = true;

    // LATCH: Keep it open for 1.5s regardless of mouse position
    setTimeout(() => {
      isLatched = false;
      
      // After 1.5s, checks if mouse is NOT over the nav
      // (We use the :hover CSS selector check as a proxy for cursor position)
      if (!nav.matches(':hover')) {
        nav.classList.remove("expanded");
      }
    }, 1500);
  };

  // Function to handle closing
  const closeNav = () => {
    // Only close if we are NOT in the 1.5s latched period
    if (!isLatched) {
      // Add a tiny buffer so it doesn't snap close if moving between gaps
      closeTimeout = setTimeout(() => {
        nav.classList.remove("expanded");
      }, 100); 
    }
  };

  // 1. Mouse enters the nav (or the icon)
  nav.addEventListener("mouseenter", () => {
    clearTimeout(closeTimeout); // Cancel any pending close
    openNav();
  });

  // 2. Mouse leaves the nav
  nav.addEventListener("mouseleave", () => {
    closeNav();
  });
  
  // 3. (Optional) Mobile/Click trigger remains the same
  const trigger = document.getElementById("navTrigger"); // If you have a specific button
  if(trigger) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("expanded");
      });
  }
});