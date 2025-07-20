// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    // Toggle menu function
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links (mobile only)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if(window.innerWidth <= 767.98) {
                toggleMenu();
            }
        });
    });
    // Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if(window.innerWidth <= 767.98) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if(window.innerWidth <= 767.98 && 
           nav.classList.contains('active') &&
           !e.target.closest('nav') && 
           !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });

    // Reset menu on window resize
    window.addEventListener('resize', function() {
        if(window.innerWidth > 767.98 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});
    // Close menu when clicking outside (mobile only)
    document.addEventListener('click', function(e) {
        if(window.innerWidth <= 767.98 && 
           nav.classList.contains('active') &&
           !e.target.closest('nav') && 
           !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
    
    // Reset menu on window resize
    window.addEventListener('resize', function() {
        if(window.innerWidth > 767.98 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Additional functions can be added below
    // ...
});