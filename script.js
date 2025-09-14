// ...existing code...

// Simulate loading
setTimeout(() => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 500);
}, 2000);

// Page navigation
document.querySelectorAll('.nav-link, .navbar-brand, footer a[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');

        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        document.getElementById(targetPage).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Add 3D effect to game cards on mouse move (very subtle effect)
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const x = e.offsetX;
        const y = e.offsetY;
        // Further reduce the rotation and translation for a very subtle effect
        const rotateY = (-1 / 20 * x + 5); // even less than before
        const rotateX = (1 / 30 * y - 5);  // even less than before
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(2px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
    }

    // Navbar effect
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(15, 17, 35, 0.98) !important';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(15, 17, 35, 0.95) !important';
    }
});
