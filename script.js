// Toggle icon nav ul
let menuIcon = document.querySelector('#menu-icon');
let navul = document.querySelector('nav ul');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-arrow-up-wide-line');
    navul.classList.toggle('active');
};

// Scroll Sections Active lInk
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('container nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    // Sticky navbar
    let container = document.querySelector('container');

    container.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle icon and navul when click navul link (scroll)
    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'ri-arrow-up-wide-line' class on the menu icon
        menuIcon.classList.toggle('ri-arrow-up-wide-line');
    
        // Toggle the 'active' class on the navigation list
        navul.classList.toggle('active');

        // If the 'active' class is present, remove the 'ri-arrow-down-line' class, else add it
        if (navul.classList.contains('active')) {
            menuIcon.classList.remove('ri-arrow-down-line');
        } else {
            menuIcon.classList.add('ri-arrow-down-line');
        }
    });
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .contact-left', { origin: 'top' });
ScrollReveal().reveal('.row img, .services-container, .portfolio-container, .contact-right', { origin: 
    'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-col-2 p, .about-col-2 h3, .about-col-2 a', { origin: 
'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Developer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});