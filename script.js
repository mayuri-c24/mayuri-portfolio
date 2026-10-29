/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const currentYear = document.getElementById("current-year");


/* =========================================
   MOBILE NAVIGATION
========================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );


        menuToggle.textContent =
            isOpen
                ? "✕"
                : "☰";

    });

}


/* =========================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================= */

const navigationItems =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationItems.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (
                navLinks &&
                menuToggle
            ) {

                navLinks.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );


                menuToggle.textContent =
                    "☰";
            }

        }
    );

});


/* =========================================
   CLOSE MENU WITH ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove(
                "active"
            );


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );


                menuToggle.textContent =
                    "☰";
            }

        }

    }
);


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !navLinks ||
            !menuToggle
        ) {
            return;
        }


        const clickedInsideMenu =
            navLinks.contains(event.target);


        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            navLinks.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navLinks.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );


            menuToggle.textContent =
                "☰";
        }

    }
);


/* =========================================
   DARK / LIGHT MODE
========================================= */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const darkModeEnabled =
                document.body.classList.contains(
                    "dark-mode"
                );


            themeToggle.textContent =
                darkModeEnabled
                    ? "☀️"
                    : "🌙";


            themeToggle.setAttribute(
                "aria-label",
                darkModeEnabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}