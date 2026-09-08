(() => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const updateToggle = () => {
    if (!toggle) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    toggle.textContent = isDark ? "Light theme" : "Dark theme";
    toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  };
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      updateToggle();
    });
    updateToggle();
  }

  document.querySelectorAll("[data-print]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => window.print());
  });

  // Directory URLs work on Pages; explicit filenames also work in the staged file preview.
  if (location.protocol === "file:") {
    document.querySelectorAll("a[href]").forEach((link) => {
      const url = new URL(link.getAttribute("href"), location.href);
      if (url.protocol === "file:" && url.pathname.endsWith("/")) {
        url.pathname += "index.html";
        link.href = url.href;
      }
    });
  }
})();
