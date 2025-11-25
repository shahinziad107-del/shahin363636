// Initialize Lucide Icons
lucide.createIcons();

// --- Global State & Utils ---
const state = {
    isMenuOpen: false,
    activeStructureTab: 'mechanistic'
};

// --- Navbar Logic ---
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-brand-dark/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-6');

        scrollTopBtn.classList.remove('translate-y-20', 'opacity-0');
        scrollTopBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
        navbar.classList.remove('bg-brand-dark/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'py-3');
        navbar.classList.add('bg-transparent', 'py-6');

        scrollTopBtn.classList.add('translate-y-20', 'opacity-0');
        scrollTopBtn.classList.remove('translate-y-0', 'opacity-100');
    }
});

mobileMenuBtn.addEventListener('click', () => {
    state.isMenuOpen = !state.isMenuOpen;
    if (state.isMenuOpen) {
        mobileMenu.classList.remove('max-h-0');
        mobileMenu.classList.add('max-h-80');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('max-h-0');
        mobileMenu.classList.remove('max-h-80');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

function scrollToSection(id) {
    state.isMenuOpen = false;
    mobileMenu.classList.add('max-h-0');
    mobileMenu.classList.remove('max-h-80');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();

    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- Copy Link Logic ---
function handleCopyLink(btnId, iconId, textId) {
    const btn = document.getElementById(btnId);
    const icon = document.getElementById(iconId);
    const text = document.getElementById(textId);

    if (!btn) return;

    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);

        const originalIcon = icon.getAttribute('data-lucide');
        const originalText = text.textContent;

        icon.setAttribute('data-lucide', 'check');
        icon.classList.add('text-green-400');
        icon.classList.remove('text-brand-accent');
        text.textContent = 'Copied!';
        lucide.createIcons();

        setTimeout(() => {
            icon.setAttribute('data-lucide', originalIcon);
            icon.classList.remove('text-green-400');
            icon.classList.add('text-brand-accent');
            text.textContent = originalText;
            lucide.createIcons();
        }, 2000);
    });
}

handleCopyLink('copy-link-btn', 'copy-icon', 'copy-text');
handleCopyLink('mobile-copy-link-btn', 'mobile-copy-icon', 'mobile-copy-text');

// --- Typing Effect ---
const typingText = document.getElementById('typing-text');
const words = ["Dynamic World", "Complex Environment", "Global Market"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// --- Parallax Effect ---
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;

    const glow1 = document.getElementById('hero-glow-1');
    const glow2 = document.getElementById('hero-glow-2');

    if (glow1) glow1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (glow2) glow2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

// --- Scroll Reveal ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Structure Tabs ---
function setStructureTab(tab) {
    state.activeStructureTab = tab;
    const bg = document.getElementById('structure-toggle-bg');
    const btnMech = document.getElementById('btn-mechanistic');
    const btnOrg = document.getElementById('btn-organic');
    const contentMech = document.getElementById('content-mechanistic');
    const contentOrg = document.getElementById('content-organic');

    if (tab === 'mechanistic') {
        bg.classList.remove('left-[156px]', 'from-green-500', 'to-emerald-600');
        bg.classList.add('left-1', 'from-brand-primary', 'to-blue-600');

        btnMech.classList.add('text-white');
        btnMech.classList.remove('text-gray-400', 'hover:text-white');

        btnOrg.classList.remove('text-white');
        btnOrg.classList.add('text-gray-400', 'hover:text-white');

        contentMech.classList.remove('opacity-0', '-translate-x-10', 'pointer-events-none');
        contentMech.classList.add('opacity-100', 'translate-x-0');

        contentOrg.classList.remove('opacity-100', 'translate-x-0');
        contentOrg.classList.add('opacity-0', 'translate-x-10', 'pointer-events-none');
    } else {
        bg.classList.remove('left-1', 'from-brand-primary', 'to-blue-600');
        bg.classList.add('left-[156px]', 'from-green-500', 'to-emerald-600');

        btnMech.classList.remove('text-white');
        btnMech.classList.add('text-gray-400', 'hover:text-white');

        btnOrg.classList.add('text-white');
        btnOrg.classList.remove('text-gray-400', 'hover:text-white');

        contentMech.classList.remove('opacity-100', 'translate-x-0');
        contentMech.classList.add('opacity-0', '-translate-x-10', 'pointer-events-none');

        contentOrg.classList.remove('opacity-0', 'translate-x-10', 'pointer-events-none');
        contentOrg.classList.add('opacity-100', 'translate-x-0');
    }
}

// --- Download Buttons ---
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.disabled) return;

        const originalContent = this.innerHTML;
        this.disabled = true;

        // Downloading state
        this.className = "download-btn relative overflow-hidden p-3 rounded-full transition-all duration-300 border shadow-lg bg-brand-primary border-brand-primary text-white cursor-wait";
        this.innerHTML = '<div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';

        setTimeout(() => {
            // Done state
            this.className = "download-btn relative overflow-hidden p-3 rounded-full transition-all duration-300 border shadow-lg bg-green-500 border-green-500 text-white";
            this.innerHTML = '<i data-lucide="check" class="w-5 h-5 animate-in zoom-in duration-300"></i>';
            lucide.createIcons();

            setTimeout(() => {
                // Reset
                this.className = "download-btn relative overflow-hidden p-3 rounded-full transition-all duration-300 border shadow-lg bg-white/5 hover:bg-brand-accent hover:text-brand-dark border-white/10 hover:border-brand-accent hover:scale-110";
                this.innerHTML = originalContent;
                this.disabled = false;
                lucide.createIcons();
            }, 3000);
        }, 1500);
    });
});

// --- Footer Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Background Particles (Canvas) ---
const canvas = document.getElementById('bg-particles');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 50;
const connectionDistance = 150;
const mouseDistance = 200;

let mouseX = -1000;
let mouseY = -1000;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resize);
resize();

window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, ' : 'rgba(6, 182, 212, '; // Blue or Cyan
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * 0.5;
            const directionY = forceDirectionY * force * 0.5;
            this.x += directionX;
            this.y += directionY;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + '0.5)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(100, 116, 139, ${0.1 * (1 - distance / connectionDistance)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// --- Video Modal Logic ---
const videoModal = document.getElementById('video-modal');
const videoFrame = document.getElementById('video-frame');
const videoUrl = "https://drive.google.com/file/d/1cMprSCtsN61axCXbUV9WBPMk3y8nkEv5/preview";

function openVideoModal() {
    if (videoModal && videoFrame) {
        videoFrame.src = videoUrl;
        videoModal.classList.remove('hidden');
        // Force reflow
        void videoModal.offsetWidth;
        videoModal.classList.remove('opacity-0');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeVideoModal() {
    if (videoModal && videoFrame) {
        videoModal.classList.add('opacity-0');
        setTimeout(() => {
            videoModal.classList.add('hidden');
            videoFrame.src = ""; // Stop video
            document.body.style.overflow = '';
        }, 300);
    }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && !videoModal.classList.contains('hidden')) {
        closeVideoModal();
    }
});

// Expose functions to global scope for HTML onclick attributes
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
