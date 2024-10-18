// Toggle the navigation menu on mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//crousel img section 
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-image');
const totalImages = carouselImages.length;

let currentIndex = 0;


function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    const offset = -currentIndex * 100; // Calculate the offset for sliding
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

//crousel img section 













document.getElementById('contact-icon').addEventListener('click', function() {
    alert('Contact us at: contact@example.com'); // Replace with your contact logic
});

document.getElementById('checkout-icon').addEventListener('click', function() {
    alert('Redirecting to checkout...'); // Replace with your checkout logic
});







