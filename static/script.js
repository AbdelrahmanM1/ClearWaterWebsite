document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const navbar = document.getElementById("navbar");

  // Mobile menu toggle logic
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = menu.classList.toggle("hidden");

      // Toggle icons
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

  // Scroll behavior styling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add(
        "bg-white/60",
        "backdrop-blur-lg",
        "shadow-xl",
        "py-1"
      );
      navbar.classList.remove("bg-white/90", "py-3");
    } else {
      navbar.classList.remove(
        "bg-white/60",
        "backdrop-blur-lg",
        "shadow-xl",
        "py-1"
      );
      navbar.classList.add("bg-white/90", "py-3");
    }
  });
});

// Reveal navbar smoothly after load to prevent layout flicker
window.addEventListener("load", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.remove("invisible");
  navbar.classList.add("opacity-100");
});
