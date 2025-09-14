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
            bio: "Two years ago I fell in love with code when I got my very first BASIC program to run. Then I've been spending <a href='blogs/index.html'>my days</a> writing more code, exploring new ideas, and pushing myself to learn more.",
            work: "These days, I <a href='studio/index.html'>make stuff on the web</a>. You can find me on WhatsApp by sending me a <a href='https://wa.link/yq0ozr' target='_blank'>message</a>.",
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
            bio: "Il y a deux ans, je suis tombé amoureux du code lorsque j'ai fait fonctionner mon tout premier programme BASIC. Depuis, je passe <a href='blogs/index.html'>mes journées</a> à écrire du code, explorer de nouvelles idées et apprendre toujours plus.",
            work: "Ces jours-ci, je <a href='studio/index.html'>crée sur le web</a>. Vous pouvez me trouver sur WhatsApp en m'envoyant un <a href='https://wa.link/yq0ozr' target='_blank'>message</a>.",
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
        updateElementText("studio-description", t.studioDesc);
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

    // Ultra-smooth scrolling for floating buttons
    if (floatingButtons) {
        let targetY = 10;
        let currentY = 10;
        let animationId = null;
        let lastScrollY = window.scrollY;

        // Very gentle easing function for extremely smooth movement
        function ultraSmoothEase(t) {
            return 1 - Math.pow(1 - t, 2); // Quadratic easing for very smooth movement
        }

        function animate() {
            // Very slow interpolation for ultra-smooth movement
            const progress = 0.03; // Reduced from 0.08 to make it much slower
            currentY = currentY + (targetY - currentY) * ultraSmoothEase(progress);

            floatingButtons.style.top = `${currentY}px`;
            animationId = requestAnimationFrame(animate);
        }

        // Initialize position and set buttons to always be stacked vertically
        floatingButtons.style.flexDirection = "column";
        floatingButtons.style.borderRadius = "20px";
        floatingButtons.style.top = `${currentY}px`;
        animationId = requestAnimationFrame(animate);

        let scrollTimeout;
        window.addEventListener("scroll", () => {
            // Clear previous timeout
            clearTimeout(scrollTimeout);

            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = maxScroll > 0 ? scrollPosition / maxScroll : 0;

            // Calculate target position with boundaries
            const maxY = window.innerHeight - floatingButtons.offsetHeight - 5;
            targetY = 10 + (maxY - 10) * scrollPercent;

            // Ensure targetY stays within boundaries
            targetY = Math.max(10, Math.min(targetY, maxY));

            // Longer debounce for smoother performance
            scrollTimeout = setTimeout(() => {
                // Additional adjustments after scrolling stops if needed
            }, 200);
        });

        // Clean up animation on page unload
        window.addEventListener('beforeunload', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    let menuOpen = false;

    // Menu toggle functionality
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            menuOpen = !menuOpen;

            if (menuOpen) {
                // Change to X icon and show menu
                menuToggle.textContent = "✕";
                navMenu.classList.add("show");
            } else {
                // Change back to hamburger icon and hide menu
                menuToggle.textContent = "☰";
                navMenu.classList.remove("show");
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (menuOpen &&
                !menuToggle.contains(event.target) &&
                !navMenu.contains(event.target)) {
                menuOpen = false;
                menuToggle.textContent = "☰";
                navMenu.classList.remove("show");
            }
        });
    }
});
