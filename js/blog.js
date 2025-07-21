document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchForm = document.querySelector('.search-box');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('.search-input');
            if (searchInput.value.trim() !== '') {
                // In a real implementation, you would submit the search
                alert('Searching for: ' + searchInput.value);
                // window.location.href = '/search?q=' + encodeURIComponent(searchInput.value);
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value.trim() !== '') {
                // In a real implementation, you would submit the form
                alert('Thank you for subscribing with: ' + emailInput.value);
                emailInput.value = '';
                // Example AJAX submission:
                // fetch('/subscribe', {
                //     method: 'POST',
                //     body: JSON.stringify({ email: emailInput.value }),
                //     headers: { 'Content-Type': 'application/json' }
                // }).then(...)
            }
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize AdSense
    if (typeof adsbygoogle !== 'undefined') {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
});