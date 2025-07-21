document.addEventListener('DOMContentLoaded', function() {
    // Initialize AdSense
    (adsbygoogle = window.adsbygoogle || []).push({});
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 991.98) {
                menuToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple validation
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                emailInput.style.borderColor = '#e74c3c';
                return;
            }
            
            // In a real implementation, you would submit the form here
            // For demo purposes, we'll just show an alert
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Search Form Submission
    const searchForms = document.querySelectorAll('.search-form, .sidebar-search');
    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const searchInput = this.querySelector('input[type="text"]');
            if (searchInput.value.trim() === '') {
                e.preventDefault();
                searchInput.style.borderColor = '#e74c3c';
                setTimeout(() => {
                    searchInput.style.borderColor = '';
                }, 2000);
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});