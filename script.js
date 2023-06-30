const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#close');
const logo = document.querySelector('.logo');
const navItems = document.querySelectorAll('.navbar .nav_item');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const btn = document.querySelector('.btn');
const image = document.querySelector('.image');

// Toggle active class on navbar
menuButton.onclick = () => {
  navbar.classList.add('active');
};

closeButton.onclick = () => {
  navbar.classList.remove('active');
};

// Mousemove home img
document.addEventListener('mousemove', move);

function move(e) {
  document.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Animation with GSAP
gsap.from(logo, { opacity: 0, duration: 0.5, delay: 0.2, y: 10 });
gsap.from(navItems, { opacity: 0, duration: 0.5, delay: 0.3, y: 30, stagger: 0.2 });
gsap.from(title, { opacity: 0, duration: 0.5, delay: 0.1, y: 30 });
gsap.from(description, { opacity: 0, duration: 0.5, delay: 0.2, y: 30 });
gsap.from(btn, { opacity: 0, duration: 0.5, delay: 0.3, y: 30 });
gsap.from(image, { opacity: 0, duration: 0.5, delay: 0.4, y: 30 });
