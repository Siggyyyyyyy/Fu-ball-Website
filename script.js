document.addEventListener('DOMContentLoaded', function () {
    // Hamburgermenü         ------>

    // Hamburger-Icon und Menü
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');

    // Menü öffnen
    hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.add('active'); // Menü sichtbar machen
        document.body.classList.add('no-scroll'); // Scrollen deaktivieren
    });

    // Menü schließen
    closeMenu.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active'); // Menü verstecken
        document.body.classList.remove('no-scroll'); // Scrollen wieder aktivieren
    });
    // Hamburgermenü         ----->

    // Fade-In/Out-Animation ----->

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Beobachtung für dieses Element beenden
            }
        });
    }, {
        threshold: 0.8, // Element wird sichtbar, wenn 20% im Viewport sind
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // Fade-In/Out-Animation ----->

});
