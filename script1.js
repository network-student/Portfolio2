/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}


/* Fermer le menu après avoir cliqué */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* =========================
   MODE SOMBRE
========================= */

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

            localStorage.setItem("theme", "dark");

        } else {

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

            localStorage.setItem("theme", "light");

        }

    });


    /* Restaurer le thème choisi */

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        const icon = themeBtn.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }

    }

}


/* =========================
   BOUTON RETOUR EN HAUT
========================= */

const topBtn = document.getElementById("top-btn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   FORMULAIRE DE CONTACT
========================= */

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Merci pour votre message ! " +
            "Le formulaire sera connecté à un service d'envoi prochainement."
        );

        form.reset();

    });

}


/* =========================
   ANNÉE AUTOMATIQUE
========================= */

const currentYear = new Date().getFullYear();

document.querySelectorAll(".footer p").forEach(element => {

    element.innerHTML =
        `© ${currentYear} Benjamin. Tous droits réservés.`;

});


/* =========================
   ANIMATION AU SCROLL
========================= */

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .info-box, .timeline-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});
```
