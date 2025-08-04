document.addEventListener('DOMContentLoaded', function () {
    // Helper: Show error message
    function showError(message) {
        alert(message); // Replace with custom UI if needed
    }

    // Search functionality
    try {
        const searchForm = document.querySelector('.search-box');
        if (searchForm) {
            searchForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const searchInput = this.querySelector('.search-input');
                if (!searchInput) {
                    showError('Search input not found.');
                    return;
                }
                const value = searchInput.value.trim();
                if (value.length === 0) {
                    showError('Please enter a search term.');
                    return;
                }
                // In a real implementation, you would submit the search
                alert('Searching for: ' + value);
                // window.location.href = '/search?q=' + encodeURIComponent(value);
            });
        }
    } catch (err) {
        showError('An error occurred in the search form.');
        console.error(err);
    }

    // Newsletter form
    try {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (!emailInput) {
                showError('Email input not found.');
                return;
            }
            const email = emailInput.value.trim();
            // Simple email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showError('Please enter a valid email address.');
                return;
            }
            alert('Thank you for subscribing with: ' + email);
            emailInput.value = '';
            // Example AJAX submission:
            // fetch('/subscribe', {
            //     method: 'POST',
            //     body: JSON.stringify({ email }),
            //     headers: { 'Content-Type': 'application/json' }
            // }).then(...).catch(err => showError('Subscription failed.'));
            });
        }
    } catch (err) {
        showError('An error occurred in the newsletter form.');
        console.error(err);
    }

    // Back to top button with smooth sliding
    try {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            // Ensure the button is hidden initially
            backToTopBtn.classList.remove('visible');
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            backToTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    } catch (err) {
        showError('An error occurred with the back to top button.');
        console.error(err);
    }

    // Initialize AdSense
    try {
        if (typeof adsbygoogle !== 'undefined') {
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    } catch (err) {
        // AdSense errors are non-critical
        console.warn('AdSense failed to initialize.', err);
    }
});