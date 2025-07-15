// JavaScript para o site Ross Construções
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de contadores
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3');
        
        counters.forEach(counter => {
            const target = counter.textContent.replace(/[^0-9]/g, '');
            const increment = target / 200;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = counter.textContent.replace(/[0-9]+/, target);
                    clearInterval(timer);
                } else {
                    counter.textContent = counter.textContent.replace(/[0-9]+/, Math.floor(current));
                }
            }, 10);
        });
    }
    
    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('why-ross')) {
                    animateCounters();
                }
            }
        });
    });
    
    const whyRossSection = document.querySelector('.why-ross');
    if (whyRossSection) {
        observer.observe(whyRossSection);
    }
    
    // Menu mobile toggle (se necessário)
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const toggleButton = document.createElement('button');
                toggleButton.className = 'mobile-menu-toggle';
                toggleButton.innerHTML = '☰';
                toggleButton.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: block;
                    margin: 0 auto;
                `;
                
                nav.insertBefore(toggleButton, navMenu);
                
                toggleButton.addEventListener('click', () => {
                    navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
                });
                
                navMenu.style.display = 'none';
            }
        }
    };
    
    // Inicializar menu mobile
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
    
    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
    
    console.log('Ross Construções - Site carregado com sucesso!');
});

