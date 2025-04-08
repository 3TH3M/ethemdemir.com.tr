// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Send email using EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            })
            .catch((error) => {
                // Show error message
                alert('Sorry, there was an error sending your message. Please try again later.');
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
}

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
}); 