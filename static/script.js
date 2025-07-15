document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const languageSwitcher = document.getElementById("languageSwitcher");

  // Mobile menu toggle logic
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = menu.classList.toggle("hidden");

      // Toggle icons if they exist
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
      }

      // Update ARIA attribute
      menuBtn.setAttribute("aria-expanded", !isHidden);
    });
  }

  // Auto-close mobile menu on link click
  if (menu) {
    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
});