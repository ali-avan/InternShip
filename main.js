// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add click event listener to each link
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            // No need to prevent default behavior for navigation
            // event.preventDefault();

            // Let the browser handle navigation based on the href attribute
        });
    });
});
