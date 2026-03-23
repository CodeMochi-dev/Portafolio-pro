/**
 * Hackerman Portfolio Scripts
 * Vanilla JS - No Frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Configuration
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set initial theme
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update Lucide icons if needed
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });

    // 2. Scroll Progress & Sticky Header Logic
    const scrollProgress = document.getElementById('scroll-progress');
    const navCapsule = document.querySelector('.nav-capsule');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";

        // Minimalist sticky behavior
        if (winScroll > 50) {
            navCapsule.style.background = 'rgba(var(--bg), 0.85)';
            navCapsule.style.transform = 'scale(0.98)';
        } else {
            navCapsule.style.background = 'rgba(var(--bg), 0.7)';
            navCapsule.style.transform = 'scale(1)';
        }
    });

    // 3. Reveal on Scroll (Intersection Observer)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Reveal only once
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Magnetic Button Effect
    const magneticBtns = document.querySelectorAll('.magnetic');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 5. Contact Form Handling (Simulated)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalContent = submitBtn.innerHTML;

            // Simple loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Enviando...';

            setTimeout(() => {
                submitBtn.innerHTML = '¡Enviado con éxito! <i data-lucide="check"></i>';
                if (typeof lucide !== 'undefined') lucide.createIcons();
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalContent;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }, 3000);
            }, 1500);
        });
    }

    // 6. Copy Email to Clipboard
    const copyBtn = document.getElementById('copy-btn');
    const emailText = document.getElementById('email-text');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const originalContent = copyBtn.innerHTML;
            
            navigator.clipboard.writeText(emailText.innerText).then(() => {
                copyBtn.innerHTML = '<i data-lucide="check-check"></i> Copiado';
                if (typeof lucide !== 'undefined') lucide.createIcons();
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalContent;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }, 2000);
            });
        });
    }
});
