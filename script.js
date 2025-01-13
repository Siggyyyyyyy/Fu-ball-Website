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
            threshold: 0.7,
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
        }, 500);
    };

    setInterval(updateTextContent, 2400);



    // responsive text
    const animatedTextContainer = document.querySelector('.header-head-text p');

    const updateLayout = () => {
        const viewportWidth = window.innerWidth;

        // macht, dass <br> automatisch ab einer gewissen breite hinzugefügt wird 
        // weil "basisnah" ein kürzeres wort ist uns sonst bie bestimmten Größen nicht den absatz macht
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




    // tooltip (chatGPT)
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




    // Sounds
    const hoverSound = new Audio('audio/Auufschrei.mp3');
    const clickSound = new Audio('audio/jubel.mp3');
    const button = document.getElementById('action-button');

    clickSound.volume = 0.2;
    hoverSound.volume = 0.2;

    let hoverSoundPlaying = false;
    let clickSoundPlaying = false;

    button.addEventListener('mouseenter', () => {
        if (!hoverSoundPlaying && !clickSoundPlaying) {
            hoverSoundPlaying = true;
            hoverSound.currentTime = 0;
            hoverSound.play();

            setTimeout(() => {
                hoverSoundPlaying = false;
            }, 5000);
        }
    });


    button.addEventListener('click', () => {
        if (!clickSoundPlaying) {

            if (hoverSoundPlaying) {
                hoverSound.pause();
                hoverSoundPlaying = false;
            }

            clickSoundPlaying = true;
            clickSound.currentTime = 0;
            clickSound.play();


            setTimeout(() => {
                clickSoundPlaying = false;
            }, 8000);
        }
    });




    // read more button
    const toggleButton = document.getElementById("toggle-text");
    const shortText = document.querySelector(".short-text");
    const fullText = document.querySelector(".full-text");

    toggleButton.addEventListener("click", () => {
        if (fullText.classList.contains("read-more")) {
            fullText.classList.remove("read-more");
            toggleButton.textContent = "Weniger lesen";
        } else {
            fullText.classList.add("read-more");
            toggleButton.textContent = "Mehr lesen";
        }
    });

});
