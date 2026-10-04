document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic State-Aware Shell Header Generation
    const pathName = window.location.pathname.split("/").pop() || "index.html";
    const navShellElement = document.getElementById("dynamic-navbar");

    if (navShellElement) {
        navShellElement.innerHTML = `
            <div class="container">
                <div class="nav-container">
                    <a href="index.html" class="nav-logo">Bansilal.io</a>
                    <div class="nav-links-wrapper">
                        <nav class="nav-links">
                            <a href="index.html" class="${pathName === 'index.html' ? 'active' : ''}">Home</a>
                            <a href="about.html" class="${pathName === 'about.html' ? 'active' : ''}">About</a>
                            <a href="services.html" class="${pathName === 'services.html' ? 'active' : ''}">Services</a>
                            <a href="testimonials.html" class="${pathName === 'testimonials.html' ? 'active' : ''}">Testimonials</a>
                            <a href="clients.html" class="${pathName === 'clients.html' ? 'active' : ''}">Clients</a>
                            <a href="articles.html" class="${pathName === 'articles.html' ? 'active' : ''}">Articles</a>
                        </nav>
                        <button id="theme-toggle" class="theme-btn" aria-label="Toggle Page Color State">☀️ Light</button>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. Persistent Cross-Page Theme Routing System
    const themeButton = document.getElementById("theme-toggle");
    const activeCachedPreference = localStorage.getItem("portfolio-theme") || "light";

    document.documentElement.setAttribute("data-theme", activeCachedPreference);
    syncToggleText(activeCachedPreference);

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const currentSetting = document.documentElement.getAttribute("data-theme");
            const targetsNewSetting = currentSetting === "light" ? "dark" : "light";
            
            document.documentElement.setAttribute("data-theme", targetsNewSetting);
            localStorage.setItem("portfolio-theme", targetsNewSetting);
            syncToggleText(targetsNewSetting);
        });
    }

    function syncToggleText(mode) {
        if (!themeButton) return;
        themeButton.innerHTML = mode === "light" ? "🌙 Dark" : "☀️ Light";
    }
});
