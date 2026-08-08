/* =====================================================
   KORERA ONLINE – Interactive JavaScript
   ===================================================== */

'use strict';

/* ---- Navbar scroll effect ---- */
(function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* ---- Hamburger mobile menu ---- */
(function () {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!burger || !navLinks) return;

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navbar && !navbar.contains(e.target)) {
            navLinks.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
})();

/* ---- Smooth scroll for anchor links ---- */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navH = document.getElementById('navbar')?.offsetHeight || 80;
                const top = target.getBoundingClientRect().top + window.scrollY - navH;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
})();

/* ---- Simple AOS (Animate On Scroll) ---- */
(function () {
    const THRESHOLD = 0.15;
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    // Apply delay if provided
    elements.forEach(el => {
        const delay = el.getAttribute('data-aos-delay');
        if (delay) el.style.transitionDelay = delay + 'ms';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: THRESHOLD });

    elements.forEach(el => observer.observe(el));
})();

/* ---- Animated counter for hero stats ---- */
(function () {
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const from = 0;
        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(from + (target - from) * eased).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    const counters = [
        { id: 'price-display', value: 6500, duration: 1200 }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const config = counters.find(c => c.id === el.id);
                if (config) animateCounter(el, config.value, config.duration);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (el) observer.observe(el);
    });
})();

/* ---- Contact Form Submission ---- */
(function () {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#contact-name').value.trim();
        const email = form.querySelector('#contact-email').value.trim();
        const message = form.querySelector('#contact-message').value.trim();
        const submitBtn = form.querySelector('#contact-submit');

        // Basic validation
        if (!name || !email || !message) {
            feedback.className = 'form-feedback error';
            feedback.textContent = '⚠️ Uzuza imirongo yose isabwa (izina, email, ubutumwa).';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            feedback.className = 'form-feedback error';
            feedback.textContent = "\u26a0\ufe0f Andika email y'ukuri kandi ikore neza.";
            return;
        }

        // Simulate sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Tegereza...';

        setTimeout(() => {
            feedback.className = 'form-feedback success';
            feedback.textContent = '✓ Ubutumwa bwawe bwakiriwe! Tuzakubwira vuba.';
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Ohereza Ubutumwa →';
        }, 1500);
    });
})();

/* ---- Floating cards parallax effect on hero ---- */
(function () {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const cards = hero.querySelectorAll('.floating-card');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;

        cards.forEach((card, i) => {
            const depth = (i + 1) * 6;
            card.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        cards.forEach(card => {
            card.style.transform = '';
        });
    });
})();

/* ---- Active nav link on scroll ---- */
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(sec => observer.observe(sec));
})();

/* ---- Service card tilt effect ---- */
(function () {
    const cards = document.querySelectorAll('.service-card, .testimonial-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();




/* ---- Foreign Chat Interactive Calculator ---- */
(function () {
    const slider = document.getElementById('hours-slider');
    const hoursVal = document.getElementById('hours-val');
    const dailyEarn = document.getElementById('daily-earn');
    const weeklyEarn = document.getElementById('weekly-earn');
    const monthlyEarn = document.getElementById('monthly-earn');

    if (!slider || !hoursVal || !dailyEarn || !weeklyEarn || !monthlyEarn) return;

    const HOURLY_RATE = 2500;

    function updateEarnings() {
        const hours = parseInt(slider.value, 10);
        const lang = localStorage.getItem('akazikeza_lang') || 'rw';

        if (lang === 'en') {
            hoursVal.textContent = hours === 1 ? '1 Hour' : `${hours} Hours`;
        } else if (lang === 'fr') {
            hoursVal.textContent = hours === 1 ? '1 Heure' : `${hours} Heures`;
        } else {
            hoursVal.textContent = hours === 1 ? 'Isaha 1' : `${hours} Amasaha`;
        }

        const daily = hours * HOURLY_RATE;
        const weekly = daily * 7;
        const monthly = daily * 30;

        dailyEarn.textContent = `${daily.toLocaleString()} FRW`;
        weeklyEarn.textContent = `${weekly.toLocaleString()} FRW`;
        monthlyEarn.textContent = `${monthly.toLocaleString()} FRW`;
    }

    window.updateCalculatorLanguage = function () {
        updateEarnings();
    };

    slider.addEventListener('input', updateEarnings);
    updateEarnings();
})();

