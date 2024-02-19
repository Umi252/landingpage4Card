document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const sensitivity = 20; // Adjust sensitivity as needed
    
    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const windowWidth = window.innerWidth;
        const scrollX = (mouseX - windowWidth / 2) / sensitivity;
        main.scrollLeft += scrollX;
    });
});

const header = document.getElementById('header');

function rotateHeader() {
    header.style.animation = 'rotateAnimation 58s infinite linear';
}

rotateHeader();




