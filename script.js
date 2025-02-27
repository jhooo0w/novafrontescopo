// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    offset: 50
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Fechar menu ao redimensionar a tela para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');

        // Inicialmente, esconde todas as respostas
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';

        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.toggle-icon');
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = '0px';
                    otherAnswer.style.opacity = '0';
                    otherIcon.textContent = '+';
                }
            });

            // Toggle do item atual
            const isActive = item.classList.contains('active');
            
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                icon.textContent = '−';
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = '0px';
                answer.style.opacity = '0';
                icon.textContent = '+';
            }
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio items data
const portfolioItems = [
    {
        title: 'E-commerce Fashion',
        category: 'E-commerce',
        image: 'assets/portfolio1.jpg'
    },
    {
        title: 'Restaurant Website',
        category: 'Institucional',
        image: 'assets/portfolio2.jpg'
    },
    {
        title: 'Tech Blog',
        category: 'Blog',
        image: 'assets/portfolio3.jpg'
    }
];

// Populate portfolio grid
const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioItems.forEach(item => {
    const portfolioCard = document.createElement('div');
    portfolioCard.className = 'portfolio-card';
    portfolioCard.setAttribute('data-aos', 'fade-up');
    
    portfolioCard.innerHTML = `
        <div class="portfolio-image">
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="portfolio-info">
            <h3>${item.title}</h3>
            <p>${item.category}</p>
        </div>
    `;
    
    portfolioGrid.appendChild(portfolioCard);
});

// Contact form handling
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    // Add your contact form logic here
    alert('Entre em contato pelo email: contato@websolutions.com');
});

// Controle do menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksMenu = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinksMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Intersection Observer para os passos
const passoItems = document.querySelectorAll('.passo-item');
const options = {
    root: null,
    rootMargin: '-20% 0px',
    threshold: 0.5
};

const passoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Quando o passo está visível
        if (entry.isIntersecting) {
            entry.target.classList.add('completed');
            
            // Marca todos os passos anteriores como completed
            let currentIndex = Array.from(passoItems).indexOf(entry.target);
            for (let i = 0; i <= currentIndex; i++) {
                passoItems[i].classList.add('completed');
            }
        } else {
            // Quando o passo não está mais visível
            entry.target.classList.remove('completed');
            
            // Desmarca todos os passos posteriores
            let currentIndex = Array.from(passoItems).indexOf(entry.target);
            for (let i = currentIndex; i < passoItems.length; i++) {
                passoItems[i].classList.remove('completed');
            }
        }
    });
}, options);

// Observa cada passo
passoItems.forEach(item => {
    passoObserver.observe(item);
});
