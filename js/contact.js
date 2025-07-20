document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Map
    function initMap() {
        const location = { lat: 28.6139, lng: 77.2090 }; // Example coordinates (Delhi)
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 15,
            center: location,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
        });
        
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Excel Coaching Center'
        });
        
        const infowindow = new google.maps.InfoWindow({
            content: '<h3>Excel Coaching Center</h3><p>123 Excel Coaching Street, Education District</p>'
        });
        
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
    
    // Initialize map if API is loaded
    if (typeof google !== 'undefined') {
        initMap();
    }
    
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (name.value.trim() === '') {
                nameError.textContent = 'Please enter your name';
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Please enter your email address';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate Subject
            const subject = document.getElementById('subject');
            const subjectError = document.getElementById('subject-error');
            if (subject.value === '' || subject.value === null) {
                subjectError.textContent = 'Please select a subject';
                subjectError.style.display = 'block';
                isValid = false;
            } else {
                subjectError.style.display = 'none';
            }
            
            // Validate Message
            const message = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (message.value.trim() === '') {
                messageError.textContent = 'Please enter your message';
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real implementation, you would submit the form here
                // For demo purposes, we'll just show the success message
                const formSuccess = document.getElementById('form-success');
                formSuccess.style.display = 'flex';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            const answer = document.getElementById(this.getAttribute('aria-controls'));
            answer.style.maxHeight = isExpanded ? '0' : answer.scrollHeight + 'px';
        });
    });
    
    // Scroll to form
    const scrollToFormLinks = document.querySelectorAll('.scroll-to-form');
    scrollToFormLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.getElementById('contact-form');
            formSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
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
});