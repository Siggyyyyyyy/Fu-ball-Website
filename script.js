document.addEventListener('DOMContentLoaded', function () {
    // Hamburger-Menü
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');

    hamburgerIcon.addEventListener('click', () => {
        hamburgerMenu.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    closeMenu.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    // Fade-In/Out-Animation
    const hiddenElements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.8,
        }
    );
    hiddenElements.forEach((el) => observer.observe(el));

    // Wörter wechseln
    const words = ["basisnah", "nachhaltig", "zeitgemäß"];
    let currentIndex = 0;

    const animatedText = document.getElementById("animated-text");
    const updateTextContent = () => {
        animatedText.classList.add("hiddenn");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            animatedText.textContent = words[currentIndex];
            animatedText.classList.remove("hiddenn");
        }, 500); // Muss mit CSS-Transition übereinstimmen
    };

    setInterval(updateTextContent, 2400);

    // Dynamischer Zeilenumbruch
    const animatedTextContainer = document.querySelector('.header-head-text p');

    const updateLayout = () => {
        const viewportWidth = window.innerWidth;

        // Br und Layout anpassen, ohne `animatedText` neu zu erstellen
        if (viewportWidth <= 768) {
            if (!animatedTextContainer.innerHTML.includes("<br>")) {
                animatedTextContainer.innerHTML = `Unser Fußball -<br>`;
                animatedTextContainer.appendChild(animatedText);
            }
        } else {
            if (animatedTextContainer.innerHTML.includes("<br>")) {
                animatedTextContainer.innerHTML = `Unser Fußball - `;
                animatedTextContainer.appendChild(animatedText);
            }
        }
    };

    // Initial überprüfen und bei Fenstergröße ändern
    updateLayout();
    window.addEventListener('resize', updateLayout);

    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltip-text');

        // Funktion für Touch-Geräte (Click)
        const handleTouch = (e) => {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
            e.stopPropagation(); // Verhindert Schließen durch document-Click
        };

        // Funktion für Desktop (Hover)
        const handleMouseOver = () => {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        };

        const handleMouseOut = () => {
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        };

        // Ereignisse basierend auf Gerätetyp hinzufügen
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            // Für Touch-Geräte
            tooltip.addEventListener('click', handleTouch);

            // Schließe den Tooltip bei einem Klick irgendwo anders
            document.addEventListener('click', () => {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            });
        } else {
            // Für Desktop (Hover)
            tooltip.addEventListener('mouseover', handleMouseOver);
            tooltip.addEventListener('mouseout', handleMouseOut);
        }
    });
});
