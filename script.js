document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll for navigation links
    if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(function(registration) {
      console.log("ServiceWorker registration successful with scope: ", registration.scope);
    }, function(err) {
      console.log("ServiceWorker registration failed: ", err);
    });
  });
    }

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

