function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".btnLearnM a");
    const whySection = document.querySelector(".why");

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the "why" section smoothly
        whySection.scrollIntoView({ behavior: "smooth" });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
// Define alternative names
const altNames = {
    "index.html": "Home",
    "Services.html": "Services",
    "train.html": "AboutUs",
    "sched.html": "Schedule",
    "contact.html": "Contact",
    "personalT.html": "PersonalTraining",
    "GT.html": "GroupTraining",
    "OVT.html": "OnlineVirtualTraining",
    "Nc.html": "NutritionCounseling"
};

// Function to modify the href attributes for links within a given container
function updateLinks(containerSelector) {
    document.querySelectorAll(`${containerSelector} a`).forEach(link => {
        const href = link.getAttribute('href');
        if (altNames[href]) {
            link.href = `${href}?alt=${altNames[href]}`;
        }
    });
}

// Update links in different containers
updateLinks('.nav-links');
updateLinks('.btnLearnMore');
updateLinks('.training-options');
updateLinks('.footer-section'); // Added this container
