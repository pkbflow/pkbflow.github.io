(function () {
    const themes = ["light", "dark", "red", "blue"];

    function normalizeTheme(theme) {
        return themes.includes(theme) ? theme : "light";
    }

    function formatLabel(theme) {
        return theme.charAt(0).toUpperCase() + theme.slice(1);
    }

    function updateLabel(theme) {
        const el = document.getElementById("theme-label");
        if (el) {
            el.textContent = formatLabel(theme);
        }
    }

    function updateActive(theme) {
        document.querySelectorAll("#theme-menu li").forEach((item) => {
            item.classList.toggle("active", item.dataset.theme === theme);
        });
    }

    function applyTheme(theme) {
        const safeTheme = normalizeTheme(theme);

        if (safeTheme === "light") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", safeTheme);
        }

        localStorage.setItem("theme", safeTheme);
        updateLabel(safeTheme);
        updateActive(safeTheme);
    }

    function getSavedTheme() {
        return normalizeTheme(localStorage.getItem("theme") || "light");
    }

    // pagemod 기본 테마 토글 이벤트와 충돌 방지: 기존 #theme-toggle 리스너 제거
    function killDefaultThemeToggle() {
        const oldBtn = document.getElementById("theme-toggle");
        if (!oldBtn) return;
        // 기존 이벤트 리스너를 무력화하기 위해 clone으로 교체
        const newBtn = oldBtn.cloneNode(true);
        oldBtn.parentNode.replaceChild(newBtn, oldBtn);
    }

    document.addEventListener("DOMContentLoaded", function () {
        // 기본 테마 토글 이벤트 제거
        killDefaultThemeToggle();

        const currentTheme = getSavedTheme();
        applyTheme(currentTheme);

        const dropdown = document.querySelector(".theme-dropdown");
        const button = document.getElementById("theme-toggle");
        const menu = document.getElementById("theme-menu");

        if (!dropdown || !button || !menu) return;

        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            dropdown.classList.toggle("open");
        });

        menu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                applyTheme(item.dataset.theme);
                dropdown.classList.remove("open");
            });
        });

        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    });
})();