document.addEventListener("DOMContentLoaded", () => {
    // 1. Core Dynamic Navigation Setup with Explicit Path Matching
    const currentUrlPath = window.location.pathname;
    const currentPageFile = currentUrlPath.split("/").pop() || "index.html";
    const navbarElement = document.getElementById("dynamic-navbar");

    if (navbarElement) {
        navbarElement.innerHTML = `
            <div class="container">
                <div class="nav-container">
                    <a href="index.html" class="nav-logo">Haudakari.io</a>
                    <div class="nav-links-wrapper">
                        <nav class="nav-links">
                            <a href="index.html" class="${currentPageFile === 'index.html' ? 'active' : ''}">Home</a>
                            <a href="about.html" class="${currentPageFile === 'about.html' ? 'active' : ''}">About</a>
                            <a href="services.html" class="${currentPageFile === 'services.html' ? 'active' : ''}">Services</a>
                            <a href="testimonials.html" class="${currentPageFile === 'testimonials.html' ? 'active' : ''}">Testimonials</a>
                            <a href="clients.html" class="${currentPageFile === 'clients.html' ? 'active' : ''}">Clients</a>
                            <a href="articles.html" class="${currentPageFile === 'articles.html' ? 'active' : ''}">Articles</a>
                        </nav>
                        <button id="theme-toggle" class="theme-btn" aria-label="Toggle Theme">☀️ Light</button>
                    </div>
                </div>
            </div>
        `;
    }

    // 2. Persistent State Theme Routing Engine
    const themeToggleButton = document.getElementById("theme-toggle");
    const activeSavedTheme = localStorage.getItem("portfolio-theme") || "light";

    // Establish Base Attributes Instantly
    document.documentElement.setAttribute("data-theme", activeSavedTheme);
    updateToggleButtonVisual(activeSavedTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            const targetedTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
            
            document.documentElement.setAttribute("data-theme", targetedTheme);
            localStorage.setItem("portfolio-theme", targetedTheme);
            updateToggleButtonVisual(targetedTheme);
        });
    }

    function updateToggleButtonVisual(theme) {
        if (!themeToggleButton) return;
        themeToggleButton.innerHTML = theme === "light" ? "🌙 Dark" : "☀️ Light";
    }
});
