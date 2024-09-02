document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in effect on scroll
    const carItems = document.querySelectorAll('.car-item');
    const options = {
        threshold: 0.1,
    };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    carItems.forEach(item => {
        observer.observe(item);
    });
});
