/**
 * Blog/Learning Hub JavaScript
 * Handles modal functionality and user interactions
 */

// Open path modal
function openPathModal(pathName) {
    // Hide all modal contents
    document.getElementById('modal-performance').style.display = 'none';
    document.getElementById('modal-design').style.display = 'none';
    document.getElementById('modal-security').style.display = 'none';
    document.getElementById('modal-distributed').style.display = 'none';

    // Show selected path
    document.getElementById('modal-' + pathName).style.display = 'block';

    // Show overlay and modal
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('path-modal').style.display = 'block';

    // Add active class for animations
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('path-modal').classList.add('active');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close path modal
function closePathModal() {
    // Hide overlay and modal
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('path-modal').style.display = 'none';

    // Remove active class
    document.getElementById('modal-overlay').classList.remove('active');
    document.getElementById('path-modal').classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePathModal();
    }
});

// Close modal when clicking outside (on overlay)
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closePathModal();
            }
        });
    }
});

// Smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add interactivity to hub cards (optional)
document.addEventListener('DOMContentLoaded', function() {
    const hubCards = document.querySelectorAll('.hub-card');
    hubCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Don't interfere with link clicks
            if (event.target.tagName !== 'A') {
                const link = this.querySelector('.hub-card-link');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
});

// Track which hub is currently being viewed (for analytics/user tracking)
function trackHubView(hubName) {
    console.log('User viewing hub:', hubName);
    // You can extend this for analytics later
}

// Track which learning path is selected
function trackPathSelection(pathName) {
    console.log('User selected path:', pathName);
    // You can extend this for analytics later
}
