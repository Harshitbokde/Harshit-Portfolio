// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.style.color = '';

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = '#7c5cff';
        }

    });

});

// ===============================
// Console Message
// ===============================

console.log(
    "Welcome to Harshit's Portfolio 🚀"
);
// ===============================
// Mobile Navbar Toggle
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinksMobile = document.getElementById("nav-links");

if (menuToggle && navLinksMobile) {

    menuToggle.addEventListener("click", () => {

        navLinksMobile.classList.toggle("active");

        if (navLinksMobile.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinksMobile.classList.remove("active");
            menuToggle.textContent = "☰";
        });

    });
}
// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing");

const roles = [
    "Aspiring Software Developer",
    "Java Developer",
    "DSA Enthusiast",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
// ===============================
// Coding Journey Progress
// ===============================

const currentDay = 38;
const totalDays = 100;

const dayElement = document.getElementById("current-day");
const progressElement = document.getElementById("progress-fill");

if (dayElement && progressElement) {
    dayElement.textContent = `Day ${currentDay}+`;

    const progress = (currentDay / totalDays) * 100;
    progressElement.style.width = `${progress}%`;
}