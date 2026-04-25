document.addEventListener('DOMContentLoaded', () => {
    // 1. Scorrimento fluido per i link della navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            // Calcola la posizione tenendo conto della navbar fissa (circa 90px)
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 90;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // 2. Animazione "Fade-In" allo scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // L'elemento appare quando il 15% è visibile
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ferma l'osservazione una volta apparso
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});