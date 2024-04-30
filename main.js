const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 500,
});

// Get the booking form element
const bookingForm = document.getElementById('booking-form');

// Add an event listener to the form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('room-type').value;
    const guests = document.getElementById('guests').value;

    // Validate the form data
    if (!checkin ||
        !checkout ||
        !roomType ||
        !guests) {
        alert('Please fill in all the fields');
        return;
    }

    // Create a booking object
    const booking = {
        checkin,
        checkout,
        roomType,
        guests,
    };

    // Display a success message
    alert(`Booking successful! Your booking details are: ${JSON.stringify(booking)}`);
});