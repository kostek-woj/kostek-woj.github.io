window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');

    // Hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    // Footer Map
    let map = L.map('map').setView([44.62597464613023, -63.58017607767837], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // map.dragging.disable();
    // map.touchZoom.disable();
    // map.doubleClickZoom.disable();
    // map.scrollWheelZoom.disable();
    // map.boxZoom.disable();
    // map.keyboard.disable();

    let marker = L.marker([44.62597464613023, -63.58017607767837]).addTo(map);

    // Form
    let form = document.querySelector('.form');
    let formBtn = document.querySelector('.form a.btn');
    let formSent = document.querySelector('.form-sent');
    let formSentPersonalMessage = document.querySelector('.form-sent h4');
    let name = '';

    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        name = form.querySelector('#contact-form input[name="contact-name"]').value;
        
        formSentPersonalMessage.textContent = `Thank you for your message, ${name}!`;
        
        form.classList.add('sent');

        setTimeout(() => {
            form.style.display = 'none';
            formSent.classList.add('sent');
        }, 500);
    });
});