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
};