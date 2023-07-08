const menuNavs = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

menuNavs.forEach(nav => {

    nav.addEventListener('click', (e) => {
        
        e.preventDefault();

        let headerHeight = header.getBoundingClientRect().height;
        let sectionPosition = document.querySelector(nav.attributes.href.value).offsetTop

        window.scrollTo({
            top: sectionPosition - headerHeight,
            behavior: 'smooth'
        });
    });
});