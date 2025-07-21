// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Initialize ARIA attributes for accessibility
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

    // Toggle menu
    function toggleMenu() {
        const isActive = menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
        menuToggle.setAttribute('aria-expanded', isActive);
    }

    // Event: Toggle menu on click
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Event: Close menu on nav link click (only on mobile)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767.98) {
                toggleMenu();
            }
        });
    });

    // Event: Close menu when clicking outside (mobile only)
    document.addEventListener('click', function (e) {
        if (
            window.innerWidth <= 767.98 &&
            nav.classList.contains('active') &&
            !e.target.closest('nav') &&
            !e.target.closest('.menu-toggle')
        ) {
            toggleMenu();
        }
    });

    // Event: Close mobile menu if resizing to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767.98 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Smooth scroll for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Lazy-load AdSense (if present)
    if (typeof adsbygoogle !== 'undefined') {
        document.addEventListener('click', function () {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }, { once: true });
    }
});
