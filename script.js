document.addEventListener('DOMContentLoaded', function () {
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


