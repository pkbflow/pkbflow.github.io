(function () {
    const themes = ["light", "dark", "red", "blue"];

    function normalizeTheme(theme) {
        return themes.includes(theme) ? theme : "light";
    }

    function getNextTheme(theme) {
        const currentIndex = themes.indexOf(theme);
        return themes[(currentIndex + 1) % themes.length];
    }

    function updateThemeIcon(currentTheme) {
        const icon = document.getElementById("theme-icon");
        if (!icon) return;

        const nextTheme = getNextTheme(currentTheme);

        if (nextTheme === "light") {
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3v2"></path>
                    <path d="M12 19v2"></path>
                    <path d="M3 12h2"></path>
                    <path d="M19 12h2"></path>
                    <path d="M5.64 5.64l1.41 1.41"></path>
                    <path d="M16.95 16.95l1.41 1.41"></path>
                    <path d="M5.64 18.36l1.41-1.41"></path>
                    <path d="M16.95 7.05l1.41-1.41"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                </svg>
            `;
        } else if (nextTheme === "dark") {
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        } else if (nextTheme === "red") {
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    
                    <!-- 바깥 불 (크기 키움) -->
                    <path d="M12 2C9 6 7.5 8.5 7.5 12a4.5 4.5 0 0 0 9 0c0-2.8-1.5-5.3-4.5-10z"></path>
                    
                    <!-- 안쪽 불 -->
                    <path d="M12 10c-1.5 1.5-2.5 2.8-2.5 4.2a2.5 2.5 0 0 0 5 0c0-1.4-.8-2.7-2.5-4.2z"></path>
                </svg>
            `;
        } else if (nextTheme === "blue") {
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3C9.5 6.2 7 8.9 7 12a5 5 0 0 0 10 0c0-3.1-2.5-5.8-5-9z"></path>
                </svg>
            `;
        }
    }

    function applyTheme(theme) {
        const safeTheme = normalizeTheme(theme);

        if (safeTheme === "light") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", safeTheme);
        }

        localStorage.setItem("theme", safeTheme);
        updateThemeIcon(safeTheme);
    }

    function getSavedTheme() {
        return normalizeTheme(localStorage.getItem("theme") || "light");
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyTheme(getSavedTheme());

        const button = document.getElementById("theme-toggle");
        if (button) {
            button.addEventListener("click", function () {
                const next = getNextTheme(getSavedTheme());
                applyTheme(next);
            });
        }
    });
})();