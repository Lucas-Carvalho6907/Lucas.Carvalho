// --- 1. ANIMAÇÃO DE ENTRADA (FADE-IN) ---
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));


// --- 2. SIDEBAR / MENU MOBILE ---
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

if (openBtn && closeBtn && sidebar) {
    const closeMenu = () => sidebar.classList.remove('active');

    openBtn.addEventListener('click', () => sidebar.classList.add('active'));
    closeBtn.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// --- 3. EFEITO TOUCH NOS CARDS DE PROJETO ---
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('touchstart', () => {
        projectCards.forEach(c => c.classList.remove('touch-active'));
        card.classList.add('touch-active');
    }, { passive: true });

    card.addEventListener('touchend', () => {
        setTimeout(() => {
            card.classList.remove('touch-active');
        }, 500);
    }, { passive: true });
});


// --- 4. CORREÇÃO DE ALTURA VIEWPORT (Mobile Vh Fix) ---
const fixMobileHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', fixMobileHeight);
fixMobileHeight();