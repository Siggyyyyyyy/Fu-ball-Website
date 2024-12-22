document.addEventListener('DOMContentLoaded', function () {
    
    
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

    /*

    let scrollTimeout;

    document.addEventListener('scroll', () => {
        // Setze das Scroll-Timeout neu
        clearTimeout(scrollTimeout);
    
        scrollTimeout = setTimeout(() => {
            const anchors = document.querySelectorAll('.image-container img');
            const scrollPosition = window.scrollY + window.innerHeight;
    
            let closestAnchor = null;
            let closestDistance = Infinity;
    
            anchors.forEach(anchor => {
                const anchorPosition = anchor.getBoundingClientRect().bottom + window.scrollY;
                const distance = Math.abs(anchorPosition - scrollPosition);
    
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestAnchor = anchor;
                }
            });
    
            // Scrollen nur, wenn wir zwischen zwei Anchors sind
            if (closestAnchor && closestDistance > 5) {
                closestAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }, 200); // Warte 200ms nach dem letzten Scroll-Event
    });
    */
    
});


