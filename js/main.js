document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements we want to animate
    const animateElements = document.querySelectorAll('.about-card, .project-card, .section-title');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Image Interaction Logic
    const mainImage = document.querySelector('.project-image img');
    const galleryImages = document.querySelectorAll('.project-gallery img');

    // Gallery Click: Update Main Image
    galleryImages.forEach(img => {
        img.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent opening lightbox immediately if we just want to switch
            mainImage.src = this.src;

            // Optional: Add active state to thumbnail
            galleryImages.forEach(i => i.style.borderColor = 'transparent');
            this.style.borderColor = 'var(--primary-color)';
        });
    });

    // Main Image Click: Open Lightbox
    if (mainImage) {
        mainImage.addEventListener('click', function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    }

    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = "none";
        });
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === "block") {
            lightbox.style.display = "none";
        }
    });
});

// Add CSS for animations dynamically or ensure it's in CSS
// We'll rely on the CSS file having these classes, but let's add them to the CSS file if I missed them.
// Wait, I missed adding .fade-in and .visible to the CSS.
// I will update the CSS file in the next step or just inject it here if I could, but better to update CSS.
