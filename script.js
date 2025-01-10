document.addEventListener('DOMContentLoaded', function () {
    // hamburgermenü
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

    // fadein animation (tauscht klassen aus)
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

    // wörterwechsel im header
    const words = ["basisnah", "nachhaltig", "zeitgemäß"];
    let currentIndex = 0;

    const animatedText = document.getElementById("animated-text");
    const updateTextContent = () => {
        animatedText.classList.add("hiddenwordswitch");
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            animatedText.textContent = words[currentIndex];
            animatedText.classList.remove("hiddenwordswitch");
        }, 500); // Muss mit CSS-Transition übereinstimmen
    };

    setInterval(updateTextContent, 2400);

    const animatedTextContainer = document.querySelector('.header-head-text p');

    const updateLayout = () => {
        const viewportWidth = window.innerWidth;

        // macht, dass <br> automatisch ab einer gewissen breite hinzugefügt wird 
        // weil "basisnah" ein kürzeres wort ist uns sonst bie bestimmten Gröen nicht den absazu macht
        if (viewportWidth <= 800) {
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

    updateLayout();
    window.addEventListener('resize', updateLayout);




    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltip-text');

        // für touchgeräte
        const handleTouch = (e) => {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
            e.stopPropagation(); // Verhindert Schließen durch document-Click
        };

        // für desktop
        const handleMouseOver = () => {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        };

        const handleMouseOut = () => {
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        };

        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            // für touchgeräte
            tooltip.addEventListener('click', handleTouch);

            // schließt bei erneutem klick
            document.addEventListener('click', () => {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            });
        } else {
            // für desktop
            tooltip.addEventListener('mouseover', handleMouseOver);
            tooltip.addEventListener('mouseout', handleMouseOut);
        }
    });
});
