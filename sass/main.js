// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Language toggle functionality
    const langToggle = document.getElementById("lang-toggle");
    const floatingButtons = document.getElementById("floating-buttons");

    // Only proceed if the language toggle button exists
    if (!langToggle) {
        console.error("Language toggle button not found");
        return;
    }

    const texts = {
        en: {
            intro: "Hello! I’m a person who loves to make stuff.",
            bio: "The last few years back I fell in love with code when I got my very first BASIC program to run. Then I've been spending <a href='blogs/index.html'>my days</a> writing more code, exploring new ideas, and pushing myself to learn more.",
            work: "These days, I <a href='studio/index.html'>make stuff on the web</a>. You can send me a <a href='https://wa.link/yq0ozr' target='_blank'>message</a> on WhatsApp or send me an email to my usual username at Gmail.",
            thanks: "Thanks for stopping by.",

            // Studio page translations
            studioIntro: "I make small curiosities on the web for the joy of it.",
            studioDescription: "I believe the web is the greatest creative platform of all time. I try to make things that are interesting, beautiful, and easy to use. Here are a few things I’ve made for fun.",
            proj1Title: "Bistro Marseille",
            proj1Desc: "An elegant website for a restaurant with a menu, photos, and online booking.",
            proj2Title: "Plombier Express",
            proj2Desc: "A clear presentation of a plumber's services with a quick contact button.",
            proj3Title: "Mode Locale",
            proj3Desc: "An online store to sell clothing and accessories from Marseille.",
            proj4Title: "Studio Lumière",
            proj4Desc: "A modern portfolio for a photographer with an image gallery and contact form.",
            proj5Title: "Vivre Marseille",
            proj5Desc: "A blog about local culture with articles, an events calendar, and a newsletter.",
            proj6Title: "Solidarité Marseille",
            proj6Desc: "An informational website for a local non-profit with a presentation, events, and a donation form.",
            studioContact: "Questions, notes, and bug reports are all welcome. You can send me a message on <a href='https://wa.link/yq0ozr'>WhatsApp</a>",
            studioThanks: "Thanks for looking around."
        },
        fr: {
            intro: "Bonjour ! Je suis une personne qui adore créer des choses.",
            bio: "Ces dernières années, je suis tombé amoureux du code lorsque j'ai fait tourner mon tout premier programme BASIC. Depuis, je passe <a href='blogs/index.html'>mes journées</a> à écrire du code, explorer de nouvelles idées et apprendre toujours plus.",
            work: "Ces jours-ci, je <a href='studio/index.html'>crée sur le web</a>. Vous pouvez m'envoyant un <a href='https://wa.link/yq0ozr' target='_blank'>message</a> sur WhatsApp ou envoyez-moi un e-mail à mon nom d'utilisateur habituel sur Gmail.",
            thanks: "Merci de votre visite.",

            // Studio page translations
            studioIntro: "Je crée de petites curiosités sur le web pour le plaisir.",
            studioDescription: "Je crois que le web est la plus grande plateforme créative de tous les temps. J'essaie de créer des choses intéressantes, belles et faciles à utiliser. Voici quelques projets que j'ai réalisés pour le plaisir.",
            proj1Title: "Bistro Marseille",
            proj1Desc: "Un site élégant pour un restaurant avec menu, photos et réservation en ligne.",
            proj2Title: "Plombier Express",
            proj2Desc: "Une présentation claire des services d'un plombier avec un bouton de contact rapide.",
            proj3Title: "Mode Locale",
            proj3Desc: "Une boutique en ligne pour vendre des vêtements et accessoires de Marseille.",
            proj4Title: "Studio Lumière",
            proj4Desc: "Un portfolio moderne pour un photographe avec galerie d'images et formulaire de contact.",
            proj5Title: "Vivre Marseille",
            proj5Desc: "Un blog sur la culture locale avec des articles, un calendrier des événements et une newsletter.",
            proj6Title: "Solidarité Marseille",
            proj6Desc: "Un site d'information pour une association locale avec présentation, événements et formulaire de dons.",
            studioContact: "Questions, notes et rapports de bugs sont les bienvenus. Vous pouvez m'envoyer un message sur <a href='https://wa.link/yq0ozr'>WhatsApp</a>.",
            studioThanks: "Merci de votre visite."
        }
    };

    let currentLang = "en";

    // Function to safely update text content if element exists
    function updateElementText(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = text;
        }
    }

    // Function to update language
    function updateLanguage() {
        const t = texts[currentLang];

        // Update main page elements if they exist
        updateElementText("intro", t.intro);
        updateElementText("bio", t.bio);
        updateElementText("work", t.work);
        updateElementText("thanks", t.thanks);

        // Update studio page elements if they exist
        updateElementText("studio-intro", t.studioIntro);
        updateElementText("studio-description", t.studioDescription);
        updateElementText("proj1-title", t.proj1Title);
        updateElementText("proj1-desc", t.proj1Desc);
        updateElementText("proj2-title", t.proj2Title);
        updateElementText("proj2-desc", t.proj2Desc);
        updateElementText("proj3-title", t.proj3Title);
        updateElementText("proj3-desc", t.proj3Desc);
        updateElementText("proj4-title", t.proj4Title);
        updateElementText("proj4-desc", t.proj4Desc);
        updateElementText("proj5-title", t.proj5Title);
        updateElementText("proj5-desc", t.proj5Desc);
        updateElementText("proj6-title", t.proj6Title);
        updateElementText("proj6-desc", t.proj6Desc);
        updateElementText("studio-contact", t.studioContact);
        updateElementText("studio-thanks", t.studioThanks);

        // Update button title (accessibility)
        langToggle.setAttribute("title", currentLang === "en" ? "Changer en Français" : "Switch to English");
    }

    // Toggle language
    langToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("Language toggle clicked");
        currentLang = currentLang === "en" ? "fr" : "en";
        updateLanguage();

        // Save language preference to localStorage
        localStorage.setItem("preferredLanguage", currentLang);
    });

    // Check for saved language preference
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        currentLang = savedLanguage;
        updateLanguage();
    }

});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuIcon = menuToggle.querySelector("i"); // get the <i> inside the button

let menuOpen = false;

if (menuToggle && navMenu && menuIcon) {
    menuToggle.addEventListener("click", function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            // Change to X icon and show menu
            menuIcon.classList.remove("fa-brands", "fa-figma");
            menuIcon.classList.add("fa-solid", "fa-xmark");
            navMenu.classList.add("show");
        } else {
            // Change back to Figma icon and hide menu
            menuIcon.classList.remove("fa-solid", "fa-xmark");
            menuIcon.classList.add("fa-brands", "fa-figma");
            navMenu.classList.remove("show");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (menuOpen &&
            !menuToggle.contains(event.target) &&
            !navMenu.contains(event.target)) {
            menuOpen = false;
            menuIcon.classList.remove("fa-solid", "fa-xmark");
            menuIcon.classList.add("fa-brands", "fa-figma");
            navMenu.classList.remove("show");
        }
    });
}


// Theme toggle
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    // Toggle light theme class on body
    document.body.classList.toggle("light-theme");

    // Change icon dynamically
    const icon = themeButton.querySelector("i");
    if (document.body.classList.contains("light-theme")) {
        // Light theme active → show sun
        icon.classList.remove("fa-circle-half-stroke");
        icon.classList.add("fa-sun");
    } else {
        // Dark theme active → show half-moon
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-circle-half-stroke");
    }
});
